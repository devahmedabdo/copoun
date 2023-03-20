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
  loading: boolean = false;
  couponsForm = this.fb.group({
    coupons: ['', Validators.required],
  });
  coupons!: Coupon[];
  close = faMinus;
  popup: boolean = false;
  addCoupons(data: any) {
    this.loading = true;
    this.dash.addCoupons(data).subscribe({
      next: (data: any) => {
        if (data.dublicatedCoupon.length > 0) {
          this.coupons = data.dublicatedCoupon;
          this.popup = true;
        }
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        console.log(err);
      },
    });
  }
  ngOnInit(): void {}
}
