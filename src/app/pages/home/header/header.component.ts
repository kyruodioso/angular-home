import { Component, OnInit,Input} from '@angular/core';
import { Slides } from 'src/app/interfaces/slides.interface';
import { Property } from 'src/app/interfaces/property.interface';
import { SlidesService } from 'src/app/services/slides.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{


  public slides: Slides[]=[]

  @Input() properties: Property[]


  constructor(private slidesService: SlidesService){}

goSlides(){
  this.slidesService.loadSlide().subscribe({
    next:(slides)=>{console.log(slides);
    this.slides=slides}
  })
}

  ngOnInit(): void {
  //  this.goSlide()
  console.log(`estos son los elementos ${this.properties}`)
  this.goSlides()
  };

}
