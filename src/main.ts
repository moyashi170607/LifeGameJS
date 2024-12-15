//cssを読み込む
import Phaser from 'phaser3';
import './style.css'
import { SimulationMode } from './scene/SimulationMode';
import { InitSetting } from './scene/InitSetting';

export let gameScreen:HTMLElement | null;
export let gameScreenWidth:number;
export let gameScreenHeight:number;

class LoadScene extends Phaser.Scene{
  constructor(){
    super({key:"load-scene",active:true})
  }

  preload(){
    this.load.image("grass","/img/life/grass.png");
    this.load.image("grass2","/img/life/grass2.png");
  }

  create(){
    this.scene.start("init-setting")
  }
}

const config:Phaser.Types.Core.GameConfig = {
    width:800,
    height:800,
    type:Phaser.AUTO,
    parent:"app",
    antialias:false,
    pixelArt:true,
    scene:[
      LoadScene,
      InitSetting,
      SimulationMode
    ]
}

export class Game extends Phaser.Game {
    constructor(config:Phaser.Types.Core.GameConfig){
        super(config);
    }
}

let game:Phaser.Game;

window.addEventListener("load", ()=>{
    game = new Game(config);

    gameScreen = document.getElementById("app");
    if(gameScreen != null){
      gameScreenWidth = gameScreen.clientWidth;
      gameScreenHeight = gameScreen.clientHeight;
    }else{
      console.error("Error Not Found HTMLElement");
    }
})

window.addEventListener('resize', () => game.scale.refresh());
window.addEventListener('load', () => {game.scale.refresh()});