import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { UsersService } from '../../../@core/coreapi/user.service';

@Component({
  selector: 'ngx-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `]
})
export class UserComponent implements OnInit {

  source: LocalDataSource = new LocalDataSource();

  settings = {
    // hideSubHeader: true,
    actions: {
      // columnTitle: 'Actions',
      add: false,
      edit: false,
      delete: false,
      custom: [
      { name: 'edit', title: '<i class="nb-edit"></i>' },
      { name: 'delete', title: '<i class="nb-trash"></i>' },
    ],
      position: 'left',
      class: 'action-column',
    },
    columns: {
      first_name: {
        title: 'First Name',
        type: 'string',
      },
      last_name: {
        title: 'Last Name',
        type: 'string',
      },
      username: {
        title: 'Username',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      phone_number: {
        title: 'Phone number',
        type: 'string',
      }
    },
  };

  constructor(private userService: UsersService) { }

  ngOnInit() {
  	this.source.load(this.userService.get())
  }

}
