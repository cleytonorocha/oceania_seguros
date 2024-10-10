import { Route } from "@angular/router"
import { planosSaude } from "../env/envName";

export default (tituloPadrao: string): Route => {
    const rote: Route = {
        path: planosSaude['sulamerica'].tinyName,
        title: tituloPadrao + ' - ' + planosSaude['sulamerica'].name,
        loadComponent: () => import('./sulamerica.component')
    }
    return rote;
}