import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { StudentDetail } from 'src/app/shared/student-detail.model';
import { StudentDetailService } from 'src/app/shared/student-detail.service';


@Component({
  selector: 'app-student-details-form',
  templateUrl: './student-details-form.component.html',
  styles: [
  ]
})
export class StudentDetailsFormComponent implements OnInit {

  constructor(public service:StudentDetailService, private toastr: ToastrService) {}

  ngOnInit(): void {
  }

onSubmit(form: NgForm) {
   this.service.postStudentDetail().subscribe(res => {
     console.log('ggg', res);
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submitted successfully', 'Student Detail Register')
      })
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new StudentDetail();
  }


 

}
