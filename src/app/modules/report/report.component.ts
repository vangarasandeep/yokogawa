import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  activewellsreport(){
    alert("Clicked Active wells Download Report")
  }

  allwellsreport(){
    alert("Clicked on All Wells Downaload Report")
  }
}
