import { Component, OnInit } from '@angular/core';

import { usuario } from '../../interfaces/user';
import { DataService } from '../../services/data.service';


import { ViewChild, ElementRef } from '@angular/core';

import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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

name = 'Empresas.xlsx';


  constructor(private Data: DataService) { }

@ViewChild('htmlData') htmlData!: ElementRef;
  filterPost = '';


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
exportToExcel(): void {
    let element = document.getElementById('tabla');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');
    XLSX.writeFile(book, this.name);
  }
public openPDF(): void {
    let DATA: any = document.getElementById('tabla');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('empresas.pdf');
    });
  }


}
