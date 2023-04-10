import {Component, OnInit} from '@angular/core';
import {ApiService} from "../service/ApiService";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
//   message: string | undefined;
//
//   constructor(private apiService: ApiService) { }
//
//   ngOnInit() {
//     this.apiService.getHello().subscribe(data => {
//       this.message = data;
//     });
//   }
// }
  public products: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getProducts().subscribe(
      (response: any) => {
        this.products = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
