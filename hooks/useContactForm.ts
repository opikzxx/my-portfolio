import { useState, useCallback, ChangeEvent, FormEvent } from "react";
import { ContactFormData } from "@/types";

const INITIAL_FORM_DATA: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      setError(null);
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setError(null);

      try {
        // Replace with actual API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Form submitted:", formData);
        setSuccess(true);
        setFormData(INITIAL_FORM_DATA);
        setTimeout(() => setSuccess(false), 3000);
      } catch (err) {
        console.log(err);
        setError("Failed to send message. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData]
  );

  const reset = useCallback(() => {
    setFormData(INITIAL_FORM_DATA);
    setError(null);
    setSuccess(false);
  }, []);

  return {
    formData,
    isSubmitting,
    error,
    success,
    handleChange,
    handleSubmit,
    reset,
  };
};
