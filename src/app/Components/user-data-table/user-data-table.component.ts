import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/Services/API/api-service.service';

@Component({
  selector: 'app-user-data-table',
  templateUrl: './user-data-table.component.html',
  styleUrls: ['./user-data-table.component.css']
})
export class UserDataTableComponent implements OnInit {
shopList:any


constructor(private apiVar : ApiServiceService){

}
getTableList(){
  this.apiVar.TableApiData().subscribe((res:any)=>{
    this.shopList =  res['data'];
    console.log(this.shopList);
})
}



ngOnInit(): void {
    this.getTableList();
}


}
