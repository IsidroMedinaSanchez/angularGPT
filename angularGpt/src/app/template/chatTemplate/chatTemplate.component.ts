import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatMessageComponent } from '@components/chat-bubles/chatMessage/chatMessage.component';
import { MyMessageComponent } from '@components/chat-bubles/myMessage/myMessage.component';
import { TextMessageBoxComponent } from '@components/text-boxes/textMessageBox/textMessageBox.component';
import { TextMessageEvent } from '@components/text-boxes/textMessageBoxFile/textMessageBoxFile.component';
import { TextMessageBoxEvent } from '@components/text-boxes/textMessageBoxSelect/textMessageBoxSelect.component';
import { TypingLoaderComponent } from '@components/typingLoader/typingLoader.component';
import { Message } from 'app/presentation/interfaces/message.interface';
import { OpenAiService } from 'app/presentation/services/openai.service';

@Component({
  selector: 'app-chat-template',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent,
  ],
  templateUrl: './chatTemplate.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatTemplateComponent {
  public messages = signal<Message[]>([]);
  public isLoading = signal(false);
  public _openAi = inject(OpenAiService);

  handleMessage(prompt: string) {
    console.log(prompt);
  }

  // handleMessageWithFile({ prompt, file }: TextMessageEvent) {
  //   console.log({ prompt, file });
  // }

  // handleMessageWithSelect(event: TextMessageBoxEvent) {
  //   console.log(event);
  // }
}
