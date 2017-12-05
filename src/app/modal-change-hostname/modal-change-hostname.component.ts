import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-change-hostname',
  templateUrl: './modal-change-hostname.component.html',
  styleUrls: ['./modal-change-hostname.component.css']
})
export class ModalChangeHostnameComponent implements OnInit {

  public hostnameForm = this.fb.group({
    newHost: [this.data, [Validators.required, Validators.pattern]]
  });
  
  constructor(
    public fb: FormBuilder,
    public dialogRef:MatDialogRef<ModalChangeHostnameComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() {
    }

    submitConfig() {
      if (this.hostnameForm.valid) {
        this.dialogRef.close(this.hostnameForm.value.newHost);
      }
    }

}
