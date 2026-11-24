import { Component, OnInit } from '@angular/core';

import { cxpagar } from '../../interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-cxpagar',
  templateUrl: './cxpagar.component.html',
  styleUrls: ['./cxpagar.component.css']
})
export class CxpagarComponent implements OnInit {

  TUser: any = [];
  user: cxpagar = {
    idcxp: null,
    num_compra: null,
    idempresa: null,
    idsuc: null,
    idprov: null,
    userid: null,
    idfpago: null,
    fecha_compra: null,
    num_prod: null,
    cantidad: null,
    precio: null,
    subtotal: null,
    isv: null,
    total: null,
    fecha_pago: null,
    estado: 'Activo'
  };


  Empresalist: any;
Sucursaleslist: any;
Formapagolist: any;
Proveedorlist: any;
EncabezadoCompralist: any;
Productolist: any;
Usuariolist: any;

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
    this.getDropListEmpresa();
this.getDropListSucursales();
this.getDropListFormapago();
this.getDropListProveedor();
this.getDropListEncabezadoCompra();
this.getDropListProducto();
this.getDropListUsuario();
  }

getDropListEmpresa() {
  this.Data.getDropListEmpresa().subscribe((data:any) => { this.Empresalist = data; })
}

getDropListSucursales() {
  this.Data.getDropListSucursales().subscribe((data:any) => { this.Sucursaleslist = data; })
}

getDropListFormapago() {
  this.Data.getDropListFormapago().subscribe((data:any) => { this.Formapagolist = data; })
}

getDropListProveedor() {
  this.Data.getDropListProveedor().subscribe((data:any) => { this.Proveedorlist = data; })
}

getDropListEncabezadoCompra() {
  this.Data.getDropListEncabezadoCompra().subscribe((data:any) => { this.EncabezadoCompralist = data; })
}

getDropListProducto() {
  this.Data.getDropListProducto().subscribe((data:any) => { this.Productolist = data; })
}

getDropListUsuario() {
  this.Data.getDropListUsuario().subscribe((data:any) => { this.Usuariolist = data; })
}



  getUser() {
    this.Data.getAll('/cxpagar')
      .subscribe((res: any) => {
        if (Array.isArray(res)) {
          this.TUser = res;
        } else {
          console.error(res);
        }
      }, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.idcxp;
    this.Data.save(this.user, '/cxpagar')
      .subscribe(
        res => {
          this.getUser();
          this.user = {
            idcxp: null,
            num_compra: null,
            idempresa: null,
            idsuc: null,
            idprov: null,
            userid: null,
            idfpago: null,
            fecha_compra: null,
            num_prod: null,
            cantidad: null,
            precio: null,
            subtotal: null,
            isv: null,
            total: null,
            fecha_pago: null,
            estado: 'Activo'
          };
        },
        err => console.error(err)
      );
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/cxpagar')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }
}
