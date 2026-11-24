import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'

import { User } from '../interfaces/user';
import { throwError, Observable, retry, catchError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private router: Router) { }

  getAll(url: string) {
    return this.http.get(`${this.API_URI}` + url);
  }



getOne(id: string, url: string) {
      return this.http.get(`${this.API_URI}` + url + `/${id}`);
  }
  delete(id: number, url: string) {
    return this.http.delete(`${this.API_URI}` + url + `/${id}`);
  }
  update(id: string|number, updated: any , url: string): Observable<any> {
    return this.http.post(`${this.API_URI}` + url + `/${id}`, updated);
  }

  







  getDropListFormapago():Observable<any[]>{
  return this.http.get<any>(this.API_URI+'/formapago')
}

getDropListClientes():Observable<any[]>{
  return this.http.get<any>(this.API_URI+'/clientes')
}

getDropListProducto():Observable<any[]>{
  return this.http.get<any>(this.API_URI+'/producto')
}

getDropListEncabezadoVenta():Observable<any[]>{
  return this.http.get<any>(this.API_URI+'/encabezado_venta')
}

getDropListUsuario():Observable<any[]>{
  return this.http.get<any>(this.API_URI+'/usuario')
}

getDropListProveedor():Observable<any[]>{
  return this.http.get<any>(this.API_URI+'/proveedor')
}

getDropListEncabezadoCompra():Observable<any[]>{
  return this.http.get<any>(this.API_URI+'/encabezado_compra')
}

getDropListTipoProducto():Observable<any[]>{
  return this.http.get<any>(this.API_URI+'/tipoproducto')
}

getDropListTipoUsuario():Observable<any[]>{
  return this.http.get<any>(this.API_URI+'/tipousuario')
}

getDropListEmpleados():Observable<any[]>{
  return this.http.get<any>(this.API_URI+'/empleados')
}


getDropListEmpresa():Observable<any[]>{
return this.http.get<any>(this.API_URI+'/empresa')
}

getDropListSucursales():Observable<any[]>{
  return this.http.get<any>(this.API_URI+'/sucursales')
}

getDropListArea():Observable<any[]>{
  return this.http.get<any>(this.API_URI+'/area_trabajo')
}


  save(Usuario: any, url: string) {
     let headers = new HttpHeaders();
     headers = new HttpHeaders().set('Content-Type', 'application/json');
     return this.http.post(`${this.API_URI}` + url , JSON.stringify(Usuario), {headers: headers})
     .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  
  errorHandl(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }



}


