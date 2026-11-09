import { Component, OnInit } from '@angular/core';

import { formapago } from '../../interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-formapago',
  templateUrl: './formapago.component.html',
  styleUrls: ['./formapago.component.css']
})
export class FormapagoComponent implements OnInit {

  TUser: any = [];
  user: formapago = {
    idfpago: null,
    idempresa: null,
    formapago: null,
    estado: 'Activo'
  };

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.Data.getAll('/formapago')
      .subscribe((res: any) => {
        if (Array.isArray(res)) {
          this.TUser = res;
        } else {
          console.error(res);
        }
      }, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.idfpago;
    this.Data.save(this.user, '/formapago')
      .subscribe(
        res => {
          this.getUser();
          this.user = {
            idfpago: null,
            idempresa: null,
            formapago: null,
            estado: 'Activo'
          };
        },
        err => console.error(err)
      );
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/formapago')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }
}
