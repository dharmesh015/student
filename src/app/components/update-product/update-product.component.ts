import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../../services/product.service';
import { Product } from '../../product';
// import { Product } from '../../models/product.model';

@Component({
  selector: ' app-update-product',
  standalone:false,
  templateUrl: './update-product.component.html',
})
export class UpdateProductComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private productService: ProductService,
    public dialogRef: MatDialogRef<UpdateProductComponent>
  ) {}

  updateProduct(): void {
    this.productService.updateProduct(this.data.id!, this.data).subscribe(() => {
      this.dialogRef.close();
    });
  }
}