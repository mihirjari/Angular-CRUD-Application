import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Music } from '../music';
import {MusicServiceService} from '../music-service.service';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {switchMap} from 'rxjs/operators';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [MusicServiceService]
})
export class DetailComponent implements OnInit {

  private id: string;
  private url: string;
  private deleteUrl: string;
  private updateUrl: string;
  MusicList: Music[];
  //arrayData: any;
  private updateData: any;
  private sendUpdatedData: any;

  
  
  
  constructor(private musicService: MusicServiceService, private activatedRoute: ActivatedRoute, private httpObject: HttpClient, private router: Router) { }

  NewMusic: Music;

  ngOnInit(): void {    
    
    this.activatedRoute.params.pipe(switchMap((params: Params) => {

      return this.musicService.getSingleArtist(params.id);
    })).subscribe((newmusic: Music) => {

      this.NewMusic = newmusic;
      
      var modalInputs = document.querySelectorAll('input');
      modalInputs[0].value = this.NewMusic.artist_bio[0].first_name;
      modalInputs[1].value = this.NewMusic.artist_bio[0].last_name;
      modalInputs[2].value = this.NewMusic.artist_bio[0].city;
      modalInputs[3].value = this.NewMusic.songname;
      modalInputs[4].value = this.NewMusic.album;
      modalInputs[5].value = this.NewMusic.language;
      modalInputs[6].value = this.NewMusic.sold;
      modalInputs[7].value = this.NewMusic.customer_details[0].customer_first_name;
      modalInputs[8].value = this.NewMusic.customer_details[0].customer_last_name;
      modalInputs[9].value = this.NewMusic.customer_details[0].customer_address;
      modalInputs[10].value = this.NewMusic.customer_details[0].postal_code;
      modalInputs[11].value = this.NewMusic.customer_details[0].card_details; 
     
    });

  }


  updateFunction() : void{

    this.updateData = document.querySelectorAll('input');
    
    this.sendUpdatedData = {

      "artist_bio": {
        "first_name": this.updateData[0].value,
        "last_name": this.updateData[1].value,
        "city": this.updateData[2].value
      },
      "songname": this.updateData[3].value,
      "album": this.updateData[4].value,
      "language": this.updateData[5].value,
      "sold": this.updateData[6].value,
      "available_online": true,
      "customer_details": {
        "customer_first_name": this.updateData[7].value,
        "customer_last_name": this.updateData[8].value,
        "customer_address": this.updateData[9].value,
        "postal_code": this.updateData[10].value,
        "card_details": this.updateData[11].value
      }
    };
    
   this.musicService.updateData(this.sendUpdatedData, this.NewMusic._id);
   
   location.href = "";
   
  }

  deleteFunction() : void{

    this.musicService.deleteData(this.NewMusic._id);
    location.href = "";
    
  }

  private handleError(error: any){
    console.log(error);
  }

}



