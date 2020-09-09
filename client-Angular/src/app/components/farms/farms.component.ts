import { Component, OnInit } from '@angular/core';
import { FarmService } from 'src/app/services/farm.service';
import { Farm } from 'src/app/common/farm';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.css']
})
export class FarmsComponent implements OnInit {


  constructor(private router: Router,private farmService : FarmService) { }
  farms:Farm[];

  ngOnInit(): void {
    this.listFarms();
  }

  listFarms(){
    this.farmService.getFarms().subscribe((data)=>{
      this.farms= data;
    })
  }

  farmEdit(id:string){
    localStorage.removeItem("id");  
   localStorage.setItem("id",id.toString()); 
    this.router.navigate(['/add-farm'],{queryParams:{Id:id}});
  }

  getPonds(id:string){
    localStorage.removeItem("farmId");  
   localStorage.setItem("farmId",id.toString()); 
    this.router.navigate(['/view-ponds'],{queryParams:{Id:id}});
  }

  farmDelete(id:string){
    if (confirm("Are you sure to delete this farm?")) {    
      this.farmService.deleteFarm(id).subscribe(res=>{this.listFarms()});     
    }  
  }

  getFarmDetail(id:string){
    localStorage.removeItem("farmId");  
   localStorage.setItem("farmId",id.toString()); 
    this.router.navigate(['/view-farm'],{queryParams:{Id:id}});
  }

  
}
