import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Property } from 'src/app/interfaces/property.interface';
import { RealstateService } from 'src/app/services/realstate.service';

@Component({
  selector: 'app-properties-cards',
  templateUrl: './properties-cards.component.html',
  styleUrls: ['./properties-cards.component.scss']
})
export class PropertiesCardsComponent implements OnInit{
  @Input() fullWidthMode= false;
  @Output() addToCart= new EventEmitter
  notFound: boolean= false;
  public properties: Property[]=[];

  property: Property | undefined = {
    "id": 1,
    "title": "Modern and quirky flat",
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magnam veniam sit reprehenderit deserunt ad voluptates id aperiam veritatis! Nobis saepe quos eveniet numquam vitae quis, tenetur consectetur impedit dolore.",
    "propertyType": "Apartment",
    "propertyStatus": ["For Sale"],
    "city": "New York",
    "zipCode": "10033",
    "neighborhood": ["Astoria", "Midtown"],
    "street": ["Astoria Street #1", "Midtown Street #2"],
    "location": {
      "lat": 40.849150,
      "lng": -73.935100
    },
    "formattedAddress": "611 W 180th St, New York, NY 10033, USA",
    "features": ["Air Conditioning", "Barbeque", "Dryer", "Microwave", "Refrigerator", "Fireplace", "Swimming Pool", "TV Cable", "WiFi"],
    "priceDollar": {
      "sale": 1300000,
      "rent": null
    },
    "priceEuro": {
      "sale": 1160000,
      "rent": null
    },
    "yearBuilt": 2007,
    "ratingsCount": 3,
    "ratingsValue": 280,
    "gallery": [
      {
        "small": "assets/images/props/flat-1/1-small.jpg",
        "medium": "assets/images/props/flat-1/1-medium.jpg",
        "big": "assets/images/props/flat-1/1-big.jpg"
      },
      {
        "small": "assets/images/props/flat-1/2-small.jpg",
        "medium": "assets/images/props/flat-1/2-medium.jpg",
        "big": "assets/images/props/flat-1/2-big.jpg"
      },
      {
        "small": "assets/images/props/flat-1/3-small.jpg",
        "medium": "assets/images/props/flat-1/3-medium.jpg",
        "big": "assets/images/props/flat-1/3-big.jpg"
      },
      {
        "small": "assets/images/props/flat-1/4-small.jpg",
        "medium": "assets/images/props/flat-1/4-medium.jpg",
        "big": "assets/images/props/flat-1/4-big.jpg"
      }
    ],
    featured: false,
    bedrooms: 0,
    bathrooms: 0,
    garages: 0,
    area: undefined,
    additionalFeatures: [],
    plans: [],
    videos: [],
    published: undefined,
    lastUpdate: undefined,
    views: 0
  };
  constructor(private realstateService: RealstateService){}

  searchHouse(){
    this.notFound=false
   this.realstateService.loadProperties().subscribe({
      next: (properties)=>{console.log(properties); 
        this.properties=properties
      },
      error: (err)=>{this.notFound=true}
    })
  }

  

  onAddToCart():void{
   this.addToCart.emit(this.property)
  }

  ngOnInit(): void {
    this.searchHouse()
  }

}
