/*
0 = なし
1 = 草
*/

export class SimulationMode extends Phaser.Scene{
    ground:number[][] = [[]];

    constructor(){
        super({key:"simulation-mode",active:false});
    }

    preload(){
        
    }

    create(){
        this.cameras.main.setBackgroundColor("#616161");

        for(let i:number=0; i<10; i++){
            for(let l:number=0;l<10; l++){
                this.ground[i][l] = 0;
            }
        }

        for(let i:number=0; i<10; i++){
            for(let l:number=0;l<10; l++){
                
            }
        }
    }
}