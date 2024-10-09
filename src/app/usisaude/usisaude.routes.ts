import { Route } from "@angular/router"
import { planosSaude } from "../env/envName";

export default (tituloPadrao: string) : Route => {
    const rote: Route = {
        path: planosSaude['usisaude'].tinyName,
        title : tituloPadrao + ' - ' + planosSaude['usisaude'].name,
        loadComponent : () => import('./usisaude.component')
    }
    return rote;
}