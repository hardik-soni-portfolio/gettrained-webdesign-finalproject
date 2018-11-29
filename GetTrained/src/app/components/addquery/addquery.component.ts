import { QueryService } from './../../services/query.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addquery',
  templateUrl: './addquery.component.html',
  styleUrls: ['./addquery.component.scss'],
  providers: [QueryService]
})

export class AddqueryComponent implements OnInit {
  showSuccessMessage: boolean;
  serverErrorMessage: string;
  queryService: QueryService;
  constructor( queryService: QueryService) {
    this.queryService = queryService;
   }


   onSubmit(form: NgForm) {
    this.queryService.postQuery(form.value).subscribe(
      res => {
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessage = err.error.join('<br/>');
        } else {
          this.serverErrorMessage = 'Error occured while submitting the form';
        }
      }
    );
  }

  resetForm(form: NgForm) {
    this.queryService.selectedQuery = {
     query_title: '',
     query_content: '',
     query_type: '',
     query_createdby: ''
    };
    form.resetForm();
    this.serverErrorMessage = '';
  }

  ngOnInit() {
  }

}



