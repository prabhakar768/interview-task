import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DropdownComponent} from './dropdown/dropdown.component';
import {DetailComponent} from './detail/detail.component'
const routes: Routes = [
  {path:'employee-list', component:DropdownComponent },
  {path:'user-detail/:id', component:DetailComponent },
  { path: '**', redirectTo: 'employee-list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
