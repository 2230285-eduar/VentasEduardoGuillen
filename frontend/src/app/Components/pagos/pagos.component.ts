import { Component, OnInit } from '@angular/core';

import { pagos } from '../../interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  TUser: any = [];
  user: pagos = {
    idpago: null,
    idempresa: null,
    num_venta: null,
    idsuc: null,
    num_clie: null,
    userid: null,
    idfpago: null,
    fecha_pago: null,
    num_prod: null,
    cantidad: null,
    precio: null,
    isv: null,
    descuento: null,
    total: null,
    estado: 'Activo'
  };

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/pagos')
      .subscribe((res: any) => {
        if (Array.isArray(res)) {
          this.TUser = res;
        } else {
          console.error(res);
        }
      }, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.idpago;
    this.Data.save(this.user, '/pagos')
      .subscribe(
        res => {
          this.getUser();
          this.user = {
            idpago: null,
            idempresa: null,
            num_venta: null,
            idsuc: null,
            num_clie: null,
            userid: null,
            idfpago: null,
            fecha_pago: null,
            num_prod: null,
            cantidad: null,
            precio: null,
            isv: null,
            descuento: null,
            total: null,
            estado: 'Activo'
          };
        },
        err => console.error(err)
      );
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/pagos')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }
}
