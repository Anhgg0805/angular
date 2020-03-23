import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
// import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {ProduceListComponent} from './produce-list/produce-list.component';
import {ProductManagerComponent} from './product-manager/product-manager.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: ProduceListComponent},
    { path: 'about', component: AboutComponent},
    { path: 'service', component: ServiceComponent},
    { path: 'contact', component: ContactComponent},
    { path: '404', component: NotFoundComponent},
    { path: '**', redirectTo: '/404'},
    {path :'manager',component:ProductManagerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
