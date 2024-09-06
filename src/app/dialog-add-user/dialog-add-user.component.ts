import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatDialogContent,
    MatFormFieldModule,
    MatDialogActions,
    MatButtonModule,
    MatDialogTitle,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    MatProgressBarModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {

  user: User = new User();
  birthDate: Date;
  firestore: Firestore = inject(Firestore);
  loading: boolean = false;
  readonly dialogRef = inject(MatDialogRef<DialogAddUserComponent>);


  async saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log(this.user.toJSON());
    this.loading = true;
    await addDoc(collection(this.firestore, "user"), this.user.toJSON())
      .then(() => {
        this.loading = false;
        this.dialogRef.close();
      });
  }

}
