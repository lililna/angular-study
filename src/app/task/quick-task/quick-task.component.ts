import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-task',
  templateUrl: './quick-task.component.html',
  styleUrls: ['./quick-task.component.scss']
})
export class QuickTaskComponent implements OnInit {
  desc: string;
  constructor() { }

  ngOnInit() {
  }

  // 表单提交
  onSubmit({value, valid}, ev: Event) {
    ev.preventDefault();
    console.log(JSON.stringify(value));
    console.log(JSON.stringify(valid));
  }

}
