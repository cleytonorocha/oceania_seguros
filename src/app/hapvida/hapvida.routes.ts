import { Route } from "@angular/router"
import { planosSaude } from "../env/envName";

export default (tituloPadrao: string) : Route => {
    const rote: Route = {
        path: planosSaude['hapvida'].tinyName,
        title : tituloPadrao + ' - ' + planosSaude['hapvida'].name,
        loadComponent : () => import('./hapvida.component')
    }
    return rote;
}