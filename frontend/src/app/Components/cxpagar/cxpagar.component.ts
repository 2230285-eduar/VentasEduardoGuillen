import { Component, OnInit } from '@angular/core';

import { cxpagar } from '../../interfaces/user';
import { DataService } from '../../services/data.service';

import { ViewChild, ElementRef } from '@angular/core';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-cxpagar',
  templateUrl: './cxpagar.component.html',
  styleUrls: ['./cxpagar.component.css']
})
export class CxpagarComponent implements OnInit {

  TUser: any = [];
  user: cxpagar = {
    idcxp: null,
    num_compra: null,
    idempresa: null,
    idsuc: null,
    idprov: null,
    userid: null,
    idfpago: null,
    fecha_compra: null,
    num_prod: null,
    cantidad: null,
    precio: null,
    subtotal: null,
    isv: null,
    total: null,
    fecha_pago: null,
    estado: 'Activo'
  };


  Empresalist: any;
Sucursaleslist: any;
Formapagolist: any;
Proveedorlist: any;
EncabezadoCompralist: any;
Productolist: any;
Usuariolist: any;

name = 'Cxpagar.xlsx';


  constructor(private Data: DataService) { }
@ViewChild('htmlData') htmlData!: ElementRef;
  filterPost = '';


  ngOnInit(): void {
    this.getUser();
    this.getDropListEmpresa();
this.getDropListSucursales();
this.getDropListFormapago();
this.getDropListProveedor();
this.getDropListEncabezadoCompra();
this.getDropListProducto();
this.getDropListUsuario();
  }

getDropListEmpresa() {
  this.Data.getDropListEmpresa().subscribe((data:any) => { this.Empresalist = data; })
}

getDropListSucursales() {
  this.Data.getDropListSucursales().subscribe((data:any) => { this.Sucursaleslist = data; })
}

getDropListFormapago() {
  this.Data.getDropListFormapago().subscribe((data:any) => { this.Formapagolist = data; })
}

getDropListProveedor() {
  this.Data.getDropListProveedor().subscribe((data:any) => { this.Proveedorlist = data; })
}

getDropListEncabezadoCompra() {
  this.Data.getDropListEncabezadoCompra().subscribe((data:any) => { this.EncabezadoCompralist = data; })
}

getDropListProducto() {
  this.Data.getDropListProducto().subscribe((data:any) => { this.Productolist = data; })
}

getDropListUsuario() {
  this.Data.getDropListUsuario().subscribe((data:any) => { this.Usuariolist = data; })
}



  getUser() {
    this.Data.getAll('/cxpagar')
      .subscribe((res: any) => {
        if (Array.isArray(res)) {
          this.TUser = res;
        } else {
          console.error(res);
        }
      }, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.idcxp;
    this.Data.save(this.user, '/cxpagar')
      .subscribe(
        res => {
          this.getUser();
          this.user = {
            idcxp: null,
            num_compra: null,
            idempresa: null,
            idsuc: null,
            idprov: null,
            userid: null,
            idfpago: null,
            fecha_compra: null,
            num_prod: null,
            cantidad: null,
            precio: null,
            subtotal: null,
            isv: null,
            total: null,
            fecha_pago: null,
            estado: 'Activo'
          };
        },
        err => console.error(err)
      );
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/cxpagar')
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
