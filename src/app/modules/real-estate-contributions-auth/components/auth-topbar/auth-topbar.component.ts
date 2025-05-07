import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-auth-topbar',
  templateUrl: './auth-topbar.component.html',
  styleUrls: ['./auth-topbar.component.scss']
})
export class AuthTopbarComponent implements OnInit, OnDestroy {
  date: string = "";
  time: string = "";
  hijridate: string = "";
  private timer: any;

  ngOnInit(): void {
    this.updateDateTime();
    // Update time every second
    this.timer = setInterval(() => {
      this.updateDateTime();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  private updateDateTime(): void {
    const value = new Date();
    this.date = new Intl.DateTimeFormat('AR-EG', { day: 'numeric', month: 'long', weekday: 'long', year: 'numeric' }).format(value);
    let hijri = new Intl.DateTimeFormat('ar-SA-u-ca-islamic-umalqura', { timeZone: 'UTC', day: 'numeric', month: 'long', weekday: 'long', year: 'numeric' }).format(value);
    this.hijridate = hijri.slice(8);
    
    // Format time with leading zeros
    const hours = value.getHours().toString().padStart(2, '0');
    const minutes = value.getMinutes().toString().padStart(2, '0');
    const seconds = value.getSeconds().toString().padStart(2, '0');
    this.time = `${hours}:${minutes}:${seconds}`;
  }
}
