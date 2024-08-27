import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.css'
})
export class TermsComponent {
  errorMessage: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    const checkbox = document.getElementById('termsAccept') as HTMLInputElement;
    if (checkbox.checked) {
      this.errorMessage = ''; // Clear any previous error messages
      this.router.navigate(['/']);
    } else {
      this.errorMessage = 'You must accept the Terms and Conditions to proceed.';
    }
  }
}
