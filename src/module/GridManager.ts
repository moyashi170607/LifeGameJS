import { setting } from "../setting";

interface GridManager_type{
    grid:number[][],

    next_ground:Phaser.GameObjects.Rectangle[][]
    next_grid:number[][],
    init:(x_length:number,y_length:number)=>void,
    adapt_next_grid:()=>void,
    isNullGrid:(gridX:number,gridY:number)=>boolean,
    getGridElement:(gridX:number,gridY:number)=>number
}

export let GridManager:GridManager_type = {
    grid:[[]],
    next_ground:[[]],
    next_grid:[[]],

    init:function(x_length,y_length){
        this.grid[0] = new Array(y_length);

        for(let i=0;i<y_length;i++){
            this.grid[0][i] = 0;
        }

        for(let i=1;i<x_length;i++){
            this.grid.push(new Array(y_length));
            for(let l=0;l<y_length;l++){
                this.grid[i][l] = 0;
            }
        }

        this.next_grid = structuredClone(this.grid);
    },

    adapt_next_grid:function(){
        this.grid = structuredClone(this.next_grid)
    },

    isNullGrid(gridX,gridY):boolean{
        let tmp:boolean;

        if(gridX < 0 || gridY < 0 || gridX >= setting.grid.x_length || gridY >= setting.grid.y_length || this.grid[gridX][gridY] === null || this.grid[gridX][gridY] === undefined){
            tmp = true;
        }else{
            tmp = false;
        }

        return tmp;
    },

    getGridElement(gridX,gridY){
        if(this.isNullGrid(gridX,gridY) == true){
            return -1;
        }else{
            return this.grid[gridX][gridY];
        }
    }
}