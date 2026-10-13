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
import { useLanguage } from "@/context/LanguageContext";

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
    const { lang, t } = useLanguage();
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
                toast.success(t.modalSuccessReserve, { duration: 6000 });
            } else {
                toast.success(t.modalSuccess);
            }
            setIsOpen(false);
            form.reset();
            onSuccess?.();
        } catch (error) {
            console.error("Submission error:", error);
            toast.error(t.modalError);
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
                        <DialogTitle>{t.modalTitle}</DialogTitle>
                        <DialogDescription>
                            {t.modalDesc}
                        </DialogDescription>
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t.modalNameLabel}</FormLabel>
                                        <FormControl>
                                            <Input placeholder={t.modalNamePlaceholder} {...field} />
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
                                        <FormLabel>{t.modalEmailLabel}</FormLabel>
                                        <FormControl>
                                            <Input placeholder={t.modalEmailPlaceholder} type="email" {...field} />
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
                                        <FormLabel>{t.modalPhoneLabel}</FormLabel>
                                        <FormControl>
                                            <Input placeholder={t.modalPhonePlaceholder} type="tel" {...field} />
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
                                        <FormLabel>{t.modalCruiseLabel}</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder={t.modalCruisePlaceholder} />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {cruises.map((cruise) => {
                                                    const cruiseName = lang === "en" && cruise.titleEn ? cruise.titleEn : cruise.title;
                                                    const cruiseDate = lang === "en" && cruise.dateEn ? cruise.dateEn : cruise.date;
                                                    return (
                                                        <SelectItem key={cruise.title} value={cruise.title}>
                                                            {cruiseName} ({cruiseDate})
                                                        </SelectItem>
                                                    );
                                                })}
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
                                        <FormLabel>{t.modalMsgLabel}</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder={t.modalMsgPlaceholder} className="resize-none" rows={3} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? t.modalSubmitting : t.modalSubmitBtn}
                            </Button>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>

            <Dialog open={showFullModal} onOpenChange={setShowFullModal}>
                <DialogContent className="sm:max-w-[425px] z-[60]">
                    <DialogHeader>
                        <DialogTitle>{t.modalFullTitle}</DialogTitle>
                        <DialogDescription className="text-base text-foreground mt-4 leading-relaxed">
                            {t.modalFullDesc(fullCaptainName)}
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
                            {t.modalFullBtn}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};
