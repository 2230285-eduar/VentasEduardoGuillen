import { Component, OnInit } from '@angular/core';

import { empleados } from '../../interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

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

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/empleados')
      .subscribe((res: any) => {
        if (Array.isArray(res)) {
          this.TUser = res;
        } else {
          console.error(res);
        }
      }, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.idemp;
    this.Data.save(this.user, '/empleados')
      .subscribe(
        res => {
          this.getUser();
          this.user = {
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
        },
        err => console.error(err)
      );
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/empleados')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }

  bit(v: any): string {
    const n = v && v.data ? v.data[0] : v;
    return n ? 'Si' : 'No';
  }
}
