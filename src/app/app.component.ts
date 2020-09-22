import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngInterceptor';
  data: any
  constructor(private _usersServices: UserService) {

  }

  ngOnInit(): void {
    this.getUser()
  }

  getUser() {
    this._usersServices.getUsers().subscribe(data => {
      this.data = data
    }, err => {
      alert('err http',)
    })
  }
}
