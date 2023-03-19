export type User = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  coupon: any;
  createdAt: any;
};
export type UsersResponse = {
  users: User[];
};
