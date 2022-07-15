import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import LiftLog from '../models/liftlog.interface';

@Component({
  selector: 'app-set-logger',
  templateUrl: './set-logger.component.html',
  styleUrls: ['./set-logger.component.css']
})
export class SetLoggerComponent implements OnInit {

  compounds = ['Squat', 'Bench', 'Deadlift']

  model: LiftLog = {
    compound: null,
    sets: 0,
    reps: 0,
    weight: 0
  }

  loggedSet: LiftLog[] = [] //empty array that holds the type 'LiftLog'

  submit() {
    this.loggedSet.push(this.model) //Pushing the users input as a model to the loggedSet
    console.log(this.model)
    this.dataService.saveData(this.loggedSet)
    console.log('yo' + this.loggedSet)
  }


  constructor(private dataService: DataService) { //Use this in list component
    
  }

  ngOnInit(): void {

  }

}
