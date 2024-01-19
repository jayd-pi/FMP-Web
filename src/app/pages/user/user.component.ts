import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user!: User;
  userId!: number;

constructor(private userService: UserService, private route: ActivatedRoute){
}
  ngOnInit(): void {
    const userId = this.route.snapshot.params['id'];
    console.log(userId);
    this.userService.getUserById(userId)
      .subscribe(
        (user: User) => {
          this.user = user;
          console.log(this.user);
        }
      );
  }
}
