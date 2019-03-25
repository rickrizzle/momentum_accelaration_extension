import { Component } from "@angular/core";

import { observable, interval } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  name: string = "World";
  time: string;
  interval: any;
  greeting: string;

  getTime(): void {
    this.interval = setInterval(() => {
      var hour = new Date().getHours();
      this.getGreeting(hour);
      //drop the :seconds & AM/PM
      this.time = new Date().toLocaleTimeString().replace(/:\d+.[A-Z]{2}/, "");
    }, 1000);
  }

  getGreeting(hour: number): void {
    if (hour >= 4 && hour <= 11) {
      this.greeting = "Good Morning";
    } else if (hour >= 12 && hour <= 17) {
      this.greeting = "Good afternoon";
    } else {
      this.greeting = "Good Evening";
    }
  }

  ngAfterViewInit() {
    this.getTime();
  }
}
