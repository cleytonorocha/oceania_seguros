import { Routes } from '@angular/router';
import homeRoutes from './home/home.routes';

const home = "Oceania Seguros"
export const routes: Routes = [
    homeRoutes(home),
];
