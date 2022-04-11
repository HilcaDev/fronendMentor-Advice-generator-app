import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { AdviceService } from './core/service/advice.service';
import { Slip, IAdvice } from './domain/dto/advice.dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  dataApi!: IAdvice | null;

  constructor(private adviceService: AdviceService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.adviceService.getadvice().subscribe(({ body }) => this.dataApi = body)
  }
}
