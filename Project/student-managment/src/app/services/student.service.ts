import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students: any = [];
  constructor(private http: HttpClient) {
    // http.get<any>('../../assets/data.json').subscribe((data) => {
    //   // console.log(data);
    //   this.students = data;
    // });
  }

  getStudents() {
    return this.http.get<any>('../../assets/data.json');
  }

  deleteStudentRow(index: Number, students:any) {
    students.splice(index, 1);
  }

  editStudentRow(index: Number, students:any) {
    students[index as any].editable = !students[index as any]
      .editable;
    return students[index as any].editable;
  }

  addStudentRow(newStudent: any, students: any) {
    students.push(newStudent);
  }

  expandStudentRow(index: Number, students:any) {
    students[index as any].expand = !students[index as any].expand;
    return students[index as any].expand;
  }
}
