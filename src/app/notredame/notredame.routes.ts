import { Route } from "@angular/router"
import { planosSaude } from "../env/envName";

export default (tituloPadrao: string) : Route => {
    const rote: Route = {
        path: planosSaude['notredame'].tinyName,
        title : tituloPadrao + ' - ' + planosSaude['notredame'].name,
        loadComponent : () => import('./notredame.component')
    }
    return rote;
}