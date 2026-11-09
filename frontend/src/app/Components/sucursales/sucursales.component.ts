import { Component, OnInit } from '@angular/core';

import { sucursales } from '../../interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit {

  TUser: any = [];
  user: sucursales = {
    idsuc: null,
    idempresa: null,
    sucursal: null,
    dirsuc: null,
    telefono: null,
    estado: 'Activo'
  };

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/sucursales')
      .subscribe((res: any) => {
        if (Array.isArray(res)) {
          this.TUser = res;
        } else {
          console.error(res);
        }
      }, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.idsuc;
    this.Data.save(this.user, '/sucursales')
      .subscribe(
        res => {
          this.getUser();
          this.user = {
            idsuc: null,
            idempresa: null,
            sucursal: null,
            dirsuc: null,
            telefono: null,
            estado: 'Activo'
          };
        },
        err => console.error(err)
      );
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/sucursales')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }
}
