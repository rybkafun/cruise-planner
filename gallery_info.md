# Dokumentacja Galerii Automatycznej (Gallery Watcher)

Projekt zawiera wbudowany mechanizm automatycznej optymalizacji i dodawania zdjęć do galerii rejsów. Skrypt ten samodzielnie obserwuje foldery ze zdjęciami, przetwarza je na potrzeby przeglądarki (kompresja, zmiana rozmiaru, konwersja na JPG) i integruje ze strukturą strony.

## Jak działa mechanizm?

Mechanizm opiera się na skrypcie Bash (`scripts/process-gallery.sh`), który w nieskończonej pętli przeszukuje foldery źródłowe zgodnie ze ścieżką `gallery/*/src`. 

Gdy wykryje nowe pliki (np. zrzucone z telefonu pliki `.HEIC`, `.JPG`, `.PNG`), następuje:
1. **Przetworzenie głównego zdjęcia**: Konwersja do `.jpg` i zeskalowanie do maksymalnego wymiaru 1920px (zapis w `public/gallery/[nazwa_galerii]`).
2. **Generowanie miniatury**: Zeskalowanie do maksymalnego wymiaru 600px na potrzeby siatki zdjęć na stronie (zapis w `public/gallery/[nazwa_galerii]/thumb`).
3. **Rejestracja w kodzie źródłowym**: Skrypt dodaje wpis o nowym zdjęciu do tablicy w pliku `src/lib/[nazwa_galerii]Images.ts`. Dzięki temu aplikacja React od razu wie o nowym zdjęciu.
4. **Czyszczenie**: Oryginalny (ciężki) plik źródłowy zostaje usunięty z folderu `src`, by nie zaśmiecać repozytorium GitHub i nie zajmować niepotrzebnie miejsca na dysku.

Gdy wykryje, że istniejący plik graficzny został usunięty z publicznej galerii docelowej (np. z `public/gallery/[nazwa_galerii]`), następuje **Synchronizacja usunięć**:
1. Wykrycie braku pliku: Skrypt zauważa ubytek w zbiorze.
2. Usunięcie miniatury: Kojarzona z tym plikiem miniaturka zostaje automatycznie wykasowana z folderu `thumb`.
3. Czyszczenie kodu: Wpis o pliku jest usuwany z listy `src/lib/[nazwa_galerii]Images.ts`, by React na żywo wykasował puste pole i błąd ze strony.

## Jak korzystać z funkcji krok po kroku?

### Dodawanie zdjęć do istniejącej galerii (np. Kanary)
1. Uruchom mechanizm wpisując w terminalu w głównym folderze projektu komendę:
   ```bash
   npm run gallery:watch
   ```
2. Skopiuj/przeciągnij swoje oryginalne zdjęcia z rejsu do folderu:
   `gallery/kanary/src` (Zwróć uwagę na podfolder `src`).
3. Odczekaj chwilę. Skrypt przetworzy zdjęcia jedno po drugim. Możesz zobaczyć to w konsoli. Pomyślnie przetworzone znikną z folderu `src`.
4. Gotowe! Zdjęcia od razu pojawią się na odpowiedniej podstronie.

### Otwieranie nowej galerii (np. Grecja)
1. W głównym katalogu `gallery/` stwórz nowy folder dla swojego rejsu, a w nim podfolder `src`, np. `gallery/grecja/src`.
2. Do utworzonego folderu `gallery/grecja/src` wrzuć paczkę pierwszych zdjęć.
3. Jeśli komenda `npm run gallery:watch` jest uruchomiona, skrypt automatycznie zbuduje całą infrastrukturę:
   - Utworzy `public/gallery/grecja` i `public/gallery/grecja/thumb` do osadzania na stronie.
   - Skompresuje tam zdjęcia.
   - Utworzy plik `src/lib/grecjaImages.ts` podpinający galerię dla programisty w aplikacji głównej.

### Usuwanie zdjęć
1. Wejdź do katalogu docelowego, gdzie skompresowane są ostateczne zdjęcia danej galerii: `public/gallery/[nazwa_galerii]`.
2. Skasuj dowolny plik `.jpg`, którego już nie chcesz.
3. Jeśli komenda `gallery:watch` pracuje w tle w terminalu, sama zajmie się resztą – usunie wpis i spójność bazy zostanie zachowana.

## Uwagi dodatkowe
- Skrypt do optymalizacji zdjęć natywnie wykorzystuje wbudowane w system macOS narzędzie `sips`.
- System przetwarza wszystkie popularne rozszerzenia, jednak wyjściowym formatem dla stron internetowych jest zawsze uniwersalny i odchudzony `JPG`.
- Proces zautomatyzowanego watchera jest całkowicie obojętny dla serwera deweloperskiego Vite (`npm run dev`) – mogą działać równolegle w osobnych zakładkach terminala.
