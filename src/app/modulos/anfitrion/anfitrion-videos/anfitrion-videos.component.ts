import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-anfitrion-videos',
  templateUrl: './anfitrion-videos.component.html',
  styleUrls: ['./anfitrion-videos.component.scss']
})
export class AnfitrionVideosComponent implements OnInit {
  listaVideos: { titulo: string; enlace: string }[] = [
    { titulo: 'Video 1', enlace: 'https://www.youtube.com/embed/MjhfRArh1-0?si=xE0KdCAPWi05UU23' },
    { titulo: 'Video 2', enlace: 'https://www.youtube.com/embed/OH4z9lR9WCg?si=xE0KdCAPWi05UU23' },
    // Agrega más videos según sea necesario
  ];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    // Sanitizar las URLs de los videos
    this.listaVideos.forEach(video => {
      video.enlace = this.sanitizer.bypassSecurityTrustResourceUrl(video.enlace) as string;
    });
  }
}
