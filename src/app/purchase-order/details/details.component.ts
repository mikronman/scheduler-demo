import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { selectPoDetails } from "../../store/selectors/po-details.selector";
import { getPoDetails } from "../../store/actions/po-details.actions";
import { PoDetailsService } from "../../store/services/po-details.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
})
export class DetailsComponent implements OnInit {
  
  poDetails$ = this.store.pipe(select(selectPoDetails));

  // Test Data
  poDetails = [
    {
      poNumber: 450028308,
      poDate: "04/15/2021",
      poTerms: "Net 60",
      poAcknowledge: false,
      poConfirm: false,
      poVendors: [
        {
          vendorType: "Shipper",
          vendorName: "Shipping Company",
          partnerId: 12345678,
          contactName: "Jane Smith",
          contactPhone: "(770) 123-3456",
          contactEmail: "jsmith@shippingcompany.com",
          streetAddress: "230 Apple Avenue",
          city: "Atlanta",
          state: "GA",
          zipCode: 30328,
          country: "USA",
        },
        {
          vendorType: "Bill To",
          vendorName: "Billing Company",
          partnerId: 12345678,
          contactName: "John Smith",
          contactPhone: "(770) 123-3456",
          contactEmail: "jsmith@billingcompany.com",
          streetAddress: "230 Apple Avenue",
          city: "Atlanta",
          state: "GA",
          zipCode: 30328,
          country: "USA",
        },
        {
          vendorType: "Supplier",
          vendorName: "Supply Company",
          partnerId: 12345678,
          contactName: "James Jones",
          contactPhone: "(770) 123-3456",
          contactEmail: "jsmith@supplycompany.com",
          streetAddress: "230 Apple Avenue",
          city: "Atlanta",
          state: "GA",
          zipCode: 30328,
          country: "USA",
        },
        {
          vendorType: "Seller",
          vendorName: "Selling Company",
          partnerId: 12345678,
          contactName: "John Doe",
          contactPhone: "(770) 123-3456",
          contactEmail: "jsmith@sellingCompany.com",
          streetAddress: "230 Apple Avenue",
          city: "Atlanta",
          state: "GA",
          zipCode: 30328,
          country: "USA",
        },
      ],
    },
  ];

  // Test Data
  dateFormat = '4/40/21';
  timeFormat = '10:23:52 AM EDT';
  numberFormat = '1,000,000.00';

  constructor(
    private poDetailsService: PoDetailsService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.poDetailsService
      .getPoDetails()
      .subscribe((poDetails) =>
        this.store.dispatch(getPoDetails({ poDetails }))
      );
  }
}
