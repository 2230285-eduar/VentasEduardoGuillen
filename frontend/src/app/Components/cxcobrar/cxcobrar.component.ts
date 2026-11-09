import { Component, OnInit } from '@angular/core';

import { cxcobrar } from '../../interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-cxcobrar',
  templateUrl: './cxcobrar.component.html',
  styleUrls: ['./cxcobrar.component.css']
})
export class CxcobrarComponent implements OnInit {

  TUser: any = [];
  user: cxcobrar = {
    idcxc: null,
    idempresa: null,
    num_venta: null,
    idsuc: null,
    num_clie: null,
    userid: null,
    idfpago: null,
    fecha_venta: null,
    num_prod: null,
    cantidad: null,
    precio: null,
    isv: null,
    descuento: null,
    total: null,
    fecha_pago: null,
    estado: 'Activo'
  };

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/cxcobrar')
      .subscribe((res: any) => {
        if (Array.isArray(res)) {
          this.TUser = res;
        } else {
          console.error(res);
        }
      }, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.idcxc;
    this.Data.save(this.user, '/cxcobrar')
      .subscribe(
        res => {
          this.getUser();
          this.user = {
            idcxc: null,
            idempresa: null,
            num_venta: null,
            idsuc: null,
            num_clie: null,
            userid: null,
            idfpago: null,
            fecha_venta: null,
            num_prod: null,
            cantidad: null,
            precio: null,
            isv: null,
            descuento: null,
            total: null,
            fecha_pago: null,
            estado: 'Activo'
          };
        },
        err => console.error(err)
      );
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/cxcobrar')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }
}
