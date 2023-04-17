export interface Property {
    id:                 number;
    title:              string;
    desc:               string;
    propertyType:       string;
    propertyStatus:     string[];
    city:               string;
    zipCode:            string;
    neighborhood:       string[];
    street:             string[];
    location:           Location;
    formattedAddress:   string;
    features:           string[];
    featured:           boolean;
    priceDollar:        Price;
    priceEuro:          Price;
    bedrooms:           number;
    bathrooms:          number;
    garages:            number;
    area:               Area;
    yearBuilt:          number;
    ratingsCount:       number;
    ratingsValue:       number;
    additionalFeatures: AdditionalFeature[];
    gallery:            Gallery[];
    plans:              Plan[];
    videos:             Video[];
    published:          Date;
    lastUpdate:         Date;
    views:              number;
}

export interface AdditionalFeature {
    name:  string;
    value: string;
}

export interface Area {
    value: number;
    unit:  Unit;
}

export enum Unit {
    Ft = "ft²",
}

export interface Gallery {
    small:  string;
    medium: string;
    big:    string;
}

export interface Location {
    lat: number;
    lng: number;
}

export interface Plan {
    name:  PlanName;
    desc:  string;
    area:  Area;
    rooms: number;
    baths: number;
    image: Image;
}

export enum Image {
    AssetsImagesOthersPlan1Jpg = "assets/images/others/plan-1.jpg",
    AssetsImagesOthersPlan2Jpg = "assets/images/others/plan-2.jpg",
}

export enum PlanName {
    FirstFloor = "First floor",
    SecondFloor = "Second floor",
}

export interface Price {
    sale: number | null;
    rent: number | null;
}

export interface Video {
    name: VideoName;
    link: string;
}

export enum VideoName {
    Video = "Video",
    VideoWithNgxEmbedVideoPlugin = "Video with 'ngx-embed-video' plugin",
}