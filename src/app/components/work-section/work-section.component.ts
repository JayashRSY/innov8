import { Component } from '@angular/core';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrls: ['./work-section.component.scss']
})
export class WorkSectionComponent {
  data: any = []
  attributesMapping = {
    work: 'work',
    title: 'title',
    url: 'url',
    description: 'description',
    client: 'client'
  }
  dots = new Array(5);
  activeIndex: number | null = null;

  constructor(private _dataService: DataService, private googleSheetsDbService: GoogleSheetsDbService) { }
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    // this._dataService.getWorkData('Sheet1!A1: D10').subscribe((response: any) => {
    //   this.data = response.values;
    //   console.log("🚀 ~ file: work-section.component.ts:22 ~ response:", response);
    // });
    this.googleSheetsDbService.get(
      environment.spreadsheetId,
      "Sheet1",
      this.attributesMapping
    ).subscribe(res => {
      this.data = res
    })
  }

  onDotClick(index: number): void {
    this.activeIndex = index;
  }
}
