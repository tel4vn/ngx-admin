import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TelephonyComponent } from './telephony.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [{
  path: '',
  component: TelephonyComponent,
  children: [
    {
      path: 'users',
      component: UserComponent,
    },
  ],
},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
export class TelephonyRoutingModule { }
