import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <ul>
      <li *ngFor="let product of products">{{product.name}}</li>
    </ul>
  `,
})
export class AppComponent {
  title = 'frontend';
  products: any[] | undefined ;
  // products: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<string>('http://localhost:8080/api/products').subscribe(products => {
      console.log(products);
    });
  }
}
