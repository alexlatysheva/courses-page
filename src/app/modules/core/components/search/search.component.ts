import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  public searchInput = '';

  public onSearch(): void {
    console.log(this.searchInput);
  }

  ngOnInit() {
    console.log('SearchComponent ngOnInit');
  }

  ngOnChanges() {
    console.log('SearchComponent ngOnChanges');
  }

  ngDoCheck() {
    console.log('SearchComponent ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('SearchComponent ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('SearchComponent ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('SearchComponent ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('SearchComponent ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('SearchComponent ngOnDestroy');
  }
}
