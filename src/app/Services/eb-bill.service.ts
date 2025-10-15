import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EbBillService {

  constructor() { }

 

  ebBill(units :number){

    let bill = 0;

    if (units <= 500) {
      if (units <= 100) bill = 0;
      else if (units <= 200) bill = (units - 100) * 2.35;
      else if (units <= 400) bill = 100 * 2.35 + (units - 200) * 4.70;
      else bill = 100 * 2.35 + 200 * 4.70 + (units - 400) * 6.30;
    } else {
      if (units <= 100) bill = 0;
      else if (units <= 400) bill = (units - 100) * 4.70;
      else if (units <= 500) bill = 300 * 4.70 + (units - 400) * 6.30;
      else if (units <= 600) bill = 300 * 4.70 + 100 * 6.30 + (units - 500) * 8.40;
      else if (units <= 800) bill = 300 * 4.70 + 100 * 6.30 + 100 * 8.40 + (units - 600) * 9.45;
      else if (units <= 1000) bill = 300 * 4.70 + 100 * 6.30 + 100 * 8.40 + 200 * 9.45 + (units - 800) * 10.50;
      else bill = 300 * 4.70 + 100 * 6.30 + 100 * 8.40 + 200 * 9.45 + 200 * 10.50 + (units - 1000) * 11.55;
    }

     return bill;
    
  }
}
