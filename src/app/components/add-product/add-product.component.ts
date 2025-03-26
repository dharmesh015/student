import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../../services/product.service';
import { Product } from '../../product';
// import { Product } from '../../models/product.model';

@Component({
  selector: 'app-add-product',
  standalone:false,
  templateUrl: './add-product.component.html',
})
export class AddProductComponent {
  product: Product = { name: '', price: 0, description: '' };

  constructor(private productService: ProductService, public dialogRef: MatDialogRef<AddProductComponent>) {}

  addProduct(): void {
    this.productService.createProduct(this.product).subscribe(() => {
      this.dialogRef.close();
    });
  }
}