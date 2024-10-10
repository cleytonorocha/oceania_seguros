import { Route } from "@angular/router"
import { planosSaude } from "../env/envName";

export default (tituloPadrao: string): Route => {
    const rote: Route = {
        path: planosSaude['medsenior'].tinyName,
        title: tituloPadrao + ' - ' + planosSaude['medsenior'].name,
        loadComponent: () => import('./medsenior.component')
    }
    return rote;
}