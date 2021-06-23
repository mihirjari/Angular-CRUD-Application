import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {Music} from '../music';
import { MusicServiceService } from '../music-service.service';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [MusicServiceService]
})
export class HomePageComponent implements OnInit {

  musicList : Music[];
  
  

  constructor(private musicService: MusicServiceService) {}

  ngOnInit(): void {

    this.musicService.getMusicList().then((musics : Music[]) => {

      this.musicList = musics.map((musicItem) => {

         
          return musicItem;
      });

      
      
      
    });

    
  }


}
