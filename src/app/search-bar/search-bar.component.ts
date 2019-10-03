import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';


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
  searchResults: any;

  choices: Choice[] = [
    {value: 'people', viewValue: 'People'},
    {value: 'starships', viewValue: 'Ships'},
    {value: 'films', viewValue: 'Films'}
  ];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  search(type: string, info: string): void {
    this.searchService.getResults(type, info).subscribe(data => {
      console.log(data);
      this.searchResults = data;
      console.log(this.searchResults.results);
    });
  }
}
