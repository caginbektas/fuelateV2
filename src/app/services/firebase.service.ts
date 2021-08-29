import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FuelLog } from '../entities/FuelLog';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private afs: AngularFirestore) {  }

  private getFireBaseFuelLogs(){
    return this.afs.collection('FuelLog').valueChanges().pipe() as Observable<FuelLog[]>
  }

  getFuelLogs(){
    return new Promise(resolve=> {
      this.getFireBaseFuelLogs().subscribe(records => {
        if (records && records.length > 0){ //TODO: Add else case.
          resolve(records.sort((a, b) => (a.date > b.date) ? 1 : -1))
        }
      })
    })
  }
}
