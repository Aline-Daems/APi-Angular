import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{


  isAuthenticated!:string |null;

  constructor(private _userService: UserService) {
  }

  ngOnInit() {
    this._userService.userConnected.subscribe(user => {this.isAuthenticated = user})
    }


}
