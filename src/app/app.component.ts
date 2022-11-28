import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TH-angular-name-card';

  name = 'NguyenThanhVinh';
  isClear(){
    this.name='';
  } ;
  isDisabled = false;
}
