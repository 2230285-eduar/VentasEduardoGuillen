import { Component, OnInit } from '@angular/core';

import { cxpagar } from '../../interfaces/user';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cxpagar-edit',
  templateUrl: './cxpagar-edit.component.html',
  styleUrls: ['./cxpagar-edit.component.css']
})
export class CxpagarEditComponent implements OnInit {

  valorInput: number | undefined;
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

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'], '/cxpagar')
        .subscribe(
          (res: any) => {
            const d = Array.isArray(res) ? res[0] : res;
            this.user = {
              ...d,
              fecha_compra: this.fecha(d.fecha_compra),
              fecha_pago: this.fecha(d.fecha_pago),
            };
          },
          err => console.log(err)
        );
    }
  }

  updateUser() {
    this.Data.update(this.user.idcxp!, this.user, '/cxpagar')
      .subscribe(
        res => {
          this.router.navigate(['/cxpagar']);
        },
        err => console.error(err)
      );
  }

  private fecha(v: any): any {
    return v ? String(v).substring(0, 10) : null;
  }
}
