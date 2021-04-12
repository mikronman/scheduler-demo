import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PurchaseOrderComponent } from "./purchase-order.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: PurchaseOrderComponent,
        data: { title: "Purchase Order" },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchaseOrderRoutingModule {}
