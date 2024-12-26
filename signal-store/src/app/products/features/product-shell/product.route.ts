import { Routes } from "@angular/router";

//Creación de rutas de navegación 
export default [
    {path: '', loadComponent: () => import('../product-list/product-list.component')}
] as Routes;