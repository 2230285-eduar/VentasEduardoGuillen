import { Component, OnInit } from '@angular/core';

import { empleados } from '../../interfaces/user';
import { DataService } from '../../services/data.service';

import { ViewChild, ElementRef } from '@angular/core';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
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

  Empresalist: any;
Sucursaleslist: any;
Arealist: any;

name = 'Empleados.xlsx';


  constructor(private Data: DataService) { }

  @ViewChild('htmlData') htmlData!: ElementRef;
  filterPost = '';

  ngOnInit(): void {
    this.getUser();
    this.getDropListEmpresa();
this.getDropListSucursales();
this.getDropListArea();
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

getDropListArea() {
  this.Data.getDropListArea().subscribe((data:any) => {
    this.Arealist = data;
  })
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
