import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// NgRx
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { OrderLineReducer } from '../store/reducers/order-line.reducer'
import { OrderLineEffects } from "../store/effects/order-line.effect";

// Material Design
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatCardModule} from '@angular/material/card';
import {LayoutModule} from '@angular/cdk/layout';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';

// Componenents
import { PurchaseOrderRoutingModule } from "./purchase-order-routing.module";
import { PurchaseOrderComponent } from "./purchase-order.component";
import { DetailsComponent } from "./details/details.component";
import { TermsComponent } from "./terms/terms.component";
import { SpecialComponent } from "./special/special.component";
import { AttachmentsComponent } from "./attachments/attachments.component";
import { OrderLinesComponent } from "./order-lines/order-lines.component";
import { ConfirmComponent } from "./confirm/confirm.component";
import { CommentsComponent } from "./comments/comments.component";
import { AgreementComponent } from './agreement/agreement.component';
import { SplitComponent } from './split/split.component';
import { ScheduleComponent } from './split/schedule/schedule.component';
import { AcknowledgeComponent } from './confirm/acknowledge/acknowledge.component';
import { SubmitComponent } from './confirm/submit/submit.component';
import { SplitTableComponent } from './order-lines/split-table/split-table.component';
import { environment } from "src/environments/environment";

@NgModule({
  declarations: [
    PurchaseOrderComponent,
    DetailsComponent,
    TermsComponent,
    SpecialComponent,
    AttachmentsComponent,
    OrderLinesComponent,
    ConfirmComponent,
    CommentsComponent,
    AgreementComponent,
    SplitComponent,
    ScheduleComponent,
    AcknowledgeComponent,
    SubmitComponent,
    SplitTableComponent,
  ],
  imports: [
    CommonModule,
    PurchaseOrderRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    LayoutModule,
    MatExpansionModule,
    MatMenuModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatDialogModule,
    MatTableModule,
    StoreModule.forRoot({line: OrderLineReducer}, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([OrderLineEffects]),
  ],
  providers: [  
    MatDatepickerModule, 
    MatNativeDateModule 
  ],
})
export class PurchaseOrderModule {}
