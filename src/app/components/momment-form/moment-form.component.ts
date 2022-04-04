import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-momment-form',
  templateUrl: './momment-form.component.html',
  styleUrls: ['./momment-form.component.scss'],
})
export class mommentFormComponent implements OnInit {
  @Input() btnText!: string;

  mommentForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    // Inicializando o formulário
    this.mommentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]), // campos que receberão validações
      description: new FormControl('', [Validators.required]),
      image: new FormControl(''),
    });
  }

  get title() {
    return this.mommentForm.get('title')!;
  }
  get description() {
    return this.mommentForm.get('description')!;
  }

  submit() {
    console.log('enviou o form');
  }
}
