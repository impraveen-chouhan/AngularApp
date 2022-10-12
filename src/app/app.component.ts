import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { DemoService } from './demo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private demoService: DemoService) {}
  title = 'testApp';
  ngOnInit() {
    this.demoService.demo();
  }
}
