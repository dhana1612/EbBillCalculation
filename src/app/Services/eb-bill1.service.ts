import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EbBill1Service {

  constructor() { }

    ebBill(units :number){

    let bill = 0;

     if (units <= 450) 
    {
        if (units <= 50)
            bill = 0;
        else if (units <= 150)
            bill = (units - 50) * 2.35;
        else if (units <= 350)
            bill = 100 * 2.35 + (units - 150) * 4.70;
        else 
            bill = 100 * 2.35 + 200 * 4.70 + (units - 350) * 6.30;
    }
    else 
    {
        if (units <= 50)
            bill = 0;
        else if (units <= 350)
            bill = (units - 50) * 4.70;
        else if (units <= 450)
            bill = 300 * 4.70 + (units - 350) * 6.30;
        else if (units <= 550)
            bill = 300 * 4.70 + 100 * 6.30 + (units - 450) * 8.40;
        else if (units <= 750)
            bill = 300 * 4.70 + 100 * 6.30 + 100 * 8.40 + (units - 550) * 9.45;
        else if (units <= 950)
            bill = 300 * 4.70 + 100 * 6.30 + 100 * 8.40 + 200 * 9.45 + (units - 750) * 10.50;
        else 
            bill = 300 * 4.70 + 100 * 6.30 + 100 * 8.40 + 200 * 9.45 + 200 * 10.50 + (units - 950) * 11.55;
    }

     return bill;
    
  }
}
