import { GridManager } from "../module/GridManager";
import { setting } from "../setting";

export class BaseLife extends Phaser.GameObjects.Sprite{
    grid:number[];

    constructor(scene:Phaser.Scene,texture:string,gridX:number,gridY:number){
        let x:number = setting.startPosition.x + gridX*setting.grid.width;
        let y:number = setting.startPosition.y + gridY*setting.grid.height;

        super(scene,x,y,texture);

        this.grid = [gridX,gridY];

        const SCALE_X = setting.life.defaultSize / this.width;
        const SCALE_Y = setting.life.defaultSize / this.height;

        this.setScale(SCALE_X,SCALE_Y);

        this.setOrigin(0,0)

    }

    //各生物がこのターン行う内容を規定する
    //派生クラスでオーバーライドしてください。
    action():void{
        alert("BaseLifeのacrion関数はオーバーライドされる必要があります。");
    }

    //周囲１マスの生物を取得する
    getSurroundingGrid():number[]{
        let surroundingGrid:number[] = new Array(8);

        const RESEARCH_GRID_LIST:number[][] = [
            [-1,-1],
            [0,-1],
            [1,-1],
            [-1,0],
            [1,0],
            [-1,1],
            [0,1],
            [1,1],
        ]

        for(let i=0; i<8; i++){
            surroundingGrid[i] = GridManager.getGridElement(this.grid[0] + RESEARCH_GRID_LIST[i][0],this.grid[1] + RESEARCH_GRID_LIST[i][1]);
        }

        return surroundingGrid;
    }
}