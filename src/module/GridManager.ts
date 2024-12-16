interface GridManager_type{
    grid:number[][],

    next_ground:Phaser.GameObjects.Rectangle[][]
    next_grid:number[][],
    init:(x_length:number,y_length:number)=>void,
    adapt_next_grid:()=>void
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

        console.log(this.grid);
    },
    adapt_next_grid:function(){
        this.grid = structuredClone(this.next_grid)
    }
}