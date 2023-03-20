import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}
  emailIcon = faMailBulk;
  eay = faEye;
  eayslash = faEyeSlash;
  // contactIcon = faContactCard;
  PhoneIcon = faPhone;
  // locationIcon = faLocationDot;
  // cityIcon = faCity;
  // governateIcon = faStreetView;
  // streetIcon = faHome;
  // male = faMale;
  // female = faFemale;
  // buyer = faUserTie;
  // seller = faBuildingUser;
  // camera = faCamera;
  type: string = 'password';
  startPost?: boolean = false;
  loginInvalid: boolean = false;
  // change = faExchange;
  loginForm = this.fb.group({
    email: [
      localStorage.getItem('email') || '',
      [Validators.required, Validators.email],
    ],
    password: [localStorage.getItem('password') || '', [Validators.required]],
  });
  rememberMe: boolean = false;
  setRememberMe(key: string, value: string) {
    if (this.rememberMe) {
      localStorage.setItem(key, value);
    }
  }
  login(data: any) {
    this.startPost = true;
    this.auth.loging(data).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        this.startPost = false;
        this.router.navigateByUrl('/dashboard');
      },
      error: (err) => {
        this.loginInvalid = true;
        this.startPost = false;
        console.log(err);
      },
    });
  }
  ngOnInit(): void {}
}
