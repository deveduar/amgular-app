import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { Product } from '../../domain/models/product';

@Injectable({
  providedIn: 'root'
})

export class InventoryService {
  // private apiUrl = 'https://fakestoreapi.com/products?limit=20';
  // private productDetailUrl = 'https://fakestoreapi.com/products'; 

  // constructor(private http: HttpClient) { }

  // getProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.apiUrl)
  // }

  // getProductById(id: number): Observable<Product> {
  //   const url = `${this.productDetailUrl}/${id}`;
  //   return this.http.get<Product>(url);
  // }

  private apiUrl = 'http://localhost:3000/api/products';
  private productsCache: Product[] | null = null;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    if (this.productsCache) {
      return of(this.productsCache);  // Devuelve los productos cacheados si ya se han cargado
    }
    return this.http.get<Product[]>(this.apiUrl).pipe(
      tap(products => this.productsCache = products)  // Almacena los productos en caché
    );
  }

  getProductById(id: number): Observable<Product> {
    if (this.productsCache) {
      const product = this.productsCache.find(p => p.id === id);
      return of(product as Product);  // Devuelve el producto desde el caché
    }
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Product>(url);
  }











  // private apiUrl = environment.printfulApiUrl;

  // constructor(private http: HttpClient) { }

  // getProducts(): Observable<Product[]> {
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${environment.printfulApiToken}`
  //   });
  //   return this.http.get<Product[]>(this.apiUrl, { headers });
  // }

  // getProductById(id: number): Observable<Product> {
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${environment.printfulApiToken}`
  //   });
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.get<Product>(url, { headers });
  // }
}
