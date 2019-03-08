import { Component, OnInit, OnDestroy } from '@angular/core';

import { ClockService } from './clock.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'mc2-digital-clock';
  time: Date;
  timeSubscription: Subscription;

  constructor(private clockService: ClockService) {}

  ngOnInit() {
    this.timeSubscription = this.clockService.time.subscribe((time: Date) => {
      this.time = time;
    });
  }

  ngOnDestroy() {
    this.timeSubscription.unsubscribe();
  }
}
