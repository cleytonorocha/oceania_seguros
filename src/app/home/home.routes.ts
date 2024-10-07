import { Route } from "@angular/router"

export default (tituloPadrao: string) : Route => {
    const rote: Route = {
        path: '',
        title : tituloPadrao + ' - Home',
        loadComponent : () => import('./home.component')
    }
    return rote;
}