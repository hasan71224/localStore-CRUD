import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { countyObj } from 'src/app/inertfaces/country';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss']
})
export class UpdateFormComponent implements OnInit {

  countries: countyObj;
  constructor(private route:ActivatedRoute, private router:Router) {
    // debugger;
    this.countries =  new countyObj();
    this.route.params.subscribe((res)=>{
      this.countries.id = res['id']
    })
  }

  ngOnInit(): void {
    const oldRecords = localStorage.getItem('countries');
    if(oldRecords !== null){
      const countries = JSON.parse(oldRecords);
      const currentCountry = countries.find((m:any) => m.id == this.countries.id);
      if(currentCountry !== undefined){
        this.countries.name = currentCountry.name;
        this.countries.area = currentCountry.area;
        this.countries.population = currentCountry.population;
      }
    }
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

  updateContry(){
    // debugger;
    const oldRecords = localStorage.getItem('countries');
    if(oldRecords !== null){
      const countries = JSON.parse(oldRecords);
      countries.splice(countries.findIndex((a:any)=>a.id == this.countries.id),1);
      countries.push(this.countries);
      localStorage.setItem('countries', JSON.stringify(countries))
    }
    this.router.navigateByUrl('/')
    // else{
    //   const countryArr = [];
    //   countryArr.push(this.countries);
    //   localStorage.setItem('countries', JSON.stringify(countryArr))
    // }
  }
}
