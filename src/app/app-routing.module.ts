import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { XmlImportComponent } from './xml-import/xml-import.component';


const routes: Routes = [
{path : 'home',component : XmlImportComponent},
{path : '', redirectTo : '/home', pathMatch : 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =  [XmlImportComponent];
