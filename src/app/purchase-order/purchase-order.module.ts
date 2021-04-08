import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PurchaseOrderRoutingModule } from "./purchase-order-routing.module";
import { PurchaseOrderComponent } from "./purchase-order.component";
import { DetailsComponent } from "./details/details.component";
import { TermsComponent } from "./terms/terms.component";
import { SpecialComponent } from "./special/special.component";
import { AttachmentsComponent } from "./attachments/attachments.component";
import { OrderLinesComponent } from "./order-lines/order-lines.component";
import { OrderCardComponent } from "./order-card/order-card.component";
import { ConfirmComponent } from "./confirm/confirm.component";
import { CommentsComponent } from "./comments/comments.component";
import { CardAcceptComponent } from './card-accept/card-accept.component';
import { CardRejectComponent } from './card-reject/card-reject.component';
import { CardChangeComponent } from './card-change/card-change.component';
import { CardSplitComponent } from './card-split/card-split.component';
import { CardAdditionalDetailsComponent } from './card-additional-details/card-additional-details.component';

@NgModule({
  declarations: [
    PurchaseOrderComponent,
    DetailsComponent,
    TermsComponent,
    SpecialComponent,
    AttachmentsComponent,
    OrderLinesComponent,
    OrderCardComponent,
    ConfirmComponent,
    CommentsComponent,
    CardAcceptComponent,
    CardRejectComponent,
    CardChangeComponent,
    CardSplitComponent,
    CardAdditionalDetailsComponent,
  ],
  imports: [CommonModule, PurchaseOrderRoutingModule],
})
export class PurchaseOrderModule {}
