import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RentalComponent } from "./rental.component";
import { RentalService } from "./shared/rental.service";
import { Routes, RouterModule } from "@angular/router";

import { RentalListComponent } from "./rental-list/rental-list.component";
import { RentalListItemComponent } from "./rental-list-item/rental-list-item.component";
import { RentalDetailsComponent } from "./rental-details/rental-details.component";
const routes: Routes = [
  {
    path: "rentals",
    component: RentalComponent,
    children: [
      { path: "", component: RentalListComponent },
      { path: ":rentalId", component: RentalDetailsComponent }
    ]
  }
];
@NgModule({
  declarations: [
    RentalComponent,
    RentalListComponent,
    RentalListItemComponent,
    RentalDetailsComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [RentalService]
})
export class RentalModule {}
