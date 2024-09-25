import LoginView from "../views/auth/login.vue";
import RegisterView from "../views/auth/register.vue";
import RecoveyPasswordView from "../views/auth/recoveryPassword.vue";

export default [
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterView,
  },
  {
    path: "/recovery_password",
    name: "Register_Password",
    component: RecoveyPasswordView,
  },
];
