import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { EditComponent } from './components/edit/edit.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    // pathMatch: 'full',
    children: [
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full',
      },
      { path: 'users', component: UsersComponent },
      { path: 'coupons', component: CouponsComponent },
      { path: 'edit', component: EditComponent },
    ],
  },
  // { path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
