import { Component, OnInit } from '@angular/core';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-birthday-seconds',
  templateUrl: './birthday-seconds.component.html',
  styleUrls: ['./birthday-seconds.component.css'],
  providers: [ ]
})
export class BirthdaySecondsComponent implements OnInit {

  model!: NgbDateStruct;
  date!: {year: number, month: number};
  seconds!: number;
  
  faCalendar = faCalendar;
  constructor(private calendar:NgbCalendar) { }

  ngOnInit(): void {
  }

}
