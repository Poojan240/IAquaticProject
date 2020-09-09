import { Component, OnInit } from '@angular/core';
import { Pond } from 'src/app/common/pond';
import { PondService } from 'src/app/services/pond.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pond',
  templateUrl: './add-pond.component.html'
})
export class AddPondComponent implements OnInit {


  constructor(private router:Router, private pondService: PondService) { }
  pond = new Pond();
  message: string = "";
  ngOnInit(): void {
    let id = localStorage.getItem("pondId");
    if (id != null) {
      this.pondEdit(id);
    }
  }


  CreatePond(pond: Pond) {
    this.pondService.createPond(pond).subscribe(res => {
      this.message = "Pond created successfully."
    });
  }

  UpdatePond(pond: Pond) {
    this.pondService.updatePond(pond._id, pond).subscribe(res => {
      this.message = "Pond updated successfully."
    });
  }

  onFormSubmit() {
    let farmId = localStorage.getItem("farmId");
    if (typeof this.pond._id !== 'undefined')
      this.UpdatePond(this.pond);
    else {
      this.pond.farm = farmId;
      this.CreatePond(this.pond);
    }
    localStorage.removeItem("pondId");
    this.router.navigate(['/view-farm'],{queryParams:{id:farmId}});
  }

  pondEdit(id: string) {
    this.pondService.getPondById(id).subscribe(data => {
      this.pond = data;
    });
  }


}
