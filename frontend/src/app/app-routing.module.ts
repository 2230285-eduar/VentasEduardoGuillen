import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmpresaComponent} from './Components/empresa/empresa.component';

import { EmpresaEditComponent } from './Components/empresa-edit/empresa-edit.component';
import { AreasTrabajoEditComponent } from './Components/areas-trabajo-edit/areas-trabajo-edit.component';



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

const routes: Routes = [
    {
    path: 'empresa',
    component :EmpresaComponent
  },

 
  {
    path: 'empresa/edit/:id',
    component: EmpresaEditComponent
  },

{
  path: 'areas-trabajo/edit/:id',
  component: AreasTrabajoEditComponent
},

  { path: 'proveedor', component: ProveedorComponent },
  { path: 'areas-trabajo', component: AreasTrabajoComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'cxcobrar', component: CxcobrarComponent },
  { path: 'cxpagar', component: CxpagarComponent },
  { path: 'formapago', component: FormapagoComponent },
  { path: 'pagos', component: PagosComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'sucursales', component: SucursalesComponent },
  { path: 'tipoproducto', component: TipoproductoComponent },
  { path: 'tipousuario', component: TipousuarioComponent },
  { path: 'usuario', component: UsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
