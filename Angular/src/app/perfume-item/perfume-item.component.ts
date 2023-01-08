import { ItemDialogDetailComponent } from './../item-dialog-detail/item-dialog-detail.component';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { PerfumeItem } from '../models/Item';
import { MatDialog } from '@angular/material/dialog';
import { DialogDetailComponent } from '../dialog-detail/dialog-detail.component';
import { DialogUpdateComponent } from '../dialog-update/dialog-update.component';
import { Sort } from '@angular/material/sort';
import { PerfumeItemService } from '../services/item.service';
import { ItemDialogUpdateComponent } from '../item-dialog-update/item-dialog-update.component';

@Component({
  selector: 'app-perfume-item',
  templateUrl: './perfume-item.component.html',
  styleUrls: ['./perfume-item.component.css']
})
export class PerfumeItemComponent implements OnInit {
  //itemlist: Observable<PerfumeItem[]>;
  itemlist1: PerfumeItem[]=[];
  config: any;
  positionOption: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOption[3]);
  searchText: any;
  available: String = "Còn Hàng";
  unavailable: String = "Hết Hàng";
  private itemsCollection: AngularFirestoreCollection<PerfumeItem>;

  constructor(
    private itemService:PerfumeItemService,
    private readonly afs: AngularFirestore, 
    public dialog: MatDialog) {
    this.itemsCollection = this.afs.collection<PerfumeItem>('items');
    this.itemService.getItem().subscribe(data => {
      //console.log(this.items1)
      this.itemlist1 = data;
      console.log(this.itemlist1)
      console.log("count: " + this.itemlist1.length);
      this.config = {
        itemsPerPage: 4,
        currentPage: 1,
      };
    });

  }

  ngOnInit(): void {
 }

  pageChanged(event: number) {
    this.config.currentPage = event;
  }

  openDialogDetails(it: any) {
    const dialogRef = this.dialog.open(ItemDialogDetailComponent, {
      data: it
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogUpdate(it: any) {
    const dialogRef = this.dialog.open(ItemDialogUpdateComponent, {
      data: it
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onDelete(id: string) {
    alert("Delete successful");
    this.itemService.deleteItem(id).subscribe(data => {
      console.log({data});
     
    })
  }

  sortData(sort: Sort) {
    const data = this.itemlist1.slice();
    if (!sort.active || sort.direction === '') {
      this.itemlist1 = data;
      return;
    }
    this.itemlist1 = data.sort((a, b) => {
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








