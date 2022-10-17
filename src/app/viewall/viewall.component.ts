import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent implements OnInit {

  constructor() { }

  name="Saranya"
  status:boolean=false
  readValue=()=>{
    this.name="Raju"
    this.status=true
  }

  ngOnInit(): void {
  }

}
