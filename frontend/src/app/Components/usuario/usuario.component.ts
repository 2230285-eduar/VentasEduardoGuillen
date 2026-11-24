import { Component, OnInit } from '@angular/core';

import { usuario } from '../../interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  TUser: any = [];
  user: usuario = {
    userid: null,
    idempresa: null,
    idsuc: null,
    idtpusuario: null,
    idemp: null,
    usuario: null,
    clave: null,
    tipo: null,
    estado: 'Activo'
  };

  Empresalist: any;
Sucursaleslist: any;
TipoUsuariolist: any;
Empleadoslist: any;

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
    this.getDropListEmpresa();
this.getDropListSucursales();
this.getDropListTipoUsuario();
this.getDropListEmpleados();
  }


  getDropListEmpresa() {
  this.Data.getDropListEmpresa().subscribe((data:any) => {
    this.Empresalist = data;
  })
}

getDropListSucursales() {
  this.Data.getDropListSucursales().subscribe((data:any) => {
    this.Sucursaleslist = data;
  })
}

getDropListTipoUsuario() {
  this.Data.getDropListTipoUsuario().subscribe((data:any) => {
    this.TipoUsuariolist = data;
  })
}

getDropListEmpleados() {
  this.Data.getDropListEmpleados().subscribe((data:any) => {
    this.Empleadoslist = data;
  })
}

  getUser() {
    this.Data.getAll('/usuario')
      .subscribe((res: any) => {
        if (Array.isArray(res)) {
          this.TUser = res;
        } else {
          console.error(res);
        }
      }, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.userid;
    this.Data.save(this.user, '/usuario')
      .subscribe(
        res => {
          this.getUser();
          this.user = {
            userid: null,
            idempresa: null,
            idsuc: null,
            idtpusuario: null,
            idemp: null,
            usuario: null,
            clave: null,
            tipo: null,
            estado: 'Activo'
          };
        },
        err => console.error(err)
      );
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/usuario')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }
}
