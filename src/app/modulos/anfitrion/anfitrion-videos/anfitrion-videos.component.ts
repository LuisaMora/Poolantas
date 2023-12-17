import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Videos } from 'src/app/modelos/videos';
import { VideoService } from 'src/app/service/video.service';

@Component({
  selector: 'app-anfitrion-videos',
  templateUrl: './anfitrion-videos.component.html',
  styleUrls: ['./anfitrion-videos.component.scss']
})
export class AnfitrionVideosComponent implements OnInit {
  videos: Videos[] = [];
  
  constructor(private videosService: VideoService,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.cargarVideos();
  }

  cargarVideos() {
    this.videosService.getAllVideos().subscribe((data:any) => {
      console.log(data);
      this.videos = data;
      
    });
    
  }

}
