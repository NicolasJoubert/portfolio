import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence } from "framer-motion";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import Button from "../ui/ButtonPerso";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";

const contactSchema = z.object({
  name: z.string().min(2, "Ton nom est requis"),
  email: z.string().email("Email invalide"),
  subject: z.enum(
    [
      "Création site Web",
      "Audit Produit / PO",
      "Stratégie Customer Success",
      "Autre",
    ],
    {
      message: "Dis-moi comment je peux t'aider !",
    },
  ),
  message: z.string().min(10, "Explique-moi ton besoin en quelques mots"),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: undefined,
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof contactSchema>) {
    try {
      console.log("Sending data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Message envoyé !", {
        description: "Je vous répondrai dans les plus brefs délais.",
        position: "bottom-right",
      });
      form.reset();
    } catch {
      toast.error("Erreur lors de l'envoi", {
        description: "Veuillez réessayer plus tard.",
        position: "bottom-right",
      });
    }
  }

  const { isSubmitting } = form.formState;

  return (
    <section id="contact" className="w-full flex justify-center">
      <Card className="w-full sm:max-w-md bg-transparent border-none shadow-none ring-0 p-2">
        <CardHeader className="px-0 pt-0">
          <CardTitle>Formulaire</CardTitle>
          <CardDescription>
            Contactez-moi pour tous vos projets et demande de renseignements
          </CardDescription>
        </CardHeader>
        <CardContent className="px-0 pb-0">
          <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Nom / Entreprise</FieldLabel>
                    <Input
                      {...field}
                      placeholder="Ex: Jean de chez TechCorp"
                      className="bg-white text-black placeholder:text-sm md:placeholder:text-xs placeholder:italic"
                    />
                    <AnimatePresence>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </AnimatePresence>
                  </Field>
                )}
              />
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Email professionnel</FieldLabel>
                    <Input
                      {...field}
                      type="email"
                      placeholder="jean@techcorp.com"
                      className="bg-white text-black placeholder:text-sm md:placeholder:text-xs placeholder:italic"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="subject"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Votre besoin</FieldLabel>
                    <div className="flex flex-wrap gap-3 py-2 px-2">
                      {[
                        "Création site Web",
                        "Audit Produit / PO",
                        "Stratégie Customer Success",
                        "Autre",
                      ].map((opt) => (
                        <Button
                          key={opt}
                          type="button"
                          variant={
                            field.value === opt ? "primary" : "secondary"
                          }
                          onClick={() => field.onChange(opt)}
                          className={
                            field.value === opt
                              ? "scale-105 shadow-md relative z-10"
                              : ""
                          }
                        >
                          {opt}
                        </Button>
                      ))}
                    </div>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="message"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Message</FieldLabel>
                    <InputGroup className="bg-white text-black">
                      <InputGroupTextarea
                        {...field}
                        placeholder="Décrivez votre projet ou votre problématique..."
                        rows={5}
                        className="min-h-24 resize-none placeholder:text-sm md:placeholder:text-xs placeholder:italic"
                      />
                      <InputGroupAddon align="block-end">
                        <InputGroupText className="tabular-nums text-[10px] opacity-50">
                          {field.value.length}/1000
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter className="bg-transparent border-none p-0 pt-4">
          <Field orientation="horizontal" className="flex justify-center">
            <Button
              type="button"
              variant="secondary"
              onClick={() => form.reset()}
            >
              Annuler
            </Button>
            <Button type="submit" form="form-rhf-demo" disabled={isSubmitting}>
              {isSubmitting ? "Envoi..." : "Envoyer"}
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </section>
  );
}
