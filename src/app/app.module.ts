import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from'@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyMenuComponent } from './my-menu/my-menu.component';
import { MyLoginComponent } from './my-login/my-login.component';
import { MyMainComponent } from './my-main/my-main.component';
import { MyfooterComponent } from './myfooter/myfooter.component';
import { HomeComponent } from './home/home.component';
import { QuienesSomosComponent } from './nosotros/quienes-somos/quienes-somos.component';
import { QuienesContactenosComponent } from './nosotros/quienes-contactenos/quienes-contactenos.component';
import { StreammingComponent } from './streamming/streamming.component';
import { TiendaVirtualComponent } from './tienda-virtual/tienda-virtual.component';
import { RegistroComponent } from './registro/registro.component';


/* archivo de rutas  */

const appRouter: Routes = [
  {path: 'irHome', component:HomeComponent},
  {path: 'irQuienesSomos', component:QuienesSomosComponent},
  {path: 'irContactenos', component:QuienesContactenosComponent},
  {path: 'irStreaming', component:StreammingComponent},
  {path: 'irTiendaVirtual', component:TiendaVirtualComponent},
  {path: 'irRegistro', component:RegistroComponent},
  {path: '' , redirectTo: '/irHome' , pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    MyMenuComponent,
    MyLoginComponent,
    MyMainComponent,
    MyfooterComponent,
    HomeComponent,
    QuienesSomosComponent,
    QuienesContactenosComponent,
    StreammingComponent,
    TiendaVirtualComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
