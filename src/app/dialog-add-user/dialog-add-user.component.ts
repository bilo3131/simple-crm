import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialogActions, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';

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
    MatDatepickerModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {

}
