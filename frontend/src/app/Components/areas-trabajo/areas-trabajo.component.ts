import { Component, OnInit } from '@angular/core';

import { areas_trabajo } from '../../interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-areas-trabajo',
  templateUrl: './areas-trabajo.component.html',
  styleUrls: ['./areas-trabajo.component.css']
})
export class AreasTrabajoComponent implements OnInit {

  TUser: any = [];
  user: areas_trabajo = {
    idarea: null,
    idempresa: null,
    idsuc: null,
    area: null,
    fecha_creacion: null,
    estado: 'Activo'
  };

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/area_trabajo')
      .subscribe((res: any) => {
        if (Array.isArray(res)) {
          this.TUser = res;
        } else {
          console.error(res);
        }
      }, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.idarea;
    this.Data.save(this.user, '/area_trabajo')
      .subscribe(
        res => {
          this.getUser();
          this.user = {
            idarea: null,
            idempresa: null,
            idsuc: null,
            area: null,
            fecha_creacion: null,
            estado: 'Activo'
          };
        },
        err => console.error(err)
      );
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/area_trabajo')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }
}
