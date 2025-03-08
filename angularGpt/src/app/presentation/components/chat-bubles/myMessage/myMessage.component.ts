import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-my-message',
  imports: [CommonModule],
  templateUrl: './myMessage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyMessageComponent { 
  text = input.required<string>();
}
