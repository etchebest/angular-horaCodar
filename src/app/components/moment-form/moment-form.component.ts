import { Moment } from 'src/app/interfaces/Moment';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.scss'],
})
export class MomentFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Moment>();
  @Input() btnText!: string;

  MomentForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    // Inicializando o formulário
    this.MomentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]), // campos que receberão validações
      description: new FormControl('', [Validators.required]),
      image: new FormControl(''),
    });
  }

  get title() {
    return this.MomentForm.get('title')!;
  }
  get description() {
    return this.MomentForm.get('description')!;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    this.MomentForm.patchValue({ image: file });
  }

  submit() {
    if (this.MomentForm.invalid) {
      return;
    }

    // envia o objeto para o pai
    this.onSubmit.emit(this.MomentForm.value);
  }
}
