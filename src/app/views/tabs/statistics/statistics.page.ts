import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { FuelLog } from 'src/app/entities/FuelLog';
import { Statistics } from 'src/app/entities/Statistics';
import { StatisticsService } from 'src/app/services/tabs/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage {

  constructor(
    private statisticsService: StatisticsService,
    public loadingController: LoadingController
  ) {}

  fuelLogs: FuelLog[] = [];

  async ionViewDidEnter(){
    const loading = await this.loadingController.create();
    await loading.present();
    let statistics = await this.statisticsService.getStatistics();
    console.log(statistics);
    loading.dismiss();
  }
}
