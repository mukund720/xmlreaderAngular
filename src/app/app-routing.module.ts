import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { XmlImportComponent } from './xml-import/xml-import.component';
import { XmlImport2Component } from './xml-import2/xml-import2.component';


const routes: Routes = [
{path : 'home',component : XmlImportComponent},
{path : 'xml-reader',component : XmlImport2Component},

{path : '', redirectTo : '/home', pathMatch : 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =  [XmlImportComponent,XmlImport2Component];
