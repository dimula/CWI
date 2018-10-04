import { Component, OnInit } from '@angular/core';
import {ColumnSetting, CASES_RESPONSE, WORKLISTFIELDS} from '../../models/casesMock';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  public gridView: GridDataResult;
  public pageSize = 10;
  public skip = 0;
  private data: Object[];

  private items: any[] = CASES_RESPONSE.cases;
  public columns: ColumnSetting[] = WORKLISTFIELDS;

  constructor() {
      this.loadItems();
  }

  ngOnInit() {
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
