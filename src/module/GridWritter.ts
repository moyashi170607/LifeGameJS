import { BaseLife } from "../life/BaseLife";
import { Grass } from "../life/Grass";
import { setting } from "../setting"
import { GridManager } from "./GridManager";

export class GridWritter extends Phaser.GameObjects.Zone{
    pointer: Phaser.Input.Pointer;
    spawnedLife:number;

    constructor(scene:Phaser.Scene){
        const X:number = setting.startPosition.x;
        const Y:number = setting.startPosition.y
        const WIDTH:number = setting.grid.width * setting.grid.x_length;
        const HEIGHT:number = setting.grid.height * setting.grid.y_length;

        super(scene,X,Y,WIDTH,HEIGHT);

        this.setOrigin(0,0);

        this.spawnedLife = 1;

        this.setInteractive({useHandCursor:true});

        this.pointer = this.scene.input.activePointer;

        this.on("pointerup",()=>{
            let pointerX:number = this.pointer.x - setting.startPosition.x;
            let pointerY:number = this.pointer.y - setting.startPosition.y;

            let gridX:number = 0;
            let gridY:number = 0;

            while(pointerX >= setting.grid.width){
                gridX++;
                pointerX = pointerX - setting.grid.width;
            }

            while(pointerY >= setting.grid.height){
                gridY++;
                pointerY = pointerY - setting.grid.height;
            }

            console.log(gridX + "," + gridY)
            if(GridManager.isNullGrid(gridX,gridY) != true){
                if(GridManager.grid[gridX][gridY] === 0){
                    GridManager.grid[gridX][gridY] = this.spawnedLife;

                    this.spawnLife(1,gridX,gridY)

                }else{
                    GridManager.grid[gridX][gridY] = 0;
                    this.spawnLife(0,gridX,gridY);
                }
            }else{
                console.log(GridManager.isNullGrid(gridX,gridY))
            }
        })

        this.scene.add.existing(this);
    }

    //mode 0 = 削除  1 = spawnedLifeに合わせて生物を追加
    spawnLife(mode:number,gridX:number,gridY:number):void{
        if(mode === 0){

        }else{
            switch(this.spawnedLife){
                case 1:new Grass(this.scene,gridX,gridY);
            }
        }
    }
}