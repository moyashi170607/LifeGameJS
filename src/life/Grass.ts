import { BaseLife } from "./BaseLife";

export class Grass extends BaseLife{
    constructor(scene:Phaser.Scene,gridX:number,gridY:number){
        super(scene,"grass",gridX,gridY);

        this.scene.add.existing(this);
    }

    override action(): void {
        const SURROUND_GRID:number[] = structuredClone(this.getSurroundingGrid());

    }
}