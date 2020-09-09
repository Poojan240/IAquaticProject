import { Component, OnInit } from '@angular/core';
import { Pond } from 'src/app/common/pond';
import { Router } from '@angular/router';
import { PondService } from 'src/app/services/pond.service';
import { FarmService } from 'src/app/services/farm.service';
import { Farm } from 'src/app/common/farm';

@Component({
  selector: 'app-view-farm',
  templateUrl: './view-farm.component.html',
  styleUrls: ['./view-farm.component.css']
})
export class ViewFarmComponent implements OnInit {


  ponds: Pond[];
  farm: Farm;
  total: number;
  constructor(private router: Router, private pondService: PondService, private farmService: FarmService) { }

  ngOnInit(): void {
    let farmId = localStorage.getItem("farmId");
    if (farmId != null) {
      this.getFarmDetail(farmId);
      this.getPondsByFarmId(farmId);
    }
  }

  listPonds() {
    this.pondService.getPonds().subscribe((data) => {
      this.ponds = data;
    })
  }

  getFarmDetail(id) {
    this.farmService.getFarmById(id).subscribe(data => {
      this.farm = data
    })
  }

  getPondsByFarmId(id) {
    this.pondService.getPondsById(id).subscribe((data) => {
      this.ponds = data;
      let arr = this.ponds.map(x => { return parseInt(x.size) });
      this.total = arr.reduce((a, b) => a + b, 0)
    })
  }

  pondEdit(id: string) {
    localStorage.removeItem("pondId");
    localStorage.setItem("pondId", id.toString());
    this.router.navigate(['/add-pond'], { queryParams: { Id: id } });
  }

  pondDelete(id:string){
    if (confirm("Are you sure to delete this pond?")) {  
      let farmId = localStorage.getItem("farmId");  
      this.pondService.deletePond(id).subscribe(res=>{this.getPondsByFarmId(farmId)});     
    }  
  }

}
