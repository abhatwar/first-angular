import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



let baseUrl = 'https://drishteepayapi.drishtee.in/api/';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }
  StateApiData(RHQ_ID: any) {
    var reqBody = {
      "sqlReq": `exec  MiriMarket..usp_state_list ${RHQ_ID}`
    }
    console.log(reqBody);
    return this.http.post(baseUrl + 'generalApi', reqBody);

  }


  DistrictApiData(DHQ_ID: any) {
    var reqBody = {
      "sqlReq": `exec MiriMarket..usp_district_list ${DHQ_ID}`
    }
    console.log(reqBody);
    return this.http.post(baseUrl + 'generalApi', reqBody);
  }


  VatikaApiData(district_id: any) {
    var reqBody = {
      "sqlReq": `exec MiriMarket..usp_dashboard_vatika_by_district ${district_id}`
    }
    console.log(reqBody);
    return this.http.post(baseUrl + 'generalApi', reqBody);
  }

  TableApiData(){
    var reqBody={
      "sqlReq":"EXEC drishtee_vatika..usp_selet_shop_list"
    }
    console.log(reqBody);
    return this.http.post(baseUrl + 'generalApi', reqBody);

  }


  SubmitApiData(
    vatika: number,
    shopname: any,
    shopownername: any,
    mobile: number,
    address: any,
    StartDate: any) {
    var reqBody = {
      "sqlReq": `EXEC drishtee_vatika..usp_InsertShop ${vatika},'${shopname}','${shopownername}','${mobile}','${address}','${StartDate}',454`
    }
    console.log(reqBody);
    return this.http.post(baseUrl + 'generalApi', reqBody);
  }
}
