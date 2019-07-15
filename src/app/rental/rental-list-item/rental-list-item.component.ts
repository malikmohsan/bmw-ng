import { Input, Component, OnInit } from "@angular/core";
import { Rental } from "../shared/Rental";

@Component({
  selector: "bwm-rental-list-item",
  templateUrl: "./rental-list-item.component.html",
  styleUrls: ["./rental-list-item.component.scss"]
})
export class RentalListItemComponent implements OnInit {
  @Input() rentalData: Rental;
  constructor() {}

  ngOnInit() {}
}
