import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './layout/header/header.component';
import { UsersComponent } from './components/users/users.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditComponent } from './components/edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './layout/loading/loading.component';

@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    UsersComponent,
    CouponsComponent,
    EditComponent,
    LoadingComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, FontAwesomeModule , FormsModule ,ReactiveFormsModule],
})
export class AdminModule {}
