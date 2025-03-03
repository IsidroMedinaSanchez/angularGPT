import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-audio-to-text-page',
  imports: [CommonModule],
  templateUrl: './audioToTextPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioToTextPageComponent { }
