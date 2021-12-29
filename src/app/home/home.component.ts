import { DatabaseService } from './../core/services/database.service';
import { Component, OnInit } from '@angular/core';
import { Cat } from '../core/entities/cat.entity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cats: Cat[] = [];
  constructor(private databaseService: DatabaseService) {}

  ngOnInit(): void {
    this.databaseService.getCatsIds().subscribe((ids: any) => {
      this.databaseService.getCatsDetails(ids.rows).then((values: Cat[]) => {
        this.cats = values;
      });
    });
  }
}
