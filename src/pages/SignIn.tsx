import { SignInForm } from '@/components/auth/SignInForm';

export function SignIn() {
  return (
    <div className="min-h-screen w-full bg-background flex items-center justify-center p-4">
      <SignInForm />
    </div>
  );
}