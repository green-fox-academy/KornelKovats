import {Pirate} from "./pirate";


class PirateNames {
    names: string[];

    fillPirateWithName(): string {
        let names: string[] = ['Maurisa', 'Filippa', 'Zandra', 'Philip', 'Mario', 'Nicholas', 'Alfred', 'Alessa', 'Claudette', 'Teresa'];
        return names[Math.round(Math.random() * 10)];

    }


}
export{PirateNames}