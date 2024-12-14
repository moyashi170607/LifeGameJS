import { defineConfig } from "vite"

export default defineConfig({
  	resolve: {
    	alias: {
            // src以下のフォルダへアクセスしやすくする
			'@/': `${__dirname}/src/`,
            // publicフォルダへのアクセスを短い文章で済ませたい
			"~/public": `${__dirname}/public/`
  		}
	}
})