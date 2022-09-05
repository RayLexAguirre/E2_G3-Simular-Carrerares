"use strict";

export default class Race{

    constructor(){
        this.a = 0;
        this.b = 0;
        this.n = 0;
        this.x = 0;
    }

    carrera(){

        let a = this.a;
        let b = this.b;
        let i = 0;

        while (a < 100 && b < 100){
            
            i = i + 1;
            console.log(`${i}° Ronda`)

            let dado = Math.ceil(Math.random() * 6);
            if(dado == 3){
                a = a + 3;
                console.log("A =", a);
            } else if(dado == 1 || dado == 2){
                a = a + 1;
                console.log("A =", a);
            } else if(dado == 4 || dado == 5 || dado == 6){
                a = a + 2;
                console.log("A =", a);
            } 
            
            let dado2 = Math.ceil(Math.random() * 6);
            if(dado2 == 3){
                b = b + 3;
                console.log("B =", b);
            } else if(dado2 == 1 || dado2 == 2){
                b = b + 1;
                console.log("B =", b);
            }  else if(dado2 == 4 || dado2 == 5 || dado2 == 6){
                b = b + 2;
                console.log("B =", b);
            }

            if(a >= 100 && b >= 100){
                return (`El resultado es un EMPATE!!!`);
            } else if(a >= 100){
                return (`El Ganador es A!!!`);
            } else if(b >= 100){
                return (`El Ganador es B!!!`);
            }
        }
    }
    
}



