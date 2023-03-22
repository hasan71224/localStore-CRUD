import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { countyObj } from 'src/app/inertfaces/country';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  // countries!: countyObj[];
  countries: countyObj;
  constructor(private router:Router) {
    this.countries =  new countyObj();
  }

  ngOnInit(): void {
  }

  getNewCountryId(){
    // debugger;
    const oldRecords = localStorage.getItem('countries');
    if(oldRecords !== null){
      const countries = JSON.parse(oldRecords);
      return countries.length + 1;
    }else{
      return 1;
    }
  }

  saveUser(){
    // debugger;
    const latestId = this.getNewCountryId();
    this.countries.id = latestId;
    const oldRecords = localStorage.getItem('countries');
    if(oldRecords !== null){
      const countries = JSON.parse(oldRecords);
      countries.push(this.countries)
      localStorage.setItem('countries', JSON.stringify(countries))
    }else{
      const countryArr = [];
      countryArr.push(this.countries);
      localStorage.setItem('countries', JSON.stringify(countryArr))
    }
    this.router.navigateByUrl('/')
  }

}
