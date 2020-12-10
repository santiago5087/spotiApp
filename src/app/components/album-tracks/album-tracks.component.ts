import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-album-tracks',
  templateUrl: './album-tracks.component.html',
  styleUrls: ['./album-tracks.component.scss']
})
export class AlbumTracksComponent implements OnInit {

  album: string;

  constructor(private dialogRef: MatDialogRef<AlbumTracksComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {
    this.album = this.data['id'];
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close()
  }

}
