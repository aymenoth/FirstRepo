import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  contact : any = { contactName: 'fName' , contactNumber: 123}
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  public _name:string="ali",
public lname:String="hermi"

  constructor() {
    this.name ="nnnn",
     this.lname  ="bbbb"
  }

  ngOnInit() {
  }

  firstClick() {
    this.contact.contactName="first Name",
      this.contact.contactNumber ="firs Lname";
  }
}
