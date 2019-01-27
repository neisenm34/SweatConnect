import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { users } from '../resources/users';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    loc_ymca: new FormControl(false),
    loc_snap: new FormControl(false),
    loc_anytime: new FormControl(false),
    loc_orange: new FormControl(false),
    act_cardio: new FormControl(false),
    act_cycling: new FormControl(false),
    act_hiit: new FormControl(false),
    act_kickboxing: new FormControl(false),
    act_strength: new FormControl(false),
    act_trx: new FormControl(false),
    act_yoga: new FormControl(false),
    act_zumba: new FormControl(false),
    time_early_morning: new FormControl(false),
    time_late_morning: new FormControl(false),
    time_afternoon: new FormControl(false),
    time_evening: new FormControl(false),
    time_night: new FormControl(false),
    time_late_night: new FormControl(false),
  });

  public users = users;

  public filteredUsers = [];

  constructor() { }

  ngOnInit() {
    this.form.valueChanges.subscribe(() => {
      let temp = users;
      if (this.form.controls['loc_ymca'].value) {
        temp = temp.filter((user) => user.memberships.includes('YMCA'));
      }
      if (this.form.controls['loc_snap'].value) {
        temp = temp.filter((user) => user.memberships.includes('Snap Fitness'));
      }
      if (this.form.controls['loc_anytime'].value) {
        temp = temp.filter((user) => user.memberships.includes('Anytime Fitness'));
      }
      if (this.form.controls['loc_orange'].value) {
        temp = temp.filter((user) => user.memberships.includes('Orange Theory'));
      }
      if (this.form.controls['act_cardio'].value) {
        temp = temp.filter((user) => user.preferred_workouts.includes('Cardio'));
      }
      if (this.form.controls['act_cycling'].value) {
        temp = temp.filter((user) => user.preferred_workouts.includes('Cycling'));
      }
      if (this.form.controls['act_hiit'].value) {
        temp = temp.filter((user) => user.preferred_workouts.includes('HIIT'));
      }
      if (this.form.controls['act_kickboxing'].value) {
        temp = temp.filter((user) => user.preferred_workouts.includes('Kickboxing'));
      }
      if (this.form.controls['act_strength'].value) {
        temp = temp.filter((user) => user.preferred_workouts.includes('Strength Training'));
      }
      if (this.form.controls['act_trx'].value) {
        temp = temp.filter((user) => user.preferred_workouts.includes('TRX'));
      }
      if (this.form.controls['act_yoga'].value) {
        temp = temp.filter((user) => user.preferred_workouts.includes('Yoga'));
      }
      if (this.form.controls['act_zumba'].value) {
        temp = temp.filter((user) => user.preferred_workouts.includes('Zumba'));
      }
      if (this.form.controls['time_early_morning'].value) {
        temp = temp.filter((user) => user.preferred_times.includes('Early Morning'));
      }
      if (this.form.controls['time_late_morning'].value) {
        temp = temp.filter((user) => user.preferred_times.includes('Late Morning'));
      }
      if (this.form.controls['time_afternoon'].value) {
        temp = temp.filter((user) => user.preferred_times.includes('Afternoon'));
      }
      if (this.form.controls['time_evening'].value) {
        temp = temp.filter((user) => user.preferred_times.includes('Evening'));
      }
      if (this.form.controls['time_night'].value) {
        temp = temp.filter((user) => user.preferred_times.includes('Night'));
      }
      if (this.form.controls['time_late_night'].value) {
        temp = temp.filter((user) => user.preferred_times.includes('Late Night'));
      }
      this.filteredUsers = temp;
    });
  }


  public onConnect(name: string): void {
    window.alert('You have connected with ' + name);
  }

public openForm() {
  document.getElementById("myForm").style.display = "block";
}

public closeForm() {
  document.getElementById("myForm").style.display = "none";
}
}
