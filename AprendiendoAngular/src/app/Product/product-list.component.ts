import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
   // tslint:disable-next-line: component-selector
   selector: 'pm-products',
   templateUrl: './product-list-component.html',
   providers: [ProductService],
   styleUrls: ['./product-list-component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage: string;

  // tslint:disable-next-line: variable-name
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
set listFilter(value: string) {
  this._listFilter = value;
  this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
}
  filteredProducts: IProduct[];
  products: IProduct[] = [
    {
    productId: 1,
    productName: 'Leaf Rake',
    productCode: 'GDN-0011',
    releaseDate: 'March 19, 2016',
    description: 'Leaf rake with 48-inch wooden handle.',
    price: 19.95,
    starRating: 3.2,
    imageUrl: 'assets/images/LeafRake.png'
},
{
    productId: 2,
    productName: 'Garden Cart',
    productCode: 'GDN-0023',
    releaseDate: 'March 18, 2016',
    description: '15 gallon capacity rolling garden cart',
    price: 32.99,
    starRating: 4.2,
    imageUrl: 'assets/images/garden_cart.png'
},
{
    productId: 5,
    productName: 'Hammer',
    productCode: 'TBX-0048',
    releaseDate: 'May 21, 2016',
    description: 'Curved claw steel hammer',
    price: 8.9,
    starRating: 4.8,
    imageUrl: 'assets/images/hammer.png'
},
{
    productId: 8,
    productName: 'Saw',
    productCode: 'TBX-0022',
    releaseDate: 'May 15, 2016',
    description: '15-inch steel blade hand saw',
    price: 11.55,
    starRating: 3.7,
    imageUrl: 'assets/images/Saw.png'
},
{
    productId: 10,
    productName: 'Video Game Controller',
    productCode: 'GMG-0042',
    releaseDate: 'October 15, 2015',
    description: 'Standard two-button video game controller',
    price: 35.95,
    starRating: 4.6,
    imageUrl: 'assets/images/controller.png'
}];

constructor(private productService: ProductService) {

}

onRatingClicked(message: string): void {
  this.pageTitle = 'Product List: ' + message;
}

performFilter(filterBy: string): IProduct[] {
  filterBy = filterBy.toLocaleLowerCase();
  return this.products.filter((product: IProduct) =>
  product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
}


toggleImage(): void {
  this.showImage = !this.showImage;
}

ngOnInit(): void {
  this.productService.getProducts().subscribe({
    next: products => {
    this.products = products,
    this.filteredProducts =  this.products;
  },
    error: err => this.errorMessage = err
  });
 }
}
