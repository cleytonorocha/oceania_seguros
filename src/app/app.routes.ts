import { Routes } from '@angular/router';
import homeRoutes from './home/home.routes';
import usisaude from './unisaude/usisaude.routes';

const home = "Oceania Seguros"
export const routes: Routes = [
    homeRoutes(home),
    usisaude(home)
];
