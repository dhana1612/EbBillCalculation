import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WaterbillService {

  constructor() { }

    waterBill(units :number){

    let bill = 0;

      bill = units*4.7;

      // if (units <= 100) bill = units * 2.51;
      // else if (units <= 200) bill = 100 * 2.51 + (units - 100) * 5.00;
      // else bill = 100 * 2.51 + 100 * 5.00 + (units - 200) * 6.50;
  
     return bill;
    }
    
  
}
