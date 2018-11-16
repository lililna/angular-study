import { ConfirmDialogComponent } from './../../shared/confirm-dialog/confirm-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects = [
    {
      name: "企业协作平台1",
      desc: "这是一个企业内部项目1",
      coverImg: "assets/images/covers/1.jpg"
    },
    {
      name: "企业协作平台2",
      desc: "这是一个企业内部项目2",
      coverImg: "assets/images/covers/2.jpg"
    }
  ]
  constructor(private dialog: MdDialog) { }

  ngOnInit() {
  }

  openNewProjectDialog() {
    // 可设置对话框属性
    // 大小
    // this.dialog.open(NewProjectComponent,{width: "100px", height: "100px"});
    // 位置
    //this.dialog.open(NewProjectComponent,{position:{left: "0", top: "0"}});
    // 数据
    //this.dialog.open(NewProjectComponent,{data:"This is my data"});
    const dialogRef = this.dialog.open(NewProjectComponent,{data:{title: '新增项目'}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }

  launchInviteDialog() {
    this.dialog.open(InviteComponent);
  }

  launchEditDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: '编辑项目'}});
  }

  launchDelDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{data:{title: '删除项目', content: '您确定删除该项目吗？'}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }

}
