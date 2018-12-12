import { Query } from './../../models/query.model';
import { Component, OnInit } from '@angular/core';
import { QueryService } from './../../services/query.service';



@Component({
  selector: 'app-querylist',
  templateUrl: './querylist.component.html',
  styleUrls: ['./querylist.component.scss']
})
export class QuerylistComponent implements OnInit {

  queries: Query[];
  displayedColumns: string[] = [ 'query_title', 'query_content', 'query_type', 'query_createdby'];
  constructor(private queryService: QueryService) {
  }

  ngOnInit() {
    this.fetchQueries();
  }

  fetchQueries() {
    this.queryService
      .getQueries()
      .subscribe((data: Query[]) => {
        this.queries = data;
        console.log('Data requested ...');
        console.log(this.queries);
      });
  }
}