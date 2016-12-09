import { Component } from '@angular/core';
import { FilterService } from './filter-service/filter.service';
@Component({
    moduleId: module.id,
    selector: 'pm-app',
    templateUrl: './app.component.html',
    providers: [FilterService]
})
export class AppComponent { 
    public filter: string = '';  
}
