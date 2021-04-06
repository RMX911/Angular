import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  students: any = [];
  constructor(http: HttpClient) {
    http.get<any>('../../assets/data.json').subscribe((data) => {
      console.log(data);
      this.students = data;
    });
  }

  getStudents() {
    return this.students;
  }
  //  deleteProduct() {
  //   return []
  //}
}
