import { Component, OnInit } from '@angular/core';

import { cxcobrar } from '../../interfaces/user';
import { DataService } from '../../services/data.service';

import { ViewChild, ElementRef } from '@angular/core';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-cxcobrar',
  templateUrl: './cxcobrar.component.html',
  styleUrls: ['./cxcobrar.component.css']
})
export class CxcobrarComponent implements OnInit {

  TUser: any = [];
  user: cxcobrar = {
    idcxc: null,
    idempresa: null,
    num_venta: null,
    idsuc: null,
    num_clie: null,
    userid: null,
    idfpago: null,
    fecha_venta: null,
    num_prod: null,
    cantidad: null,
    precio: null,
    isv: null,
    descuento: null,
    total: null,
    fecha_pago: null,
    estado: 'Activo'
  };

  Empresalist: any;
Sucursaleslist: any;
Formapagolist: any;
Clienteslist: any;
Productolist: any;
EncabezadoVentalist: any;
Usuariolist: any;
  
name = 'Cxcobrar.xlsx';


  constructor(private Data: DataService) { }

  @ViewChild('htmlData') htmlData!: ElementRef;
  filterPost = '';


  ngOnInit(): void {
    this.getUser();
    this.getDropListEmpresa();
this.getDropListSucursales();
this.getDropListFormapago();
this.getDropListClientes();
this.getDropListProducto();
this.getDropListEncabezadoVenta();
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

getDropListClientes() {
  this.Data.getDropListClientes().subscribe((data:any) => { this.Clienteslist = data; })
}

getDropListProducto() {
  this.Data.getDropListProducto().subscribe((data:any) => { this.Productolist = data; })
}

getDropListEncabezadoVenta() {
  this.Data.getDropListEncabezadoVenta().subscribe((data:any) => { this.EncabezadoVentalist = data; })
}

getDropListUsuario() {
  this.Data.getDropListUsuario().subscribe((data:any) => { this.Usuariolist = data; })
}


  getUser() {
    this.Data.getAll('/cxcobrar')
      .subscribe((res: any) => {
        if (Array.isArray(res)) {
          this.TUser = res;
        } else {
          console.error(res);
        }
      }, err => console.error(err));
  }

  AgregarValor() {
    delete this.user.idcxc;
    this.Data.save(this.user, '/cxcobrar')
      .subscribe(
        res => {
          this.getUser();
          this.user = {
            idcxc: null,
            idempresa: null,
            num_venta: null,
            idsuc: null,
            num_clie: null,
            userid: null,
            idfpago: null,
            fecha_venta: null,
            num_prod: null,
            cantidad: null,
            precio: null,
            isv: null,
            descuento: null,
            total: null,
            fecha_pago: null,
            estado: 'Activo'
          };
        },
        err => console.error(err)
      );
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/cxcobrar')
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
