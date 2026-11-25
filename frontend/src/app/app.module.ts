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
import { FormapagoEditComponent } from './Components/formapago-edit/formapago-edit.component';
import { PagosEditComponent } from './Components/pagos-edit/pagos-edit.component';
import { ProductoEditComponent } from './Components/producto-edit/producto-edit.component';
import { ProveedorEditComponent } from './Components/proveedor-edit/proveedor-edit.component';
import { SucursalesEditComponent } from './Components/sucursales-edit/sucursales-edit.component';
import { TipoproductoEditComponent } from './Components/tipoproducto-edit/tipoproducto-edit.component';
import { TipousuarioEditComponent } from './Components/tipousuario-edit/tipousuario-edit.component';
import { UsuarioEditComponent } from './Components/usuario-edit/usuario-edit.component';
import { NavegacionComponent } from './Components/navegacion/navegacion.component';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterempresaPipe } from './pipes/filterempresa.pipe';
import { FilterproductoPipe } from './pipes/filterproducto.pipe';
import { FilterareaPipe } from './pipes/filterarea.pipe';
import { FilterclientePipe } from './pipes/filtercliente.pipe';
import { FiltercxcobrarPipe } from './pipes/filtercxcobrar.pipe';
import { FiltercxpagarPipe } from './pipes/filtercxpagar.pipe';
import { FilterempleadoPipe } from './pipes/filterempleado.pipe';
import { FilterformapagoPipe } from './pipes/filterformapago.pipe';
import { FilterpagoPipe } from './pipes/filterpago.pipe';
import { FilterproveedorPipe } from './pipes/filterproveedor.pipe';
import { FiltersucursalPipe } from './pipes/filtersucursal.pipe';
import { FiltertipoproductoPipe } from './pipes/filtertipoproducto.pipe';
import { FiltertipousuarioPipe } from './pipes/filtertipousuario.pipe';
import { FilterusuarioPipe } from './pipes/filterusuario.pipe';





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
    EmpresaEditComponent, AreasTrabajoEditComponent, ClientesEditComponent, CxcobrarEditComponent, CxpagarEditComponent, EmpleadosEditComponent, FormapagoEditComponent, PagosEditComponent, ProductoEditComponent, ProveedorEditComponent, SucursalesEditComponent, TipoproductoEditComponent, TipousuarioEditComponent, UsuarioEditComponent, NavegacionComponent, FilterempresaPipe, FilterproductoPipe, FilterareaPipe, FilterclientePipe, FiltercxcobrarPipe, FiltercxpagarPipe, FilterempleadoPipe, FilterformapagoPipe, FilterpagoPipe, FilterproveedorPipe, FiltersucursalPipe, FiltertipoproductoPipe, FiltertipousuarioPipe, FilterusuarioPipe
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
