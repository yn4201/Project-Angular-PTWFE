import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { PerfumeItem } from '../models/Item';
import { MatDialog } from '@angular/material/dialog';
import { DialogDetailComponent } from '../dialog-detail/dialog-detail.component';
import { DialogUpdateComponent } from '../dialog-update/dialog-update.component';
import { Sort } from '@angular/material/sort';
import { NhidetailsComponent } from '../nhidetails/nhidetails.component';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items1: PerfumeItem[] = [];
  config: any;
  positionOption: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOption[3]);
  searchText: any;
  available: String = "Còn Hàng";
  unavailable: String = "Hết Hàng";

  private itemsCollection: AngularFirestoreCollection<PerfumeItem>;

  constructor(private readonly afs: AngularFirestore, public dialog: MatDialog) {
    this.itemsCollection = this.afs.collection<PerfumeItem>('items');
    this.itemsCollection.valueChanges({ idField: 'docId' }).subscribe(data => {
      //console.log(this.items1)
      this.items1 = data;
      console.log(this.items1)
      console.log("count: " + this.items1.length);
      this.config = {
        itemsPerPage: 4,
        currentPage: 1,
        //totalItems: this.items1.length
      };
    });

  }


  ngOnInit(): void {
  }

  pageChanged(event: number) {
    this.config.currentPage = event;
  }


  openDialogDetails(it: any) {
    const dialogRef = this.dialog.open(NhidetailsComponent, {
      data: it
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogUpdate(it: any) {
    const dialogRef = this.dialog.open(DialogUpdateComponent, {
      data: it
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogDelete(it: any) {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      data: it
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  // onDelete(it: any) {
  //   alert("Delete successful");
  //   this.itemsCollection.doc(it.docId).delete();
  // }

  sortData(sort: Sort) {
    const data = this.items1.slice();
    if (!sort.active || sort.direction === '') {
      this.items1 = data;
      return;
    }
    this.items1 = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'brand':
          return compare(a.brand, b.brand, isAsc);
        case 'origin':
          return compare(a.origin, b.origin, isAsc);
        case 'money':
          return compare(a.money, b.money, isAsc);
        case 'status':
          return compare(a.status, b.status, isAsc);
        default:
          return 0;
      }
    });
  }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


