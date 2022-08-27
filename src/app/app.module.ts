import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http"


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreateClientComponent } from './components/create-client/create-client.component';
import { ListsClientComponent } from './components/lists-client/lists-client.component';
import { DetailClientComponent } from './components/detail-client/detail-client.component';

const routes: Routes = [
  {path: "homepage", component: HomepageComponent, title: "HomePage"},
  {path: "clients", component: ListsClientComponent, title: "List-of-Clients"},
  {path: "client/:id", component: DetailClientComponent, title: "Client-details"},
  {path: "create", component: CreateClientComponent, title: "Create-client"},
  {path: "about", component: AboutComponent, title: "About"},
  {path: "", redirectTo: "homepage", pathMatch: "full"},
  {path: "**", component: NotFoundComponent, title: "NotFound"},

]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    AboutComponent,
    NotFoundComponent,
    CreateClientComponent,
    ListsClientComponent,
    DetailClientComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
