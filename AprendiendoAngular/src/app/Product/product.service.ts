import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): IProduct[]{
    return [
      {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2019",
        "description": "15 gallon capacity rolling garden",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "assets/images/garden_cart.png"
      },

      {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TXB-0048",
        "releaseDate": "May 21, 2019",
        "description": "Curve claw stell hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "assets/images/hammer.png"
      },

      {
        "productId": 5,
        "productName": "Video Game Controller",
        "productCode": "GMG-0042",
        "releaseDate": "Octuber 15, 2018",
        "description": "Curve claw stell hammer",
        "price": 35.95,
        "starRating": 4.0,
        "imageUrl": "assets/images/controller.png"
      }

    ]
  }
}
