import { Injectable } from '@angular/core';
import LiftLog from './models/liftlog.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userData: LiftLog[] = null;
  constructor() {
    if(!this.userData) {
      this.getData();
    }
  }

  getData<LiftLog>(): LiftLog[] | null {
    let rawData = localStorage.getItem('logs') // gets string from localstorage
    let data: LiftLog[]; // declare variable to hold parsed data
    try {
      data = JSON.parse(rawData); // transform the localstorage string to JS object
    } catch (error) {
      console.log("something fucked up...")
      return null
    }
    this.userData = data;
    console.log(this.userData)
    return data;
    // Print data to the console for checking
  }

  saveData(userData: LiftLog[]) {
    localStorage.setItem('logs', JSON.stringify(userData));
  }

  removeData(logs)
}
