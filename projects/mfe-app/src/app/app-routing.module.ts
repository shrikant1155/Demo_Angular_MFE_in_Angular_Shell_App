import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CompletedListComponent } from './completed-list/completed-list.component';

const routes: Routes = [
  {path:'', redirectTo: '/todo-list', pathMatch: 'full'},
  {path:'todo-list', component: TodoListComponent},
  {path:'', redirectTo:'/completed',pathMatch: 'full'},
  {path:'completed', component: CompletedListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
