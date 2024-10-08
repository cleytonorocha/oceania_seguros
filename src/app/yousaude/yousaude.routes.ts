import { Route } from "@angular/router"
import { planosSaude } from "../env/envName";

export default (tituloPadrao: string) : Route => {
    const rote: Route = {
        path: planosSaude['yousaude'].tinyName,
        title : tituloPadrao + ' - ' + planosSaude['yousaude'].name,
        loadComponent : () => import('./yousaude.component')
    }
    return rote;
}