import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  selectedFile: File | null = null;
  uploadStatus = '';

  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  async uploadFile() {
    if (!this.selectedFile) {
      this.uploadStatus = 'Please select a file first';
      return;
    }

    try {
      await this.dataService.uploadFile(this.selectedFile).toPromise();
      this.uploadStatus = 'File uploaded successfully!';
      // Add a small delay before navigation to show the success message
      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 1000);
    } catch (error) {
      this.uploadStatus = 'Error uploading file. Please try again.';
      console.error('Upload error:', error);
    }
  }
}