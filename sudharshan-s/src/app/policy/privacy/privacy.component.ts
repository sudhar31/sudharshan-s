import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.css'
})
export class PrivacyComponent {
  message: string | null = null;

  constructor(private router: Router) {}

  onSubmit() {
    const checkbox = document.getElementById('privacyAccept') as HTMLInputElement;
    if (checkbox.checked) {
      this.router.navigate(['/']);
    } else {
      this.message = 'You must accept the Privacy Policy to proceed.';
    }
  }
}
