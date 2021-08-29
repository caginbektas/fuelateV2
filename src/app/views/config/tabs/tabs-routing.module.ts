import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'statistics',
        loadChildren: () => import('../../tabs/statistics/statistics.module').then(m => m.StatisticsPageModule)
      },
      {
        path: 'fuelup',
        loadChildren: () => import('../../tabs/fuelup/fuelup.module').then(m => m.FuelupPageModule)
      },
      {
        path: 'logs',
        loadChildren: () => import('../../tabs/logs/logs.module').then(m => m.LogsPageModule)
      },
      {
        path: '',
        redirectTo: '/statistics',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/statistics',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
