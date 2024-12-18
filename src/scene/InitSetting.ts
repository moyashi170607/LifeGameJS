/*
0 = なし
1 = 草
*/

import { GridManager } from "../module/GridManager";
import { GridWritter } from "../module/GridWritter";
import { setting } from "../setting";

export class InitSetting extends Phaser.Scene{
    ground:Phaser.GameObjects.Rectangle[][] = [];
    gridWritter: any;

    constructor(){
        super({key:"init-setting",active:false});
    }

    preload(){
        
    }

    create(){
        this.cameras.main.setBackgroundColor("#616161");

        GridManager.init(setting.grid.x_length,setting.grid.y_length);


        this.ground[0] = new Array(setting.grid.y_length);

        for(let i=1;i<setting.grid.x_length;i++){
            this.ground.push(new Array(setting.grid.y_length));
        }

        for(let i=0;i<setting.grid.x_length;i++){
            for(let l=0;l<setting.grid.y_length;l++){
                const X:number = setting.startPosition.x + setting.grid.width*i;
                const Y:number = setting.startPosition.y + setting.grid.height*l;
                this.ground[i][l] = this.add.rectangle(X,Y,setting.grid.width,setting.grid.height,setting.grid.color)
                this.ground[i][l].setOrigin(0,0);
                this.ground[i][l].setStrokeStyle(setting.grid.line_width,setting.grid.strokeColor);
            }
        }

        this.gridWritter = new GridWritter(this);

    }
}