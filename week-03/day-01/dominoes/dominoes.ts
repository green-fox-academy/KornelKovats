
import {Domino} from "./domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2 ,4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}
function sortDominoes(dominoes: Domino[]):Domino[] {
    for (let i = 0; i < dominoes.length-1; i++) {
        for (let j = i +1; j < dominoes.length; j++) {
            if ( i==0 && dominoes[i].values[1] == dominoes[j].values[0]){
                    let helper = dominoes[i];
                    dominoes[i] = dominoes[j];
                    dominoes[j] = helper;
            }
            if (i > 1  &&   dominoes[i-1].values[1] == dominoes[j].values[0] ){
                let helper = dominoes[i];
                dominoes[i] = dominoes[j];
                dominoes[j] = helper;
            }
        }
    }
    return dominoes;
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

print(sortDominoes(dominoes));

//console.log(dominoes[0].values[1]);
