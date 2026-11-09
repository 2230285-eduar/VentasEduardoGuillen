import { Component, OnInit } from '@angular/core';

import { tipousuario } from '../../interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-tipousuario',
  templateUrl: './tipousuario.component.html',
  styleUrls: ['./tipousuario.component.css']
})
export class TipousuarioComponent implements OnInit {

  TUser: any = [];
  user: tipousuario = {
    idtpusuario: null,
    idempresa: null,
    tipo: null,
    estado: 'Activo'
  };

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/tipousuario')
      .subscribe((res: any) => {
        if (Array.isArray(res)) {
          this.TUser = res;
        } else {
          console.error(res);
        }
      }, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.idtpusuario;
    this.Data.save(this.user, '/tipousuario')
      .subscribe(
        res => {
          this.getUser();
          this.user = {
            idtpusuario: null,
            idempresa: null,
            tipo: null,
            estado: 'Activo'
          };
        },
        err => console.error(err)
      );
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/tipousuario')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }
}
