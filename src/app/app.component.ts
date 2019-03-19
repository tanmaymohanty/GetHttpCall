import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'httpGetService';
  posts: any;
  constructor(private http: HttpClient) {
    http.get('http://jsonplaceholder.typicode.com/users').subscribe(response => {
      this.posts = response;
     });
  }

  ngOnInit() {
  }
}
