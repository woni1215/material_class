import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-primng',
  templateUrl: './primng.component.html',
  styleUrls: ['./primng.component.scss']
})
export class PrimngComponent implements OnInit {

  constructor() { }

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


}
