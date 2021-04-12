export interface PoDetails {
  poNumber: number;
  poDate: string;
  poTerms: string;
  poAcknowledge: boolean;
  poConfirm: boolean;
  poVendor: PoVendor;
}

interface PoVendor {
  vendorName: string;
  partnerId: number;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: number;
  country: string;
}
