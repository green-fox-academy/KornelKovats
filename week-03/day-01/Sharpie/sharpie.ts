class Sharpie {
    color: string;
    width: number;
    inkAmount: number = 100;
    constructor(color:string, width: number){
        this.color = color;
        this.width = width;
    }
    use(){
        this.inkAmount = this.inkAmount - 1;
    }
}