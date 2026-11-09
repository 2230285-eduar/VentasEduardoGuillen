import { Component, OnInit } from '@angular/core';

import { clientes } from '../../interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  TUser: any = [];
  user: clientes = {
    num_clie: null,
    idempresa: null,
    idsuc: null,
    identidad: null,
    rtn: null,
    fecha_nac: null,
    nombre: null,
    telefono: null,
    direccion: null,
    correo: null,
    fecha_creacion: null,
    estado: 'Activo'
  };

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/clientes')
      .subscribe((res: any) => {
        if (Array.isArray(res)) {
          this.TUser = res;
        } else {
          console.error(res);
        }
      }, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.num_clie;
    this.Data.save(this.user, '/clientes')
      .subscribe(
        res => {
          this.getUser();
          this.user = {
            num_clie: null,
            idempresa: null,
            idsuc: null,
            identidad: null,
            rtn: null,
            fecha_nac: null,
            nombre: null,
            telefono: null,
            direccion: null,
            correo: null,
            fecha_creacion: null,
            estado: 'Activo'
          };
        },
        err => console.error(err)
      );
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/clientes')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }
}
