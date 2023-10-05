import { Component } from '@angular/core';
import { APIService } from '../../api.service';

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.scss']
})
export class AccomodationComponent {

  constructor(private apiSvc: APIService){}

  accomodationList!: any;

  ngOnInit():void{
    this.getAccomodationByKeyword('outram');
  }

  private getAccomodationByKeyword(searchInput:string){
    this.apiSvc.getAccoms(searchInput).subscribe(
      (v)=>{
        console.log(v);
        this.accomodationList=v;
      }
    );
  }




}
