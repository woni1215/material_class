import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

import Swal from 'sweetalert2'
@Component({
  selector: 'app-primng',
  templateUrl: './primeng.component.html',
  styleUrls: ['./primeng.component.scss'],
  providers: [MessageService]
})
export class PrimengComponemt implements OnInit {

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  sweetalert(): void {
    Swal.fire('Any fool can use a computer')
  }
  sweetalert2() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      // footer: '<a href="">Why do I have this issue?</a>'
    })
  }

  showConfirm() {
    this.messageService.clear();
    this.messageService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: 'Confirm to proceed' });
  }

  showBottomCenter() {
    this.messageService.add({ key: 'bc', severity: 'success', summary: 'Success', detail: 'Message Content' });
  }

  onConfirm() {
    this.messageService.clear('c');
  }

  onReject() {
    this.messageService.clear('c');
  }

  clear() {
    this.messageService.clear();
  }
}
