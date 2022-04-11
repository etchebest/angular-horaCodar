import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  message: string = '';

  constructor() {}

  addMsg(message: string) {
    this.message = message;

    setTimeout(() => {
      this.clear();
    }, 3000);
  }

  clear() {
    this.message = '';
  }
}
