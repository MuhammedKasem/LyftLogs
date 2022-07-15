import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import LiftLog from '../models/liftlog.interface';

@Component({
  selector: 'app-excercise-view',
  templateUrl: './excercise-view.component.html',
  styleUrls: ['./excercise-view.component.css']
})
export class ExcerciseViewComponent implements OnInit {
  dataSource: LiftLog[] = [];
  displayedColumns = ['compounds', 'sets', 'reps', 'weight']

  constructor(public dataService: DataService) {
    if(this.dataService.getData() != null) {
      this.dataSource = this.dataService.getData();

    }
  }
  

  ngOnInit(): void {
  }


}
