import { Route } from "@angular/router"
import { planosSaude } from "../env/envName";

export default (tituloPadrao: string) : Route => {
    const rote: Route = {
        path: planosSaude['amil'].tinyName,
        title : tituloPadrao + ' - ' + planosSaude['amil'].name,
        loadComponent : () => import('./amil.component')
    }
    return rote;
}