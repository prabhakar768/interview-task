import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params} from '@angular/router'
import {SharedService} from './../shared.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id:any
  news:[] = []
  image
  constructor(private route: ActivatedRoute,private SharedService : SharedService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
  });
  this.get_user();
  }
  get_user(){

    this.SharedService.get_user(this.id).subscribe(res=>{
      this.news=res['data'][this.id - 1]
      this.image = this.news['avatar']
      console.log(this.news)
    })
  }
}
