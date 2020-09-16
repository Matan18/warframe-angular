// https://api.warframestat.us/pc/dailyDeals
// commonly array
export interface IDarvoDailyDeals {
  item: string,
  expiry: string,
  activation: string,
  originalPrice: number,
  salePrice: number,
  total: number,
  sold: number,
  id: string,
  eta: string,
  discount: number
}

export interface IDarvoDealsInfo {
  name: string,
  originalPrice: number,
  salePrice: number,
  amount: number,
  sold: number,
  available: number,
  expiry: Date,
  until: Date
}

// https://api.warframestat.us/pc/flashSales
// Commonly array
export interface IDarvoSales {
  item: string,
  expiry: string,
  activation: string,
  discount: number,
  regularOverride: number,
  premiumOverride: number,
  isShownInMarket: boolean,
  isFeatured: boolean,
  isPopular: boolean,
  id: string,
  expired: boolean,
  eta: string
}

export interface IDarvoSalesInfo {
  item: string,
  expiry: Date,
  discount: number,
  regularOverride: number,
  premiumOverride: number,
  until: Date
}