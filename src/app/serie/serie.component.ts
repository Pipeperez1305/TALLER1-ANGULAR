import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie';
import { dataSeries } from './dataSeries';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  series: Array<Serie> = [];
  promedioSeasons:number;
  
  constructor(private serieService: SerieService) {
    this.promedioSeasons=0;
   }
  
  getSerieList(): Array<Serie> {
    return dataSeries;
  }
  getCourses() {
    this.serieService.getSeries().subscribe(series => {
    this.series = series;
    let totalSeasons: number=0;
    let totalSeries: number=0;
    for (const element of this.series){
        let serie: Serie = element;
        totalSeries+=1;
        totalSeasons+= serie.seasons;
    }
    let promedio: number=(totalSeasons/totalSeries);
    this.promedioSeasons=promedio;


    });
  }


  ngOnInit() {
    this.getCourses();
  }

}
