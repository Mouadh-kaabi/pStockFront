import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddClientComponent } from './client/add-client/add-client.component';
import { ListClientComponent } from './client/list-client/list-client.component';
import { AddCatComponent } from './categorie/add-cat/add-cat.component';
import { ListCatComponent } from './categorie/list-cat/list-cat.component';
import { ListscategorieComponent } from './scategorie/listscategorie/listscategorie.component';
import { AddscategorieComponent } from './scategorie/addscategorie/addscategorie.component';
import { AddArticleComponent } from './article/add-article/add-article.component';
import { ListArticleComponent } from './article/list-article/list-article.component';
import { AddFournisseurComponent } from './fournisseur/add-fournisseur/add-fournisseur.component';
import { ListFournisseurComponent } from './fournisseur/list-fournisseur/list-fournisseur.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http' ; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule,FormBuilder} from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    AddClientComponent,
    ListClientComponent,
    AddCatComponent,
    ListCatComponent,
    ListscategorieComponent,
    AddscategorieComponent,
    AddArticleComponent,
    ListArticleComponent,
    AddFournisseurComponent,
    ListFournisseurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    FormsModule,
    ReactiveFormsModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
