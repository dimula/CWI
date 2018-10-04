import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { GridComponent } from './worklist/grid/grid.component';

const routes: Routes = [
  {path: '', redirectTo: '/test', pathMatch: 'full'},
  {path: 'test', component: TestComponent},
  {path: 'grid', component: GridComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
