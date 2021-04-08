import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit {
  constructor() {}
  addModalVisible:boolean = false;
  ngOnInit(): void {}

  showAddModal(){
    console.log(this.addModalVisible);
    this.addModalVisible = !this.addModalVisible;
  }
}
