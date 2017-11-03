import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Injectable()
export class CountriesService {
  constructor(private http: HttpClient) {}

  getCountries() {
    const promise = new Promise((resolve, reject) => {
      return this.http
        .get("https://restcountries.eu/rest/v2/all")
        .subscribe(data => {
          if (data === undefined) {
            resolve("No countries got it.");
          }
          resolve(data);
        });
    });
    return promise;
  }
}
