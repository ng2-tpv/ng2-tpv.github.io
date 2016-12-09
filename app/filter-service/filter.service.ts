import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class FilterService {

  // Observable string sources
  private filterSource = new Subject<string>();

  // Observable string streams
  filter$ = this.filterSource.asObservable();
  
  // Service message commands
  setFilter(filter: string) {
    this.filterSource.next(filter);
  }
}