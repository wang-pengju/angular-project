import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {

  constructor() {}
  private dataAll: DataBase[] = [
    // {
    //   id: 1,
    //   name: "张三",
    //   sex: "男",
    //   age: 20,
    //   birthday: "1990-10-20",
    //   tel: "13096998271"
    // }, {
    //   id: 2,
    //   name: "李四",
    //   sex: "男",
    //   age: 20,
    //   birthday: "1990-10-20",
    //   tel: "13096998271"
    // }
    new DataBase(1, "张三", "男", "1", "1990-10-20", "13096998271"),
    new DataBase(2, "李四", "女", "2", "1990-10-20", "13096998271"),
    new DataBase(3, "王五", "男", "3", "1990-10-20", "13096998271"),
    new DataBase(4, "麻六", "男", "4", "1990-10-20", "13096998271"),
    new DataBase(5, "张三", "男", "5", "1990-10-20", "13096998271"),
    new DataBase(6, "张三", "男", "6", "1990-10-20", "13096998271"),
    new DataBase(7, "张三", "男", "7", "1990-10-20", "13096998271")
  ]
  getAllData(): DataBase[] {
    /*console.log(this.dataAll);*/
    return this.dataAll;

  }
  getOneData(id: number): DataBase {
    return this.dataAll.find(data => data.id == id);
  }
}

export class DataBase {
  constructor(
    public id: number,
    public name: string,
    public sex: string,
    public age: string,
    public birthday: string,
    public tel: string
  ) {}
}
