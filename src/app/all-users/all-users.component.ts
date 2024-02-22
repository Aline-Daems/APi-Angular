import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../Models/user";
import {Subject, takeUntil} from "rxjs";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.css'
})
export class AllUsersComponent implements OnInit, OnDestroy{

  array!: User[];

  $destroyed = new Subject<Boolean>()

  constructor(private readonly _userService: UserService) {


  }
  ngOnInit(){

    this._userService.getAll().pipe(takeUntil(this.$destroyed)).subscribe({
      next:(valeur) => this.array=valeur,
      error:(err)=>console.log(err.error()),
      complete:()=>console.log("Chargement complet")
    })
  };

  ngOnDestroy(){

    this.$destroyed.next(true);
    this.$destroyed.complete();
  }
}
