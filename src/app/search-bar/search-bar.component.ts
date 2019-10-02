import {Component} from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

/**
 * @title Basic select
 */
@Component({
  selector: 'select-overview-example',
  templateUrl: 'select-overview-example.html',
  styleUrls: ['select-overview-example.css'],
})
export class SelectOverviewExample {
  foods: Food[] = [
    {value: 'people-0', viewValue: 'People'},
    {value: 'ships-1', viewValue: 'Ships'},
    {value: 'films-2', viewValue: 'Films'}
  ];
}