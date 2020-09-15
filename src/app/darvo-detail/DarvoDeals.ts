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
