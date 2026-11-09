import { Component, OnInit } from '@angular/core';

import { proveedor } from '../../interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {

  TUser: any = [];
  user: proveedor = {
    idprov: null,
    idempresa: null,
    proveedor: null,
    direccion: null,
    telefono: null,
    responsable: null,
    fecha_creacion: null,
    observaciones: null,
    estado: 'Activo'
  };

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/proveedor')
      .subscribe((res: any) => {
        if (Array.isArray(res)) {
          this.TUser = res;
        } else {
          console.error(res);
        }
      }, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.idprov;
    this.Data.save(this.user, '/proveedor')
      .subscribe(
        res => {
          this.getUser();
          this.user = {
            idprov: null,
            idempresa: null,
            proveedor: null,
            direccion: null,
            telefono: null,
            responsable: null,
            fecha_creacion: null,
            observaciones: null,
            estado: 'Activo'
          };
        },
        err => console.error(err)
      );
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/proveedor')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }
}
