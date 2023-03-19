import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { Coupon } from 'src/app/interfaces/coupon';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  constructor(private fb: FormBuilder, private dash: DashboardService) {}
  couponsForm = this.fb.group({
    coupons: ['', Validators.required],
  });
  coupons!: Coupon[];
  close = faMinus;
  popup: boolean = false;
  addCoupons(data: any) {
    this.dash.addCoupons(data).subscribe({
      next: (data: any) => {
        if (data.dublicatedCoupon.length > 0) {
          this.coupons = data.dublicatedCoupon;
          console.log(this.coupons);
          this.popup = true;
          // this.couponsForm.controls.coupons.setValue('');
        }
      },
      error: (err) => console.log(err),
    });
  }
  ngOnInit(): void {}
}
