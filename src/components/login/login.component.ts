import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    
  router = inject(Router);
  loginObj = {
      email: '',
      password:''
    }

  onLogin(){
 
    if(this.loginObj.email === 'admin@gmail.com' && this.loginObj.password === '112233'){
      this.router.navigateByUrl('/client');
      localStorage.setItem('email',this.loginObj.email);
    }
    else{
      alert('Wrong credential');
    }
  }
}
