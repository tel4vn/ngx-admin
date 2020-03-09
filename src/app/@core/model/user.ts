import {Observable } from 'rxjs';

export interface User {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  phone_number: string;
}


export const LUsers: User[] = [
	{
		'first_name' : 'customer1',
		'last_name': 'tran',
		'username': 'tran customer1',
		'email': 'example1@gmail.com',
		'phone_number': '0762644950'
	},
	{
		'first_name' : 'customer2',
		'last_name': 'tran',
		'username': 'tran customer2',
		'email': 'example2@gmail.com',
		'phone_number': '0762644951'
	},
	{
		'first_name' : 'customer3',
		'last_name': 'tran',
		'username': 'tran customer3',
		'email': 'example3@gmail.com',
		'phone_number': '0762644952'
	}
];
