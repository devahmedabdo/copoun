import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { DashboardService } from 'src/app/services/dashboard.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users!: User[];
  loading!: boolean;
  constructor(private dash: DashboardService) {}
  gitUsers() {
    this.dash.getAllUser().subscribe({
      next: (users) => {
        this.users = users.users;
        this.loading = true;
      },
      error: (err) => console.log(err),
    });
  }
  download(userTable: HTMLTableElement) {
    // let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(userTable);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'users.xlsx');
  }
  log(a: any) {
    console.log(a);
  }
  ngOnInit(): void {
    this.gitUsers();
  }
}
