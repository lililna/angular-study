import { slideToRight } from '../../anims/router-anim';
import { ConfirmDialogComponent } from './../../shared/confirm-dialog/confirm-dialog.component';
import { CopyTaskComponent } from './../copy-task/copy-task.component';
import { MdDialog } from '@angular/material';
import { Component, OnInit, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NewTaskComponent } from '../new-task/new-task.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations: [
    slideToRight
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskHomeComponent implements OnInit {
  @HostBinding ('@routeAnim') state;
  lists = [
    {
      id: 1,
      name: "待办",
      tasks: [
        {
          id: 1,
          completed: true,
          priority: 1,
          desc: "任务一:去星巴克买杯咖啡",
          owner:{
            id: 1,
            name: "张三",
            avatar: "avatars:svg-11"
          },
          dueDate: new Date(),
          reminder: new Date()
        },
        {
          id: 2,
          completed: false,
          desc: "任务二:完成任务",
          priority: 3,
          owner:{
            id: 1,
            name: "李四",
            avatar: "avatars:svg-12"
          },
          dueDate: new Date()
        }             
      ]
    },
    {
      id: 2,
      name: "进行中",
      tasks: [
        {
          id: 1,
          completed: false,
          desc: "任务三:代码评审",
          priority: 2,
          owner:{
            id: 1,
            name: "王五",
            avatar: "avatars:svg-13"
          },
          dueDate: new Date(),
          reminder: new Date()
        },
        {
          id: 2,
          completed: false,
          desc: "任务四:制定项目计划",
          priority: 1,
          owner:{
            id: 1,
            name: "李四",
            avatar: "avatars:svg-12"
          },
          dueDate: new Date()
        }             
      ]
    }
  ]

  constructor(private dialog: MdDialog, private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  launchNewTaskDialog() {
    this.dialog.open(NewTaskComponent, {data: {title: "新建任务"}});
  }

  launchCopyTaskDialog() {
    const dialogRef = this.dialog.open(CopyTaskComponent, {data: {lists: this.lists}});
  }

  launchUpdateDialog(task) {
    const dialogRef = this.dialog.open(NewTaskComponent, {data: {title: "修改任务", task: task}});
  }

  launchDelListDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data:{title: '删除任务列表', content: '您确定删除该任务列表吗？'}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }

  launchEditListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {data:{title: '更改列表名称'}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
    
  }

  openNewListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {data:{title: '新建列表'}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }

  handleMove(srcData, list) {
    switch (srcData.tag) {
      case 'task-item':
        console.log('handling item');
        break;
      case 'task-list':
        console.log('handling list');
        break;
      default:
        break;
    }
  }

}
