import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NG-Chat';

  constructor(private authService: AuthService){

  }

  public signInWithGoogle(){
    debugger;
    this.authService.signInWithGoogle();
  }
}
