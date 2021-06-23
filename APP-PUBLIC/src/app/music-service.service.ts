import { Injectable } from '@angular/core';
import {Music} from './music';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicServiceService {

  private musicUrl = "http://localhost:3000/api/musics";

  MusicList: Music[];
  
  constructor(private httpObject: HttpClient) 
  { }

  getMusicList() : Promise<void | Music[]>{

    return this.httpObject.get(this.musicUrl)
    .toPromise()
    .then(response => response as Music[])
    .catch(this.handleError);
  }

  getSingleArtist(musicId: string): Promise<void | Music>{

    return this.httpObject.get(this.musicUrl+'/'+musicId)
    .toPromise()
    .then(response => response as Music)
    .catch(this.handleError);

    
  }


  postFunction(newMusic: Music): Promise<void | Music>{

    return this.httpObject.post(this.musicUrl, newMusic)
    .toPromise()
    .then((response) => response as Music)
    .catch(this.handleError);
    
  }

  updateData(newMusic: Music, musicId: string): Promise<void | Music>{

    return this.httpObject.put(this.musicUrl+'/'+musicId, newMusic)
    .toPromise()
    .then((response) => response as Music)
    .catch(this.handleError);
  }

  deleteData(musicId: string): Promise<void | any>{

    return this.httpObject.delete(this.musicUrl+'/'+musicId)
    .toPromise()
    .then((response) => response)
    .catch(this.handleError);
  }

  private handleError(error: any){

    console.log(error);
  }

}
