import { Component, OnInit } from '@angular/core';

import { areas_trabajo } from '../../interfaces/user';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-areas-trabajo-edit',
  templateUrl: './areas-trabajo-edit.component.html',
  styleUrls: ['./areas-trabajo-edit.component.css']
})
export class AreasTrabajoEditComponent implements OnInit {

  valorInput: number | undefined;
  TUser: any = [];
  user: areas_trabajo = {
    idarea: null,
    idempresa: null,
    idsuc: null,
    area: null,
    fecha_creacion: null,
    estado: 'Activo'
  };

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'], '/area_trabajo')
        .subscribe(
          (res: any) => {
            const d = Array.isArray(res) ? res[0] : res;
            this.user = {
              ...d,
              fecha_creacion: this.fecha(d.fecha_creacion),
            };
          },
          err => console.log(err)
        );
    }
  }

  updateUser() {
    this.Data.update(this.user.idarea!, this.user, '/area_trabajo')
      .subscribe(
        res => {
          this.router.navigate(['/areas-trabajo']);
        },
        err => console.error(err)
      );
  }

  private fecha(v: any): any {
    return v ? String(v).substring(0, 10) : null;
  }
}
