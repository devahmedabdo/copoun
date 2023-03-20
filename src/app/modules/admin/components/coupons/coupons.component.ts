import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/interfaces/coupon';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss'],
})
export class CouponsComponent implements OnInit {
  loading!: boolean;
  coupons!: Coupon[];
  usedCoupons!: Coupon[];
  unusedCoupons!: Coupon[];
  couponsType: string = 'all';
  constructor(private dash: DashboardService) {}
  getAllCoupons(type: string) {
    this.dash.getAllCoupons(type).subscribe({
      next: (coupons) => {
        this.coupons = coupons.coupons;
        this.usedCoupons = coupons.coupons.filter((ele) => {
          return ele.used == true;
        });
        this.unusedCoupons = coupons.coupons.filter((ele) => {
          return ele.used == false;
        });
        this.loading = true;
      },
      error: (err) => console.log(err),
    });
  }
  log(a: any) {
    console.log(a);
  }
  ngOnInit(): void {
    this.getAllCoupons('coupons');
  }
}
