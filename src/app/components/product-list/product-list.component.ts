import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../../services/product.service';
import { AddProductComponent } from '../add-product/add-product.component';
import { UpdateProductComponent } from '../update-product/update-product.component';
import { DeleteProductComponent } from '../delete-product/delete-product.component';
import { Product } from '../../product';
// import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone:false,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddProductComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.loadProducts();
    });
  }

  openUpdateDialog(product: Product): void {
    const dialogRef = this.dialog.open(UpdateProductComponent, {
      data: product,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.loadProducts();
    });
  }

  openDeleteDialog(product: Product): void {
    const dialogRef = this.dialog.open(DeleteProductComponent, {
      data: product,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.loadProducts();
    });
  }
}