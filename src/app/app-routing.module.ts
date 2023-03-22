import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './pages/table/table.component';
import { AddFormComponent } from './pages/add-form/add-form.component';
import { UpdateFormComponent } from './pages/update-form/update-form.component';

const routes: Routes = [
  {path:"", component:TableComponent},
  {path:"add-form", component:AddFormComponent},
  {path:"update-form/:id", component:UpdateFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
