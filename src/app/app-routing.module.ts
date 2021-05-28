import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ForgotpasswordComponent } from "./forgotpassword/forgotpassword.component";
import { ErrorpageComponent } from "./errorpage/errorpage.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import(`./all-modules/all-modules.module`).then(
        (m) => m.AllModulesModule
      ),
  },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "forgotpassword", component: ForgotpasswordComponent },
  { path: "errorpage", component: ErrorpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
