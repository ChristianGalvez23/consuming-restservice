import { CountriesService } from "./countries.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [CountriesService]
})
export class AppComponent implements OnInit {
  countrySelected: any;
  countriesList: any;
  JsonCountry: any;

  constructor(private countries: CountriesService) {}

  ngOnInit() {
    this.countries
      .getCountries()
      .then(countries => {
        this.countriesList = countries;
        console.log(this.countriesList);
      })
      .catch(err => {
        console.log(err);
      });
  }

  onChangeCountry() {
    this.JsonCountry = JSON.stringify(this.countrySelected);
    console.log(this.countrySelected);
  }
}
