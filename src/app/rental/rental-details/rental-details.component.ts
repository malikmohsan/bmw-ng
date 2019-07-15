import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RentalService } from "../shared/rental.service";
import { Rental } from "../shared/Rental";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "bwm-rental-details",
  templateUrl: "./rental-details.component.html",
  styleUrls: ["./rental-details.component.scss"]
})
export class RentalDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private rentalService: RentalService
  ) {}
  rentalId: string;
  rental: Rental;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.rentalId = params["rentalId"];
      this.getRental(this.rentalId);
    });
  }

  getRental(rentalId: string) {
    const observable: Observable<Rental> = this.rentalService.getRentalById(
      rentalId
    );
    observable.subscribe({
      next: (data: Rental) => {
        this.rental = data;
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
