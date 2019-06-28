import { Component, OnInit } from "@angular/core";
import * as localforage from "localforage";
import { from } from "rxjs";
import { timeout, map } from "rxjs/operators";

@Component({
  selector: "app-witze",
  templateUrl: "./witze.component.html",
  styleUrls: ["./witze.component.css"]
})
export class WitzeComponent implements OnInit {
  constructor() {}
  activeJoke;
  isFromDatabase = false;

  ngOnInit() {
    this.getJoke();
  }

  getJoke() {
    const res = from(
      fetch("https://api.chucknorris.io/jokes/random").then(res => res.json())
    );
    res.pipe(timeout(1000)).subscribe(
      data => {
        const { value: joke } = data;

        this.saveInBrowser(joke);

        this.activeJoke = joke;
      },
      () => {
        from(localforage.getItem("jokes")).subscribe((data: []) => {
          this.isFromDatabase = true;
          this.activeJoke =
            data[Math.floor(Math.random() * Math.floor(data.length))];
        });
      }
    );
  }

  async saveInBrowser(joke: Text) {
    const savedJokes: null | [] = await localforage.getItem("jokes");
    if (savedJokes === null) {
      localforage.setItem("jokes", [joke]);
    } else {
      localforage.setItem("jokes", [...savedJokes, joke]);
    }
  }
}
