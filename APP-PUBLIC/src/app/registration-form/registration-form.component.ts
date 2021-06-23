import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {Music} from '../music';
import { MusicServiceService } from '../music-service.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  
  private postUrl = "http://localhost:3000/api/musics";
  private postData: any;
  private data: any;
  public newMusic: Music = {
    _id: '',
     artist_bio: 
         {
             first_name: '',
             last_name: '',
             city: ''
         },
     songname: '',
     album: '',
     language: '',
     sold: '',
     available_online: 'true',
     customer_details: 
         {
             customer_first_name: '',
             customer_last_name: '',
             customer_address: '',
             postal_code: '',
             card_details: ''
         }
   };
  constructor(private musicService: MusicServiceService, private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {

   

  }

  public createFunction(newMusic: Music){
    this.musicService.postFunction(newMusic);
    this.router.navigateByUrl("");
  }



}





