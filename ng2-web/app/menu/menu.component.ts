import { Component, Input, OnDestroy } from '@angular/core';
import { FilterService } from '../filter-service/filter.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
    moduleId: module.id,
    selector: 'pm-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent implements OnDestroy {
    
    subscription: Subscription;
    @Input() filter: string;

    constructor(private filterService: FilterService) {
        this.subscription = filterService.filter$.subscribe(
            filter => {
                this.filter = filter;
            }
        );
    }

    filterChange(event: any) {
        this.filterService.setFilter(this.filter);
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }
}