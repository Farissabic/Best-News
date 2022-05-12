
export class Weather {

    public city :string;
    public curentTemp : number;
    public country :string;
    public maxTemp : number;
    public minTemp : number;
    public icon : string;
    public description : string;

    constructor(city :string, curentTemp : number, country : string, maxTemp : number, minTemp : number,icon : string , description : string){
        this.city = city;
        this.curentTemp = curentTemp;
        this.country = country;
        this.maxTemp = maxTemp;
        this.minTemp = minTemp;
        this.icon = icon;
        this.description = description;
    }
}