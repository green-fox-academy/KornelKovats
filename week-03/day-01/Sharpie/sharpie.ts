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
    getColor(color:string):string{
        return this.color;
    }
    getWidth(width: number):number{
        return this.width;
    }
}

export {Sharpie}