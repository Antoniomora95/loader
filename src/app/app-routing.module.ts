import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Link1Component } from './pages/link1/link1.component';
import { Link2Component } from './pages/link2/link2.component';
import { Link3Component } from './pages/link3/link3.component';
import { Link4Component } from './pages/link4/link4.component';


const routes: Routes = [
  {path:'', redirectTo: 'link1', pathMatch: 'full'},
  {path: 'link1', component: Link1Component, data: {progress: 'link1'}},
  {path: 'link2', component: Link2Component, data: {progress: 'link4'}},
  {path: 'link3', component: Link3Component, data: {progress: 'link3'}},
  {path: 'link4', component: Link4Component, data: {progress: 'link4'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
