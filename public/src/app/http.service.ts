import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAll = ()=>{
    return this._http.get('/products');
  };
  getOne = (id:string)=>{
    return this._http.get(`products/${id}`);
  };
  postOne = (newProduct:any)=>{
    return this._http.post('products',newProduct);
  };
  updateOne = (id:string,product:any)=>{
    return this._http.put(`products/edit/${id}`,product);
  };
  destroy = (id:string)=>{
    return this._http.delete(`products/${id}`);
  };
}
