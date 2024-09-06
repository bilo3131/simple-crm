import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialogActions, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';

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
    FormsModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {

  user: User = new User();
  birthDate: Date;
  firestore: Firestore = inject(Firestore);

  async saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log("Current user is " + this.user.toJSON());
    const docRef = await addDoc(collection(this.firestore, "user"), this.user.toJSON());
    console.log("Adding User finished " + docRef);

  }

}
