import type { Metadata } from "next";
import { RegistrationForm } from "@/components/modules/Auth/registrationFrom";

export const metadata: Metadata = {
  title: "Login | DGM HealthCare",
  description: "Secure sign-in for patients and providers at DGM HealthCare",
};

export default function RegistrationPage() {
  return (
    <main>
      <RegistrationForm />
    </main>
  );
}
