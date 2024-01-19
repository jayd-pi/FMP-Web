import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formSignup!: FormGroup;

  signupObj = {
    id: 0,
    username: '',
    email: '',
    password: '',
    phonenumber: '',
    role: '',
  }
  confirmPasswordHasError = false;
  constructor(private form: FormBuilder, private router: Router, private auth: AuthService) {
    this.formSignup = this.form.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      phonenumber: ['', [Validators.required]],
    },);
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    this.signupObj.id = users.length + 1;
  }

  getControl(name: any): AbstractControl | null {
    return this.formSignup.get(name);
  }

  ngOnInit(): void {
    this.onSignUp();
  }


  onSignUp() {
    if (this.formSignup.valid) {
      this.signupObj.username = this.formSignup.get('username')?.value;
      this.signupObj.email = this.formSignup.get('email')?.value;
      this.signupObj.password = this.formSignup.get('password')?.value;
      this.signupObj.phonenumber = this.formSignup.get('phonenumber')?.value;
      this.signupObj.role = 'admin';

      this.auth.signUp(this.signupObj).subscribe({
        next: (res: any) => {
          console.log(res);
          const users = JSON.parse(localStorage.getItem('users') || '[]');
          users.push(res);
          localStorage.setItem('users', JSON.stringify(users));
          this.formSignup.reset();
          this.router.navigateByUrl('/login');
        }, error: (error: any) => {
          console.log('Sign up failed: ' + error);
          alert('Sign up failed: ' + error.message);
        }
      })
    }
  }
}
