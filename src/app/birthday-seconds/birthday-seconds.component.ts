import { Component, OnInit } from '@angular/core';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { DesperadoBackendService } from '../services/desperado-backend.service';
import { BirthdaySeconds } from '../models/birthday-seconds';
import { ConfigService } from '../services/config.service';


@Component({
  selector: 'app-birthday-seconds',
  templateUrl: './birthday-seconds.component.html',
  styleUrls: ['./birthday-seconds.component.css'],
  providers: [ ]
})
export class BirthdaySecondsComponent implements OnInit {

  bdaySeconds!: Date;
  time!: {hour: 12, minute: 0};
  date!: {year: number, month: number};
  seconds!: number;
  startAt = new Date(1990, 1, 1, 12, 0)
  
  faCalendar = faCalendar;
  constructor(private backend: DesperadoBackendService) { }

  ngOnInit(): void {
  }
  calculateSeconds() {
    this.backend.postBirthDaySeconds(this.bdaySeconds).subscribe({
      next: (data: BirthdaySeconds) => {
        if(data.birthdaySeconds != undefined) {
          this.seconds = data.birthdaySeconds
        }
      },
      error:  (err: Error) => {
        console.log(err);
      }
    })
    console.log(this.bdaySeconds);
  }
  
}
