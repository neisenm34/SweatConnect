import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

public openForm() {
  document.getElementById("myForm").style.display = "block";
}

public closeForm() {
  document.getElementById("myForm").style.display = "none";
}
}
