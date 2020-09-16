import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { IDarvoDailyDeals, IDarvoDealsInfo, IDarvoSales, IDarvoSalesInfo } from "./DarvoDeals";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  constructor(
    private http: HttpClient
  ) { }

  dealParam = "/dailyDeals";
  salesParam = "/flashSales"

  getDarvoDeals(baseUrl: string): Observable<IDarvoDealsInfo[]> {

    return this.http.get<IDarvoDailyDeals[]>(baseUrl + this.dealParam)
      .pipe(
        map(details => details
          .map(deal => {
            const expiry = new Date(deal.expiry);

            return {
              name: deal.item,
              originalPrice: deal.originalPrice,
              salePrice: deal.salePrice,
              amount: deal.total,
              sold: deal.sold,
              available: deal.total - deal.sold,
              expiry: expiry,
              until: this.getDateDiff(expiry)
            }
          }
          ))
      )
  }

  getDarvoSales(baseUrl: string): Observable<IDarvoSalesInfo[]> {
    return this.http.get<IDarvoSales[]>(baseUrl + this.salesParam)
      .pipe(
        map(sales => sales
          .map(sale => {
            const expiry = new Date(sale.expiry);

            return {
              item: sale.item,
              expiry: expiry,
              discount: sale.discount,
              regularOverride: sale.regularOverride,
              premiumOverride: sale.premiumOverride,
              until: this.getDateDiff(expiry)
            }
          }))
      )
  }

  getDateDiff(date: Date): Date {
    const now = new Date(Date.now());
    return new
      Date(
        date.getFullYear() - now.getFullYear(),
        date.getMonth() - now.getMonth(),
        date.getDate() - now.getDate(),
        date.getHours() - now.getHours(),
        date.getMinutes() - now.getMinutes()
      )
  }
}
