import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../../services/product.service';
import { Product } from '../../product';
// import { Product } from '../../models/product.model';

@Component({
  selector: 'app-delete-product',
  standalone:false,
  templateUrl: './delete-product.component.html',
})
export class DeleteProductComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private productService: ProductService,
    public dialogRef: MatDialogRef<DeleteProductComponent>
  ) {}

  deleteProduct(): void {
    this.productService.deleteProduct(this.data.id!).subscribe(() => {
      this.dialogRef.close();
    });
  }
}