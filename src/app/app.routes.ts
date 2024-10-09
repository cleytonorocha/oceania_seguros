import { Routes } from '@angular/router';
import homeRoutes from './home/home.routes';
import usisaude from './usisaude/usisaude.routes';
import yousaudeRoutes from './yousaude/yousaude.routes';
import amilRoutes from './amil/amil.routes';

const home = "Oceania Seguros"
export const routes: Routes = [
    homeRoutes(home),
    usisaude(home),
    yousaudeRoutes(home),
    amilRoutes(home)
];
