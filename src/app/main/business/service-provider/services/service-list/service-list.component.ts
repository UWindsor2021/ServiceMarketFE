import {Component, OnInit} from '@angular/core'
import {ColDef, GridOptions} from "@ag-grid-community/core"
import {InfiniteRowModelModule} from "@ag-grid-community/infinite-row-model"
import {ClientSideRowModelModule} from "@ag-grid-community/client-side-row-model"
import {HttpClient} from "@angular/common/http"



const titleCellRenderer = (params) => {
  const {value} = params
  const split = value.split('|')

  return `
    <div class="app-row app-row--center overflow-hidden">
      <div>
        <div class="app-expressive-heading-01">${split[0]}</div>
        <div class="text-overflow-ellipsis app-caption-01">${split[1]}</div>
      </div>
    </div>
  `
}


@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  public modules = [InfiniteRowModelModule, ClientSideRowModelModule]
  public gridOptions: GridOptions = {}
  public loading: boolean = false
  public defaultColDef = {}

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

  }




}
