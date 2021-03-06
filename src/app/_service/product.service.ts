import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../_model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProduct(id:number){
    return this.http.get<Product>(`${environment.hostUrl}/product/${id}`, {withCredentials: true})
  }

  getAllProductsById(id: number[]){
    return this.http.post<Product[]>(`${environment.hostUrl}/user/getAllProductsById`, id, {withCredentials: true})
  }

  getAllProducts(){
    return this.http.get<Product[]>(`${environment.hostUrl}/product/getAllProducts`, {withCredentials: true});
  }

}
