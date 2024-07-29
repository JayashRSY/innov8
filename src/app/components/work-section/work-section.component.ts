import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrls: ['./work-section.component.scss']
})
export class WorkSectionComponent {
  data: any = []
  works: any = []
  attributesMapping = {
    work: 'work',
    title: 'title',
    url: 'url',
    description: 'description',
    client: 'client'
  }
  dots = new Array(5);
  activeIndex: number | null = null;
  intervalId: any;
  currentIndex = 0;
  constructor(private _dataService: DataService) { }
  ngOnInit(): void {
    this.fetchData();
    this.onDotClick(0)
    this.startAutoCycle();
  }
  startAutoCycle() {
    this.intervalId = setInterval(() => {
      this.onDotClick((this.currentIndex + 1) % this.data.length);
    }, 3000);
  }
  fetchData(): void {
    this._dataService.getWorkData().subscribe((res: any) => {
      console.log("🚀 ~ file: work-section.component.ts:22 ~ response:", res);
      this.works = this.formatSheetData(res.values);
      this.data = this.works
      console.log("🚀 ~ file: work-section.component.ts:41 ~ this.works:", this.works);
      this.onDotClick(0)
    });
  }
  private formatSheetData(data: any[]): any[] {
    const headers = data[0];
    return data.slice(1).map(row => {
      const formattedRow: any = {};
      row.forEach((cell: any, index: number) => {
        formattedRow[headers[index]] = cell;
      });
      return formattedRow;
    });
  }


  onDotClick(index: number) {
    this.currentIndex = index;
  }

  getBoxClass(index: number): string {
    const position = (index - this.currentIndex + this.data.length) % this.data.length;
    switch (position) {
      case 0:
        return 'box-3';
      case 1:
        return 'box-4';
      case 2:
        return 'box-5';
      case 3:
        return 'box-1';
      case 4:
        return 'box-2';
      default:
        return '';
    }
  }
}
