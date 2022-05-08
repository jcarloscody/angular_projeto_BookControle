import { CategoriaDeleteComponent } from './components/view/categoria/categoria-delete/categoria-delete.component';
import { CategoriaCreateComponent } from './components/view/categoria/categoria-create/categoria-create.component';
import { HomeComponent } from './components/view/home/home.component';
import { CategoriaReadComponent } from './components/view/categoria/categoria-read/categoria-read.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "categorias", component: CategoriaReadComponent},
  {path: "categorias/create", component: CategoriaCreateComponent},
  {path: "categorias/delete/:id", component: CategoriaDeleteComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
