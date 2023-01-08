import { DialogUpdateComponent } from './../dialog-update/dialog-update.component';
import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PerfumeItem } from '../models/Item';
import { PerfumeItemService } from '../services/item.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-update-items',
  templateUrl: './update-items.component.html',
  styleUrls: ['./update-items.component.css']
})
export class UpdateItemsComponent implements OnInit {
  insertFrm: FormGroup;

  private itemsCollection: AngularFirestoreCollection<PerfumeItem>;
  constructor(private fb: FormBuilder, private itemsrv: PerfumeItemService, private readonly afs: AngularFirestore,
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
    this.itemsCollection = this.afs.collection<PerfumeItem>('items');
    this.insertFrm = this.fb.group({
      id: ['', Validators.required],
      name: ['', [Validators.required, Validators.minLength(4)]],
      brand: [''],
      origin: [''],
      money: [''],
      img: [''],
      /*
      password:['', Validators.required],
      confirmpassword:['', Validators.required]
      },{
      validator: MustMatch('password', 'confirmpassword')}//hàm tự viết SV có thể bỏ qua không kiểm tra cũng được
      */
    });
  }

  ngOnInit(): void {
  }
  // onSubmit() {
  //   alert('Test1');
  //   if(this.insertFrm.valid){
  //     alert('Update Successfull !!!');

  //   }
  //   let newForm = {
  //     ...this.insertFrm.value,
  //   }
  //   let item = new PerfumeItem();
  //   this.itemsCollection.doc(item.id).update(item);
  //   console.log("aaa");
  // }
  onUpdate() {
    alert("Update successful");
    if (this.insertFrm.invalid) {
      return;
    }
    // let item : PerfumeItem={};
    let newForm = {
      ...this.insertFrm.value
    }
    // item.id=this.insertFrm.controls["id"].value;
    // item.brand=this.insertFrm.controls["brand"].value;
    // item.money=this.insertFrm.controls["money"].value;
    // item.name=this.insertFrm.controls["name"].value;
    // item.origin=this.insertFrm.controls["origin"].value;
    this.itemsCollection.doc(this.data.id).update(newForm);
    console.log("aaa");
  }
}
