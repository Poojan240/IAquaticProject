import { Component, OnInit } from '@angular/core';
import { Farm } from 'src/app/common/farm';
import { FarmService } from 'src/app/services/farm.service';

@Component({
  selector: 'app-add-farm',
  templateUrl: './add-farm.component.html',
  styleUrls: ['./add-farm.component.css']
})
export class AddFarmComponent implements OnInit {


  constructor(private farmService: FarmService) { }
  farm = new Farm();
  message:string ="";
  ngOnInit(): void {
    let Id = localStorage.getItem("id");
    if (Id != null) {
      this.FarmEdit(Id);
    }
  }


  CreateFarm(farm: Farm) {
    this.farmService.createFarm(farm).subscribe(res => {
      this.message="New farm created successfully.";
      console.log("Successfully inserted!");
    });
  }

  UpdateFarm(farm: Farm) {
    this.farmService.updateFarm(farm._id, farm).subscribe(res => {
      this.message="Farm updated successfully.";
      console.log("Successfully updated!");
    });
  }

  onFormSubmit() {
    debugger;
    if (typeof this.farm._id !== 'undefined')
      this.UpdateFarm(this.farm);
    else
      this.CreateFarm(this.farm);

    localStorage.removeItem("id");
  }

  FarmEdit(id: string) {
    this.farmService.getFarmById(id).subscribe(data => {
      this.farm = data;
    });
  }
}
