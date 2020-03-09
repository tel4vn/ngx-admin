import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';

import { TelephonyRoutingModule } from './telephony-routing.module';
import { TelephonyComponent } from './telephony.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
  	TelephonyComponent,
  	UserComponent
  ],
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    ThemeModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbTreeGridModule,
    TelephonyRoutingModule
  ]
})
export class TelephonyModule { }
