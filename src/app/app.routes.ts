import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InventoryListComponent } from './pages/inventory-list/inventory-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

import { InventoryTableComponent } from './pages/inventory-table/inventory-table.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'inventory',
        component: InventoryListComponent
    },
    {
        path: 'inventory-table',
        component: InventoryTableComponent
    },
    {
        path: 'product/:id',
        component: ProductDetailComponent
    }
];
