import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.development";

//Servicio con métodos necesarios para consumir las peticiones HTTP
@Injectable({
    providedIn: 'root',
})
export class BaseHttpService {

    //inyectable
    http = inject(HttpClient)
    apiUrl = environment.API_URL;
}