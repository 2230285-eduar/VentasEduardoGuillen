import { Component, OnInit } from '@angular/core';

import { empleados } from 'src/app/interfaces/user';
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
      .subscribe(res => {
        this.TUser = res;
      }, err => console.error(err));
  }

  // los campos bit de MySQL pueden llegar como Buffer, número o booleano
  bit(v: any): string {
    const n = v && v.data ? v.data[0] : v;
    return n ? 'Si' : 'No';
  }
}
