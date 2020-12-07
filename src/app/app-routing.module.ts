import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CenzorComponent } from './pages/works/cenzor/cenzor.component';
import { TasklistComponent } from './pages/works/tasklist/tasklist.component';
import { UserslistComponent } from './pages/works/userslist/userslist.component';
import { WorksComponent } from './pages/works/works.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'works', component: WorksComponent, children: [
    {path: '', pathMatch: 'full', redirectTo: 'cenzor'},
    {path: 'cenzor', component: CenzorComponent},
    {path: 'userslist', component: UserslistComponent},
    {path: 'tasklist', component: TasklistComponent},
    {path: '**', component: CenzorComponent},
  ]},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
