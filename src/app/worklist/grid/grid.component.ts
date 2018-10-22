import { Component, OnInit, ChangeDetectionStrategy,  ChangeDetectorRef } from '@angular/core';
import {ColumnSetting, CASES_RESPONSE, WORKLISTFIELDS} from '../../models/casesMock';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { timer } from 'rxjs/observable/timer';
//import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-grid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  public gridView: GridDataResult;
  public pageSize = 50;
  public skip = 0;
  private data: Object[];

  private items: any[] = CASES_RESPONSE.cases;
  public columns: ColumnSetting[] = WORKLISTFIELDS;

  private timerSubscription;

  private sub: Subscription;

  constructor(private cd: ChangeDetectorRef) {
      //this.loadItems();
  }

  ngOnInit() {
    // this.timerSubscription = timer(1000, 1000)
    //     .subscribe(x=> {
    //         console.log(x);
    //         this.updateRow();
    //         //takeUntil(this.destroy$);
    //     });
        const source = timer(2000, 1000);
        this.sub = source.subscribe(x=> {
            this.updateRow();
            //this.data[1] = { ...this.data[1], firstName: x };
            this.loadItems();
            this.cd.markForCheck();
        });
  }

  ngOnDestroy(){
      this.timerSubscription.unsubscribe();
  }

  updateRow(){
    //var item = this.items.find(x=> x.caseId == 2047952);
    var item = this.items[2];
    if(item){
        item.performedDateTime = new Date();
    }
    else{
        console.error('item not found')
    }
  }

  public pageChange(event: PageChangeEvent): void {
      this.skip = event.skip;
      this.loadItems();
  }

  private loadItems(): void {
      this.gridView = {
          data: this.items.slice(this.skip, this.skip + this.pageSize),
          total: this.items.length
      };
  }
}
