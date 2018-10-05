import { Component, OnInit } from '@angular/core';
import {ColumnSetting, CASES_RESPONSE, WORKLISTFIELDS} from '../../models/casesMock';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { timer } from 'rxjs/observable/timer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid',
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

  constructor() {
      this.loadItems();
  }

  private subscription;
  ngOnInit() {
    
    this.subscription = timer(1000, 1000).subscribe(x=> {
        console.log(x);
        this.updateRow();
    }
    );
  }

  ngOnDestroy(){
      this.subscription.unsubscribe();
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
