import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TeslaBatteryComponent } from './containers/tesla-battery.component';
import { TeslaCarComponent } from './components/tesla-car/tesla-car.component';
import { TeslaStatsComponent } from './components/tesla-stats/tesla-stats.component';

import { BatteryService } from './tesla-battery.service';

@NgModule({
  declarations: [
    TeslaBatteryComponent,
    TeslaCarComponent,
    TeslaStatsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    BatteryService
  ],
  exports: [
    TeslaBatteryComponent
  ]
})
export class TeslaBatteryModule {}
