import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {url} from 'inspector';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  pageContact:any='';
  constructor(public  http:Http) {
  }

  ngOnInit() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(res => this.pageContact = res.json());

  )
  //  getPost(){
  //return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(map res=>res.toString());
    //}
  }

}
