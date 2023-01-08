import { PerfumeItem } from './../models/Item';
import { Component, OnInit, Inject } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<PerfumeItem>;
  constructor(
    private readonly afs: AngularFirestore,
    public dialogRef: MatDialogRef<DialogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
    this.itemsCollection = this.afs.collection<PerfumeItem>('items');
  }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onDelete() {
    alert("Delete successful");
    this.itemsCollection.doc(this.data.docId).delete();
    this.dialogRef.close();
  }
}
