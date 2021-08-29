import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuelupPageRoutingModule } from './fuelup-routing.module';

import { FuelupPage } from './fuelup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuelupPageRoutingModule
  ],
  declarations: [FuelupPage]
})
export class FuelupPageModule {}
