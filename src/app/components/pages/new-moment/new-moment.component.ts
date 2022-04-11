import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Moment } from 'src/app/interfaces/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.scss'],
})
export class NewMomentComponent implements OnInit {
  btnText: string = 'Compartilhar!';
  constructor(
    private router: Router,
    private momentService: MomentService,
    private messagesService: MessagesService
  ) {}

  ngOnInit(): void {}

  async createHandler(moment: Moment) {
    // formData é do javascript utilizado para enviar formulário com anexo
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);
    if (moment.image) {
      formData.append('image', moment.image);
    }

    // todo

    // enviar para service
    await this.momentService.createMoment(formData).subscribe();

    this.messagesService.addMsg('Momento adicionado com sucesso!');

    this.router.navigate(['/']);
  }
}
