import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  output,
} from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

interface Option {
  id: string;
  text: string;
}

export interface TextMessageBoxEvent {
  prompt: string;
  selectedOption: string;
}
@Component({
  selector: 'app-text-message-box-select',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './textMessageBoxSelect.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextMessageBoxSelectComponent {
  placeholder = input<string>('');
  options = input.required<Option[]>();
  onMessage = output<TextMessageBoxEvent>();

  public fb = inject(FormBuilder);
  public form = this.fb.group({
    prompt: ['', Validators.required],
    selectedOption: ['', Validators.required],
  });
  handleSubmit() {
    if (this.form.invalid) return;

    const { prompt, selectedOption } = this.form.value;

    this.onMessage.emit({ prompt: prompt!, selectedOption: selectedOption! });
    this.form.reset();
  }
}
