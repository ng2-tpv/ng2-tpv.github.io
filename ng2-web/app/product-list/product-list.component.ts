import { Component, Input, OnDestroy } from '@angular/core';
import { FilterService } from '../filter-service/filter.service';
import { Subscription } from 'rxjs/Subscription';

import { PRODUCTS } from './../product-service/product.service';
import { Product } from './../product';

@Component({
    moduleId: module.id,
    selector: 'pm-product-list',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnDestroy{
    
    @Input() filter: string; 
    subscription: Subscription;
    products: Product[] = PRODUCTS;
    imageWidth: number = 70;
    imageMargin: number = 5;
    showImage: boolean = false;

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    constructor(private filterService: FilterService) {
        this.subscription = filterService.filter$.subscribe(
            filter => {
                this.filter = filter;
            }
        );
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }
}