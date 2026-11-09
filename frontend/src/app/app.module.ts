import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { EmpresaComponent } from './Components/empresa/empresa.component';
import { ProveedorComponent } from './Components/proveedor/proveedor.component';
import { AreasTrabajoComponent } from './Components/areas-trabajo/areas-trabajo.component';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { CxcobrarComponent } from './Components/cxcobrar/cxcobrar.component';
import { CxpagarComponent } from './Components/cxpagar/cxpagar.component';
import { FormapagoComponent } from './Components/formapago/formapago.component';
import { PagosComponent } from './Components/pagos/pagos.component';
import { ProductoComponent } from './Components/producto/producto.component';
import { EmpleadosComponent } from './Components/empleados/empleados.component';
import { SucursalesComponent } from './Components/sucursales/sucursales.component';
import { TipoproductoComponent } from './Components/tipoproducto/tipoproducto.component';
import { TipousuarioComponent } from './Components/tipousuario/tipousuario.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';

import { DataService } from './services/data.service';
import { EmpresaEditComponent } from './Components/empresa-edit/empresa-edit.component';
import { AreasTrabajoEditComponent } from './Components/areas-trabajo-edit/areas-trabajo-edit.component';
import { ClientesEditComponent } from './Components/clientes-edit/clientes-edit.component';
import { CxcobrarEditComponent } from './Components/cxcobrar-edit/cxcobrar-edit.component';
import { CxpagarEditComponent } from './Components/cxpagar-edit/cxpagar-edit.component';
import { EmpleadosEditComponent } from './Components/empleados-edit/empleados-edit.component';





@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    ProveedorComponent,
    AreasTrabajoComponent,
    ClientesComponent,
    CxcobrarComponent,
    CxpagarComponent,
    FormapagoComponent,
    PagosComponent,
    ProductoComponent,
    EmpleadosComponent,
    SucursalesComponent,
    TipoproductoComponent,
    TipousuarioComponent,
    UsuarioComponent,    
    EmpresaEditComponent, AreasTrabajoEditComponent, ClientesEditComponent, CxcobrarEditComponent, CxpagarEditComponent, EmpleadosEditComponent
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
