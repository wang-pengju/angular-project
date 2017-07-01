import { Component, OnInit } from '@angular/core';
import { ServiceService, DataBase } from './base/service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private title = '面试测设题';
  private editIndex = -1;
  private editData: Object;
  private id: Array < number >= [];
  private menus: Array < Menu > ;
  private dataAll: Array < Object > ;

  constructor(private service: ServiceService) {}
  ngOnInit() {
    this.menus = [
      new Menu(0, '姓名', '性别', '年龄', '生日', '手机号', '操作')
    ]
    this.dataAll = this.service.getAllData();
  }

  addRow() {
    let length = this.dataAll.length + 1;
    return this.dataAll.push(new DataBase(length, "", "", "", "", ""));
  }
  removeRow() {
    let id = this.id.sort(this.sortNumber);
    console.log(id);
    for (let i = 0; i < id.length; i++) {
      this.dataAll.splice(id[i], 1);
      this.id = [];
    }
  }
  edit(data, i) {
    this.editIndex = i;
    this.editData = Object.assign({}, data);
  }
  cancel(data) {
    this.dataAll[this.editIndex] = this.editData;
    this.editIndex = -1;
  }
  save() {
    this.editIndex = -1;
  }
  delate(data, i) {
    return this.dataAll.splice(i, 1);
  }
  change(i) {
    console.log(i);
    if (this.id.indexOf(i) === -1) {
      return this.id.push(i);
    } else {
      return;
    }
  }
  sortNumber(a, b) {
    return b - a;
  }
}
export class Menu {
  constructor(
    public id: number,
    public name: string,
    public sex: string,
    public age: string,
    public birthday: string,
    public tel: string,
    public operation: string
  ) {}
}
