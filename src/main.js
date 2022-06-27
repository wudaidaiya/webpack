import './banner.js'
import './tabs.js'
import '../src/styles/index.css'
import '../src/styles/index.less'
// index.js
import imgUrl from './assets/1.gif'
const theImg = document.createElement("img")
theImg.src = imgUrl
document.body.appendChild(theImg)
import imgUr from './assets/logo_small.png'
const Img = document.createElement("img")
Img.src = imgUr
document.body.appendChild(Img)