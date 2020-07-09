import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { LoginComponent } from './login/login.component';
import { TaskGuard } from './task/task.guard';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'task', component: TaskComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [TaskGuard]
})
export class AppRoutingModule { }
