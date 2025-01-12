import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-auth-topbar',
  templateUrl: './auth-topbar.component.html',
  styleUrls: ['./auth-topbar.component.scss']
})
export class AuthTopbarComponent implements OnInit {
  date: string = "";
  time: string = "";
  hijridate: string = "";

  ngOnInit(): void {
    var value = new Date();
    this.date = new Intl.DateTimeFormat('AR-EG', { day: 'numeric', month: 'long', weekday: 'long', year: 'numeric' }).format(value);
    let hijri = new Intl.DateTimeFormat('ar-SA-u-ca-islamic-umalqura', { timeZone: 'UTC', day: 'numeric', month: 'long', weekday: 'long', year: 'numeric' }).format(value);
    this.hijridate = hijri.slice(8);
    this.time = value.getHours() + ":" + value.getMinutes() + ":" + value.getSeconds();

  }

}
