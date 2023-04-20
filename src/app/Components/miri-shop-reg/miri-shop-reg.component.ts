import { Component, OnInit ,ViewChild, ElementRef } from '@angular/core';
import { ApiServiceService } from 'src/app/Services/API/api-service.service';

@Component({
  selector: 'app-miri-shop-reg',
  templateUrl: './miri-shop-reg.component.html',
  styleUrls: ['./miri-shop-reg.component.css']
})


export class MiriShopRegComponent implements OnInit {
  @ViewChild('shopname')shopnameinput!: ElementRef;
  @ViewChild('shopownername')shopownernameinput!: ElementRef;
  @ViewChild('address')addressinput!: ElementRef;
  @ViewChild('mobile')mobileinput!: ElementRef;
  @ViewChild('state')stateinput!: ElementRef;
  @ViewChild('district')districtinput!: ElementRef;
  @ViewChild('vatika')vatikainput!: ElementRef;
  @ViewChild('StartDate')startdateinput!: ElementRef;


  shopnameSelectedValue: any;
  shopownernameSelectedValue: any;
  mobileSelectedValue: any;
  stateSelectedValueId: any;
  districtSelectedValueId: any;
  vatikaSelectedValueId: any;
  shopstartdateSelectedValue: any;
  stateList: any;
  districtList: any;
  vatikaList: any;
  response: any;
  addressSelectedValue: any;


  constructor(private apiVar: ApiServiceService) {

  }
  ngOnInit() {
    this.getstateList();

  }

  shopnameValue(shopnameId: any) {
    this.shopnameSelectedValue = shopnameId;
    console.log(this.shopnameSelectedValue);

  }

  shopownernameValue(shopownernameId: any) {
    this.shopownernameSelectedValue = shopownernameId;
    console.log(this.shopownernameSelectedValue);

  }

  addressValue(addressId: any) {
    this.addressSelectedValue = addressId;
    console.log(this.addressSelectedValue);
  }

  mobilenumberValue(mobileId: any) {
    this.mobileSelectedValue = mobileId;
    console.log(this.mobileSelectedValue);
  }
  //stateList
  getstateList() {
    this.apiVar.StateApiData(0).subscribe((res: any) => {
      this.stateList = res['data'];
      console.log(this.stateList);

    })
  }
  //stateValue
  selectedstateValue(stateId: any) {
    this.stateSelectedValueId = stateId;
    console.log(this.stateSelectedValueId);
    this.getDistrictList(this.districtList);
  }

  //districtList
  getDistrictList(_districtList: any) {
    this.apiVar.DistrictApiData(this.stateSelectedValueId).subscribe((res: any) => {
      this.districtList = res['data'];
      console.log(this.districtList);
    })
  }
  //districtValue
  selectedDistrictValue(districtId: any) {
    this.districtSelectedValueId = districtId;
    console.log(this.districtSelectedValueId);
    this.getVatikaList(this.vatikaList);

  }
  //vatikaList     
  getVatikaList(_vatikaList: any) {
    this.apiVar.VatikaApiData(this.districtSelectedValueId).subscribe((res: any) => {
      //this.response = res;
      this.vatikaList = res['data'];
      console.log(this.vatikaList);

    })
  }

  //vatika value
  selectedvatikaValue(vatikaId: any) {
    this.vatikaSelectedValueId = vatikaId;
    console.log(this.vatikaSelectedValueId);

  }

  shopstartdateValue(startdateId: any) {
    this.shopstartdateSelectedValue = startdateId;
    console.log(this.shopstartdateSelectedValue);
  }

  submit(shopname: any,
    shopownername: any,
    address: any,
    mobile: any,
    vatika: any,
    StartDate: any) {


    if (this.shopnameSelectedValue == null || this.shopnameSelectedValue == " ") {
      alert("please fill the Shop Name");
      this.shopnameinput.nativeElement.focus();
      return;
    }

    if (this.shopownernameSelectedValue == null ) {
      alert("please fill the Shop Owner Name");
      this.shopownernameinput.nativeElement.focus();
      return;
    }

    if (this.addressSelectedValue == null ) {
      alert("please fill the Address");
      this.addressinput.nativeElement.focus();
      return;
    }

    // if (this.mobileSelectedValue == null) {
    //   alert("please fill the Mobile Name");
    //   this.mobileinput.nativeElement.focus();
    //   return;
    // }
    if (this.mobileSelectedValue.length != 10 ) {
      alert("please enter 10 digits valid number");
      this.mobileinput.nativeElement.focus()
      return;
    }


    if (this.stateSelectedValueId == null && this.stateSelectedValueId != 'India') {
      alert("please select the state");
      this.stateinput.nativeElement.focus()
      return;
    }


    if (this.districtSelectedValueId == null && this.districtSelectedValueId != 'All Clusters') {
      alert("please fill the District");
      this.districtinput.nativeElement.focus();
      return;
    }

    if (this.vatikaSelectedValueId == null && this.vatikaSelectedValueId != '--vatika--') {
      alert("please fill the Vatika");
      this.vatikainput.nativeElement.focus();
      return;
    }

    if (StartDate.length == 0) {
      alert("please fill the Start Date");
      this.startdateinput.nativeElement.focus();
      return;
    }

    else {
      this.apiVar.SubmitApiData(this.vatikaSelectedValueId, this.shopnameSelectedValue, this.shopownernameSelectedValue, this.mobileSelectedValue, this.addressSelectedValue, this.shopstartdateSelectedValue).subscribe((res: any) => {

        alert(JSON.stringify(res['data']));

      })
      // console.log(shopname + " , " + shopownername + " , " + mobile + " , " + state + " , " + district + " , " + vatika + " , " + StartDate);

    }
  }

  // ngOnInit(){
  //   this.getstateList();
  // }
}

