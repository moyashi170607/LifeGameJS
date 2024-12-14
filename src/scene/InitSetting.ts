/*
0 = なし
1 = 草
*/

export class InitSetting extends Phaser.Scene{
    ground:number[][] = [];
    grid:Phaser.GameObjects.Rectangle[][] = [];

    constructor(){
        super({key:"init-setting",active:false});
    }

    preload(){
        
    }

    create(){
        const GRID:{X_LENGHT:number,Y_LENGHT:number,WIDTH:number,HEIGHT:number,LINE_WIDTH:number} = {
            X_LENGHT:10,
            Y_LENGHT:10,
            WIDTH:30,
            HEIGHT:30,
            LINE_WIDTH:5
        }

        this.cameras.main.setBackgroundColor("#616161");

        for(let i:number=0; i<GRID.X_LENGHT;i++){
            this.ground.push(Array(GRID.Y_LENGHT))
            this.grid.push(Array(GRID.Y_LENGHT))
        }

        for(let i:number=0; i<GRID.X_LENGHT; i++){
            for(let l:number=0;l<GRID.Y_LENGHT; l++){
                this.ground[i][l] = 0;
            }
        }

        const StartPositon:{X:number,Y:number} = {
            X:30,
            Y:50
        }

        for(let i:number=0; i<GRID.X_LENGHT; i++){
            for(let l:number=0;l<GRID.Y_LENGHT; l++){
                const X = StartPositon.X + GRID.WIDTH*l;
                const Y = StartPositon.Y + GRID.HEIGHT*i;

                switch(this.ground[i][l]){
                    case 0:
                        this.grid[i][l] = this.add.rectangle(X,Y,GRID.WIDTH,GRID.HEIGHT,0xa17000,1);
                }

                this.grid[i][l].setStrokeStyle(GRID.LINE_WIDTH,0x000000,1)
            }
        }
    }
}