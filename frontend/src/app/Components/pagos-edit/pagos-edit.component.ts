import { Component, OnInit } from '@angular/core';

import { pagos } from '../../interfaces/user';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagos-edit',
  templateUrl: './pagos-edit.component.html',
  styleUrls: ['./pagos-edit.component.css']
})
export class PagosEditComponent implements OnInit {

  valorInput: number | undefined;
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

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'], '/pagos')
        .subscribe(
          (res: any) => {
            const d = Array.isArray(res) ? res[0] : res;
            this.user = {
              ...d,
              fecha_pago: this.fecha(d.fecha_pago),
            };
          },
          err => console.log(err)
        );
    }
  }

  updateUser() {
    this.Data.update(this.user.idpago!, this.user, '/pagos')
      .subscribe(
        res => {
          this.router.navigate(['/pagos']);
        },
        err => console.error(err)
      );
  }

  private fecha(v: any): any {
    return v ? String(v).substring(0, 10) : null;
  }
}
