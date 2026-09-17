import type { Metadata } from "next";
import { LoginForm } from "../../components/modules/Auth/LoginFrom";

export const metadata: Metadata = {
  title: "Login | DGM HealthCare",
  description: "Secure sign-in for patients and providers at DGM HealthCare",
};

export default function LoginPage() {
  return (
    <main>
      <LoginForm />
    </main>
  );
}
