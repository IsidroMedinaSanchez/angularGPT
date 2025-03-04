import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChatMessageComponent } from '../../components/chat-bubles/chatMessage/chatMessage.component';

@Component({
  selector: 'app-orthographyâge',
  imports: [CommonModule, ChatMessageComponent],
  templateUrl: './orthographyPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyâgeComponent {}
