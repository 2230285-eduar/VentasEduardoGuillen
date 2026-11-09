import { Component, OnInit } from '@angular/core';

import { cxcobrar } from '../../interfaces/user';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cxcobrar-edit',
  templateUrl: './cxcobrar-edit.component.html',
  styleUrls: ['./cxcobrar-edit.component.css']
})
export class CxcobrarEditComponent implements OnInit {

  valorInput: number | undefined;
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

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'], '/cxcobrar')
        .subscribe(
          (res: any) => {
            const d = Array.isArray(res) ? res[0] : res;
            this.user = {
              ...d,
              fecha_venta: this.fecha(d.fecha_venta),
              fecha_pago: this.fecha(d.fecha_pago),
            };
          },
          err => console.log(err)
        );
    }
  }

  updateUser() {
    this.Data.update(this.user.idcxc!, this.user, '/cxcobrar')
      .subscribe(
        res => {
          this.router.navigate(['/cxcobrar']);
        },
        err => console.error(err)
      );
  }

  private fecha(v: any): any {
    return v ? String(v).substring(0, 10) : null;
  }
}
