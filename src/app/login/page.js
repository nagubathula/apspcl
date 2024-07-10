// src/app/login/page.js
import LoginForm from '@/components/LoginForm';

export default function LoginPage() {
  console.log('LoginPage rendering');
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
}