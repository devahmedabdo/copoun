import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/services/dashboard.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}
  contactIcon = faAddressCard;
  emailIcon = faEnvelope;
  startPost: boolean = false;
  signupErrors: any;
  signupForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
  });
  signup(data: any) {
    this.auth.signup(data).subscribe({
      next: (res: any) => {
        this.startPost = false;
        this.router.navigateByUrl('/success');
      },
      error: (err) => {
        this.startPost = false;
        this.signupErrors = err.error;
      },
    });
  }
  removeError(error: any) {
    if (error) {
      delete this.signupErrors?.[error];
    }
  }
  ngOnInit(): void {}
}
