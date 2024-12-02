import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'LoginPage';
  user = { username: '',password: ''};
  loginAttempted = false;
  loginSuccess = false;

  login(){
      if(this.user.username === 'PriyankaRout' && this.user.password ==='Priyanka19')
      {
          this.loginSuccess=true;
      }
      else
      {
          this.loginSuccess=false;
      }
      this.loginAttempted=true;
  }
}
