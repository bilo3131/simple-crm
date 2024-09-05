import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule, TooltipPosition } from '@angular/material/tooltip';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[1]);
  readonly dialog = inject(MatDialog);

  openDialog(): void {
    this.dialog.open(DialogAddUserComponent);
  }
}
