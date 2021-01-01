import { Component, OnInit } from '@angular/core';
import {SharedService} from './../shared.service'

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  name:any[]= []
  cities4:any = [];
  selectedCityId:any
  selectedLevel:any
  constructor(private SharedService : SharedService) { }

  ngOnInit(): void {
    this.list_employee()

  }
  list_employee(){
    this.SharedService.get_list().subscribe(res=>{
      this.name = res['data']
      this.name.sort((a,b) => 0 - (a > b ? -1 : 1));
console.log(this.name)
      
    })
  }
  selected(event:any){
    this.SharedService.get_list().subscribe(res=>{
      debugger
      this.name.sort();
      this.name = res['data']
      this.selectedLevel = event.target.value
    })      
  }

}
