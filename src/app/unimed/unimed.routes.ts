import { Route } from "@angular/router"
import { planosSaude } from "../env/envName";

export default (tituloPadrao: string): Route => {
    const rote: Route = {
        path: planosSaude['unimed'].tinyName,
        title: tituloPadrao + ' - ' + planosSaude['unimed'].name,
        loadComponent: () => import('./unimed.component')
    }
    return rote;
}