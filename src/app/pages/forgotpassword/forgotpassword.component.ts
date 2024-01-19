import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  forgotPasswordForm!: FormGroup;

  constructor(private form: FormBuilder) {
    this.forgotPasswordForm = this.form.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onSubmit(){
    if(this.forgotPasswordForm.valid){
      const email = this.forgotPasswordForm.get('email')?.value;
      console.log('Submitting email for password reset:', email);

    }
  }
  getControl(name: any): AbstractControl | null {
    return this.forgotPasswordForm.get(name);
  }
}
