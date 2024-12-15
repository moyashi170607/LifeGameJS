//cssを読み込む
import "./style.css"
//PixiJSを読み込む
import { Application, Assets, AssetsClass, Graphics, Renderer, Sprite } from "pixi.js";

//gridの図形描写オブジェクトが格納される配列
//grid_graphics[x座標][y座標]
export let grid_graphics:Graphics[][] = [[]];

//テクスチャを読み込み
export let texture_dictionary:TextureDictionary = {
  grass:await Assets.load("/img/grass.png"),
  grass2:await Assets.load("/img/grass2.png")
};

//divを取得
const APP_ELEMENT = document.getElementById("app");

//ステージが格納される変数
let app:Application<Renderer>

//型情報
interface TextureDictionary{
  grass:AssetsClass,
  grass2:AssetsClass
}


const main = async () => {
  app = await createApp();
}

// 描画するためのステージを作成
const createApp = async () => {

  const app = new Application();

  await app.init({ background: '#cccccc' ,width:800 , height:800});

  if(APP_ELEMENT != null){
    APP_ELEMENT.appendChild(app.canvas);
  }else{
    console.error("idがappである要素が見つかりません");
  }

  return app
}

main();