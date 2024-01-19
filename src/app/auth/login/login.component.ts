import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private isAuthenticated = false;
  private isAdmin = false;

  loginObj = {
    username: "",
    password: ""
  }
  formLogin!: FormGroup;
  constructor(private auth: AuthService, private form: FormBuilder, private router: Router) {
    this.formLogin = this.form.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
    })
  }
  getControl(name: any): AbstractControl | null {
    return this.formLogin.get(name);
  }

  ngOnInit(): void {
    this.onLogin();
  }

  onLogin() {
    if (this.formLogin.valid) {
      this.loginObj.username = this.formLogin.get('username')?.value;
      this.loginObj.password = this.formLogin.get('password')?.value;
      this.auth.login(this.loginObj).subscribe(
        (res: any) => {
          if (res && res.length > 0) {
            const user = res[0];
            const role = user.role;
            if (role === 'admin') {
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.router.navigateByUrl('/admin');
            } else if (role === 'user') {
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.router.navigateByUrl('');
            } else {
              alert('Unknown role, cannot login.');
            }
          } else {
            alert('Login failed. Please try again.');
          }
        }
      );
    }
  }
}
