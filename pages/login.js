/* eslint-disable react/no-unescaped-entities */
import AuthLayout from '@layouts/authLayout';

export default function Login() {
  return (
    <AuthLayout>
      <div className="authForm">
        <div className="authForm__head">
          <h2>Welcome!</h2>
          <p>Sign up or log in to continue</p>
        </div>

        <div className="authForm__body">
          <form>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
}
