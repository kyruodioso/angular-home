import { AfterViewInit, Component, Input, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Swiper,Navigation, Pagination} from 'swiper';
import { Agents } from 'src/app/interfaces/agent.interface';
import { SlidesService } from 'src/app/services/slides.service';

SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-agents-slides',
  templateUrl: './agents-slides.component.html',
  styleUrls: ['./agents-slides.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AgentsSlidesComponent implements AfterViewInit{

  @Input() agent: Agents[];

  ngAfterViewInit(): void {
   const swiper= new Swiper('.swiper-container',{
        slidesPerView:1,
        freeMode: true,
        loop:true,
        spaceBetween:7,
        breakpoints:{
          640:{
            slidesPerView:2,
            spaceBetween:10,
          },
          768:{
            slidesPerView:3,
            spaceBetween:10
          },
          1024:{
            slidesPerView:3,
            spaceBetween:10
          }
        }
   })
  }

}
