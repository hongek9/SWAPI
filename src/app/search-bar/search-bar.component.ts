import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

import { Result } from '../results';

export interface Choice {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchResults: Result[];
  // choice: string;

  choices: Choice[] = [
    {value: 'people', viewValue: 'People'},
    {value: 'starships', viewValue: 'Ships'},
    {value: 'films', viewValue: 'Films'}
  ];



  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  search(type: string,info: string): void {
    // console.log(this.choice);
    this.searchService.getResults(type,info).subscribe(data => {
      console.log(data);
      this.searchResults = data.results;
      console.log(this.searchResults);
    });
  }

  consoleLog(): void{
    console.log('test');
  }
  // getResults(typeSearch: string, input: string): void {
  //   this.searchService.getResults(typeSearch, input).subscribe(results => this.results = results);
  // }

}
