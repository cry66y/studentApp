import { Injectable } from '@angular/core';
import { StudentDetail } from './student-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentDetailService {

  constructor(private http: HttpClient) {}

  formData:StudentDetail = new StudentDetail();
  readonly baseURL = 'http://localhost:11302/api/StudentDetail';
  list: StudentDetail[];

  postStudentDetail(){
    return this.http.post(this.baseURL, this.formData);
  }

  putStudentDetail(){
    return this.http.put(`${this.baseURL}/${this.formData.studentDetailId}`, this.formData);
  }

  deleteStudentDetail(id: number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

   refreshList(){
    this.http.get(this.baseURL).subscribe(res => {
      this.list = res as StudentDetail[];
    })
  }
}
