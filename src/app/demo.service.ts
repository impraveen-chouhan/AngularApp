import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root',
})
export class DemoService {
  constructor() {}

  demo() {
    setTimeout(() => {
      Swal.fire({
        title: 'Result!',
        html: '<b>You will not be </b> able to recover <br> this imaginary file!',
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'OK',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    }, 5000);
  }
}
