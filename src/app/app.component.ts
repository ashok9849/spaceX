import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'SpaceX Lanch';
  searchText;
  // users: any[];
  // filteredUsers: any[];
  // filterBy;

  constructor(private http: HttpClient) { }
  url="https://api.spacexdata.com/v3/launches?limit=100&launch_success=true";
  httpData:any;
  ngOnInit() {
    this.http.get<Kafein[]>(this.url).subscribe(data => {
      this.httpData=data;
      console.log(this.httpData)
      // this.filteredUsers = [...this.httpData];
    })
  }
  // filter() {
  //   this.filteredUsers = [...this.httpData.filter(user => user.name.includes(this.filterBy))];
  // }
}

interface Kafein {
  name:string;
  address:string;
}