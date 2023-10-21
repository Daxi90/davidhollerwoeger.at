import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['image1.png','image2.png','image3.png'];
  headlines = ['Bring engineering to the next level','Born to code','Love Webdevelopment'];
  currentImage = 0;
  showImage = true;

  ngOnInit(){
    this.updateImage();
  }


  updateImage() {
    setInterval(() =>{
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() =>{
        this.showImage = true;
      },10)
    }, 8000);
  }
}
