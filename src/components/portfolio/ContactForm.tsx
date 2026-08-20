import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Fields = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function ContactForm() {
  const [values, setValues] = useState<Fields>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const update = (key: keyof Fields, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
    setSent(false);
  };

  const validate = (): Errors => {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter your email address.";
    else if (!emailPattern.test(values.email.trim()))
      next.email = "Please enter a valid email address.";
    if (!values.subject.trim()) next.subject = "Please enter a subject.";
    if (!values.message.trim()) next.message = "Please enter a message.";
    else if (values.message.trim().length < 10)
      next.message = "Message should be at least 10 characters.";
    return next;
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setSent(false);
      return;
    }
    // Ready to connect to EmailJS or a backend service here.
    setSent(true);
    setValues({ name: "", email: "", subject: "", message: "" });
  };

  const fieldClass = (key: keyof Fields) =>
    errors[key] ? "border-destructive focus-visible:ring-destructive/40" : "";

  return (
    <form onSubmit={onSubmit} noValidate className="surface-card space-y-5 p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClass("name")}
            placeholder="Your full name"
          />
          {errors.name && (
            <p id="name-error" role="alert" className="text-xs text-destructive">
              {errors.name}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClass("email")}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p id="email-error" role="alert" className="text-xs text-destructive">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          value={values.subject}
          onChange={(e) => update("subject", e.target.value)}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className={fieldClass("subject")}
          placeholder="What is this about?"
        />
        {errors.subject && (
          <p id="subject-error" role="alert" className="text-xs text-destructive">
            {errors.subject}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={fieldClass("message")}
          placeholder="Write your message here..."
        />
        {errors.message && (
          <p id="message-error" role="alert" className="text-xs text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" className="rounded-full">
          <Send aria-hidden="true" />
          Send Message
        </Button>
        {sent && (
          <p
            role="status"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            Thank you — your message has been recorded.
          </p>
        )}
      </div>
    </form>
  );
}
