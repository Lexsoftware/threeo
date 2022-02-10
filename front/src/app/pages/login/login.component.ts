import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  formLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  subimited = false;

  constructor(private authService: AuthService, public router: Router) { }

  ngOnDestroy(): void {
    this.authService.unsubscribe();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.subimited = true;

    if (this.formLogin.valid) {
      console.log(this.formLogin.value);
      this.authService.sigin(this.formLogin.value).subscribe(
        {
          next: (data) => {
            console.log(data);

            localStorage.setItem('token', data.token);

            this.router.navigate(['calculadora'])

          }, error: (e) => alert('Usuário ou senha inválidos')
        });
    }
  }


}