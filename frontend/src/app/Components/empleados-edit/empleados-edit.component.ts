import { Component, OnInit } from '@angular/core';

import { empleados } from '../../interfaces/user';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empleados-edit',
  templateUrl: './empleados-edit.component.html',
  styleUrls: ['./empleados-edit.component.css']
})
export class EmpleadosEditComponent implements OnInit {

  valorInput: number | undefined;
  TUser: any = [];
  user: empleados = {
    idemp: null,
    idempresa: null,
    idsuc: null,
    idarea: null,
    identidad: null,
    fecha_nac: null,
    nombres: null,
    apellidos: null,
    femenino: null,
    masculino: null,
    soltero: null,
    casado: null,
    unionlibre: null,
    direccion: null,
    fecha_creacion: null
  };

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'], '/empleados')
        .subscribe(
          (res: any) => {
            const d = Array.isArray(res) ? res[0] : res;
            this.user = {
              ...d,
              fecha_nac: this.fecha(d.fecha_nac),
              femenino: this.bit(d.femenino),
              masculino: this.bit(d.masculino),
              soltero: this.bit(d.soltero),
              casado: this.bit(d.casado),
              unionlibre: this.bit(d.unionlibre),
              fecha_creacion: this.fecha(d.fecha_creacion),
            };
          },
          err => console.log(err)
        );
    }
  }

  updateUser() {
    this.Data.update(this.user.idemp!, this.user, '/empleados')
      .subscribe(
        res => {
          this.router.navigate(['/empleados']);
        },
        err => console.error(err)
      );
  }

  private fecha(v: any): any {
    return v ? String(v).substring(0, 10) : null;
  }

  private bit(v: any): boolean {
    const n = v && v.data ? v.data[0] : v;
    return !!n;
  }
}
