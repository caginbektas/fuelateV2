import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Statistics } from 'src/app/entities/Statistics';
import { StatisticsService } from 'src/app/services/tabs/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage {
  statistics: Statistics = new Statistics();
  constructor(
    private statisticsService: StatisticsService,
    public loadingController: LoadingController
  ) {}

  async ionViewDidEnter(){
    const loading = await this.loadingController.create();
    await loading.present();
    this.statistics = await this.statisticsService.getStatistics();
    loading.dismiss();
  }
}
