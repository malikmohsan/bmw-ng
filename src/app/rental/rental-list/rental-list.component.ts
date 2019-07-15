import { Component, OnInit } from "@angular/core";
import { RentalService } from "../shared/rental.service";
import { Observable } from "rxjs/Observable";
import { Rental } from "../shared/Rental";

@Component({
  selector: "bwm-rental-list",
  templateUrl: "./rental-list.component.html",
  styleUrls: ["./rental-list.component.scss"]
})
export class RentalListComponent implements OnInit {
  constructor(private rentalService: RentalService) {}
  rentals: Rental[] = [];

  ngOnInit() {
    const observable = this.rentalService.getRentals();
    observable.subscribe({
      next: (data: Rental[]) => {
        this.rentals = data;
      },
      error: error => {
        console.log(error);
      },
      complete: () => {
        console.log("completed");
      }
    });
  }
}
