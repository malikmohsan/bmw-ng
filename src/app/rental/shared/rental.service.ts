import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Rental } from "./Rental";

@Injectable()
export class RentalService {
  private rentals: Rental[] = [
    {
      id: "1",
      title: "Central Apartment 1",
      city: "New York",
      street: "Times Square",
      category: "apartment",
      image: "http://vai.placeholder.com/250x350",
      bedroom: 3,
      description: "Very Nice apartment",
      dailyRate: 5,
      share: false,
      createdAt: "2017-04-04"
    },

    {
      id: "2",
      title: "Central Apartment 0",
      city: "Islamabad",
      street: "Times Square",
      category: "apartment",
      image: "http://vai.placeholder.com/250x350",
      bedroom: 3,
      description: "Very Nice apartment",
      dailyRate: 26,
      share: false,
      createdAt: "2017-04-04"
    },

    {
      id: "3",
      title: "Central Apartment 3",
      city: "New Lahore",
      street: "Times Square",
      category: "apartment",
      image: "http://vai.placeholder.com/250x350",
      bedroom: 3,
      description: "Very Nice apartment",
      dailyRate: 555,
      share: false,
      createdAt: "2017-04-04"
    },
    {
      id: "4",
      title: "Central Apartment 4",
      city: "New Kaijo",
      street: "Times Square",
      category: "apartment",
      image: "http://vai.placeholder.com/250x350",
      bedroom: 3,
      description: "Very Nice apartment",
      dailyRate: 555,
      share: false,
      createdAt: "2017-04-04"
    }
  ];

  public getRentalById(rentalId: string): Observable<Rental> {
    return new Observable<Rental>(observer => {
      setTimeout(() => {
        const rental = this.rentals.find(rental => {
          return rental.id == rentalId;
        });
        observer.next(rental);
      }, 2000);
    });
  }

  public getRentals(): Observable<Rental[]> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.rentals);
      }, 2000);
    });
  }
}
