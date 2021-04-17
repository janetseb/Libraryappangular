import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-adminbooks',
  templateUrl: './adminbooks.component.html',
  styleUrls: ['./adminbooks.component.css']
})
export class AdminbooksComponent implements OnInit {
    apidata:any;

  constructor(public http:HttpClient) { }
  onClickDelete(id:string)
   {
    console.log(id)
   this.http.get(`https://janetlibraryappapi.herokuapp.com/books/delete/${id}`)
     .subscribe((companies)=>{
       this.apidata = companies;
       console.log(this.apidata)
     })

   }

  ngOnInit(): void {
     this.http.get("https://janetlibraryappapi.herokuapp.com/books")
    .subscribe((companies)=>{
      this.apidata = companies;
      console.log(this.apidata)
    })
  }

}
