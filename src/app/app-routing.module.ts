import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClientComponent } from './client/add-client/add-client.component';
import { ListClientComponent } from './client/list-client/list-client.component';


const routes: Routes = [
  {path: '', redirectTo: 'ajouterClient', pathMatch: 'full'},
  {path: 'ajouterClient', component: AddClientComponent },
  {path: 'allclient', component: ListClientComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
