import { Routes } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';
import { LoginComponent } from './pages/public/login/login.component';
import { FigthComponent } from './pages/public/figth/figth.component';
import { PatternsComponent } from './pages/public/patterns/patterns.component';

export const routes: Routes = [
    { path: "", component: PatternsComponent },
    { path: "combat", component: FigthComponent },
    { path: "login", component: LoginComponent }
];
