export type Coupon = {
  description: string;
  used: boolean;
  createdAt: any;
};
export type CouponsResponse = {
  coupons: Coupon[];
};
