import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { cruises } from "@/lib/cruises";
import { toast } from "sonner";

const formSchema = z.object({
    name: z.string().min(2, "Imię i nazwisko musi mieć co najmniej 2 znaki"),
    email: z.string().email("Niepoprawny adres email"),
    phone: z.string().min(9, "Numer telefonu musi mieć co najmniej 9 cyfr"),
    cruise: z.string().min(1, "Proszę wybrać rejs"),
    message: z.string().optional(),
});

interface RegistrationModalProps {
    children: React.ReactNode;
    defaultCruise?: string;
    onSuccess?: () => void;
}

export const RegistrationModal = ({ children, defaultCruise = "", onSuccess }: RegistrationModalProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showFullModal, setShowFullModal] = useState(false);
    const [fullCaptainName, setFullCaptainName] = useState("");
    const navigate = useNavigate();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            cruise: defaultCruise,
            message: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsSubmitting(true);
        try {
            const response = await fetch("/api/submit-registration", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            const responseData = await response.json().catch(() => ({}));

            if (!response.ok) {
                if (response.status === 409) {
                    if (responseData.error === "CAPTAIN_FULL") {
                        setFullCaptainName(responseData.captain || "Wybrany");
                        setShowFullModal(true);
                        setIsSubmitting(false);
                        return;
                    }
                }
                throw new Error("Błąd podczas wysyłania zgłoszenia");
            }

            if (responseData.isReserve) {
                toast.success("Niestety skończyły się nam miejsca na ten rejs, zapiszemy Cię na listę rezerwową", { duration: 6000 });
            } else {
                toast.success("Dziękujemy za zgłoszenie, pozostajemy w kontakcie!");
            }
            setIsOpen(false);
            form.reset();
            onSuccess?.();
        } catch (error) {
            console.error("Submission error:", error);
            toast.error("Wystąpił błąd. Spróbuj ponownie później.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>{children}</DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Zapisz się na rejs</DialogTitle>
                        <DialogDescription>
                            Zostaw nam swoje dane, a skontaktujemy się z Tobą w celu ustalenia
                            szczegółów.
                        </DialogDescription>
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Imię i Nazwisko</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Jan Kowalski" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="jan@example.com" type="email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Numer telefonu</FormLabel>
                                        <FormControl>
                                            <Input placeholder="+48 123 456 789" type="tel" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="cruise"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Wybierz rejs</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Wybierz interesujący Cię rejs" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {cruises.map((cruise) => (
                                                    <SelectItem key={cruise.title} value={cruise.title}>
                                                        {cruise.title} ({cruise.date})
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Poznajmy się: (opcjonalnie)</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Napisz coś o sobie, dlaczego chcesz popłynąć lub czy masz doświadczenie..." className="resize-none" rows={3} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? "Wysyłanie..." : "Wyślij zgłoszenie"}
                            </Button>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>

            <Dialog open={showFullModal} onOpenChange={setShowFullModal}>
                <DialogContent className="sm:max-w-[425px] z-[60]">
                    <DialogHeader>
                        <DialogTitle>Brak wolnych miejsc</DialogTitle>
                        <DialogDescription className="text-base text-foreground mt-4 leading-relaxed">
                            Tu kapitan {fullCaptainName}, mam jacht wypełniony po brzegi w tym terminie. Wybierz inny termin lub skontaktuj się z nami, z pewnością coś wymyślimy.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-center mt-6">
                        <Button
                            onClick={() => {
                                setShowFullModal(false);
                                setIsOpen(false);
                                navigate("/");
                            }}
                            className="w-full"
                        >
                            Płynę w innym terminie
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};
