import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: './secured/secured.module#SecuredModule' }
    /*
,
{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent}
    */
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
