import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { users } from '../resources/users';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public users = users.filter(user => user.id % 5 === 0 );

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('');
  }

  onFindFriends(): void {

  }

public openForm() {
  document.getElementById("myForm").style.display = "block";
}

public closeForm() {
  document.getElementById("myForm").style.display = "none";
}

}
