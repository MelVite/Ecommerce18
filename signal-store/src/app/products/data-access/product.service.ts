import { Injectable } from "@angular/core";
import { BaseHttpService } from "../../shared/data-access/base-http.service";

//Servicio con métodos necesarios para consumir las peticiones HTTP
@Injectable()
export class ProductsService extends BaseHttpService {
    //método para obtener todos los productos
    getProducts() {
        return this.http.get(`${this.apiUrl}/products`);
    }
}