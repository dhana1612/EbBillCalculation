import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EbBillService } from '../Services/eb-bill.service';
import { WaterbillService } from '../Services/waterbill.service';
import { EbBill1Service } from '../Services/eb-bill1.service';

@Component({
  selector: 'app-main',
  imports: [FormsModule, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements AfterViewInit{

  constructor(private ebservice : EbBillService, private waterservice : WaterbillService, private ebservice1 :EbBill1Service){

  }

  @ViewChild('Modal1Ref') modal1!: ElementRef;
  @ViewChild('Modal2Ref') modal2!: ElementRef;
  @ViewChild('Modal3Ref') modal3!: ElementRef;

   ngAfterViewInit() {
    [this.modal1, this.modal2, this.modal3].forEach((modalRef) => {
      modalRef.nativeElement.addEventListener('hidden.bs.modal', () => {
        this.resetForm();
      });
    });
  }

  resetForm() {
    this.ebUnit = 0;
    this.upebUnit = 0;
    this.waterUnit = 0;
    this.ebBill = 0;
    this.waterBill = 0;
    this.total = 0;
  }

  waterUnit : number = 0;
  ebUnit : number = 0;
  upebUnit : number = 0;

  ebBill :number =0 ;
  waterBill :number =0 ;
  total : number =0;

  calculateBill(value : number){

    if(value == 0)
    {
      this.ebBill = Math.round(this.ebservice.ebBill(this.ebUnit));
      this.waterBill = Math.round(this.waterservice.waterBill(this.waterUnit));
      this.ebBill = this.ebBill - this.waterBill;

      this.waterBill = Math.round(this.waterBill/2);

      this.total = this.ebBill+ this.waterBill;
    }
    else if(value == 1){
      console.log("working")
      this.ebBill = Math.round(this.ebservice1.ebBill(this.ebUnit));
      console.log(this.ebBill)
      this.waterBill = Math.round(this.waterservice.waterBill(this.waterUnit));
      this.waterBill = Math.round(this.waterBill/2);
      this.total = this.ebBill+ this.waterBill;
    }
    else{
      this.ebUnit = this.ebUnit - this.upebUnit;
      this.ebBill = Math.round(this.ebservice1.ebBill(this.ebUnit));
      this.waterBill
      this.total = this.ebBill+ this.waterBill;

    }



  }
}
