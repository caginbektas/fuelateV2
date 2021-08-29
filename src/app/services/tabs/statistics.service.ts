import { Injectable } from '@angular/core';
import { FuelLog } from 'src/app/entities/FuelLog';
import { Statistics } from 'src/app/entities/Statistics';
import { FirebaseService } from '../firebase.service';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private firebaseService: FirebaseService) {}

  getStatistics(): Promise<Statistics>{
    return new Promise(resolve => {
        this.firebaseService.getFuelLogs().then((fuelLogs: FuelLog[]) => {
          let statistics: Statistics = new Statistics(fuelLogs)
          resolve(statistics)
        })
    })
  }
}
