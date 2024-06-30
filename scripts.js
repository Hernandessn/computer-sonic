/*Segundos */
let number = 0
let cron = 0
let segundos = document.querySelector('.segundos')
/*Milisegundos */
let number1 = 0
let cron1 = 0
let milisegundos = document.querySelector('.milisegundos')
/*Minutos */
let min = 0;
let number2 = 0;
let minutos = document.querySelector('.minutes')
/*Imagem e fundo */

const fundo = document.querySelector('.fundo')
const fundo1 = document.querySelector('.fundo1')
const painel = document.querySelector('.painel')
const buttons = document.querySelector('.buttons')


function start() {
    cron = setInterval(function () {
        number++
        segundos.innerHTML = number + "s"
 if(number === 60){
     number = 0;
 }
      

    }, 1000)
    cron1 = setInterval(function () {
        number1++
        milisegundos.innerHTML = number1 + "ms"
        if(number1 === 1000){
            number1 = 0;
        }
    }, 10 * -3)
    min = setInterval(function(){
        number2++
        minutos.innerHTML = number2
    },60000) 
   
    fundo1.src = `./img/video.run.mp4`
    fundo1.style = `display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    left: 1%;
   margin-bottom:20%;
    margin-top: 1%;`
 fundo.src = ` ` 
 painel.style = `top:25%;`
 buttons.style = ` display: flex;
 gap: 10px;
position: relative; position: absolute;
display: flex;
align-items: center;
justify-content: center;
top: 145%;
left: 40%; `
}

function stop() {
    clearInterval(cron)
    clearInterval(cron1)
    clearInterval(min)
   
 painel.style = ``
 fundo1.src = ``
 fundo.src = `./img/sonic.wait.mp4 `
 fundo.style = `top:129%;`

 buttons.style = `  display: flex;
 gap: 10px;
position: relative; position: absolute;
display: flex;
align-items: center;
justify-content: center;
top: 140%;
left: 40%;`
 
}
function restart() {
    clearInterval(cron)
    number = 0
    segundos.innerHTML = 0
    clearInterval(cron1)
    
    number1 = 0
    milisegundos.innerHTML = 0
    clearInterval(min)
    number2 = 0;
    minutos.innerHTML = 0
    painel.style = ``
 fundo1.src = ``
 fundo.src = `./img/sonic.wait.mp4 `
}




/*
const mediaQuery = window.matchMedia('(max-width:700px)')
const handleWidthChange = (e)=>{
    if(e.matches){
       
            sonic.style = `
         width: 200px;z-index:3;
         position: relative; position: absolute;
         display: flex;
         align-items: center;
         justify-content: center;
         top: 10%;
         left: 2%;`
         painel.style = ``
         fundo1.src = ` `
         fundo.src = `./img/image.fundo.mp4 `
         buttons.style = `  display: flex;
         gap: 10px;
        position: relative; position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 10%;
        left: 40%;`
         
        
    }



}
mediaQuery.addEventListener(handleWidthChange);
handleWidthChange(mediaQuery)
/*Knuckles


const buttonsSonic = document.querySelector('.buttons')
const knuckles = document.querySelector('.knuckles')
const knucklesimg = document.querySelector('.knucklesimg')
const buttonsk = document.querySelector('.buttons-knuckles')


function trocarKnuckles(){
    buttonsk.style = `display:flex; padding: 5px 10px;
    background-color:  rgb(209, 12, 12);
  color: #fff;
  border: 2px solid yellow;
  border-radius: 10px;    `
    buttonsSonic.style = ` display:none;visibility: hidden;`
    sonic.style = `display:none;`
    sonic.src = `width="1px"`
}
function start1(){
    cron = setInterval(function(){
    number++
    segundos.innerHTML = number
    
    knucklesimg.src = './img/knuckles.run.gif'
    knucklesimg.style = `
    width: 200px;z-index:3;
    position: relative; position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 60%;
    left: 20%;`
    sonic.style = `display:none;`
    cron = 0;
    number = 0;
    },1000)
    cron1 = setInterval(function(){
        number1++
        milisegundos.innerHTML = number1
    },10*-3)
 }
 
 function stop1(){
  clearInterval(cron)
  clearInterval(cron1)
  knucklesimg.src = './img/knuckles.wait.gif'
  knucklesimg.style = `
  width: 100px;z-index:3;
  position: relative; position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 68%;
  left: 40%;`
  sonic.style = `display:none;`
 }
 function restart1(){
     clearInterval(cron)
     cron = 0
     number = 0
     segundos.innerHTML = 0
     clearInterval(cron1)
     cron1 = 0
     number1 = 0
     milisegundos.innerHTML = 0
     knucklesimg.src = './img/knuckles.wait.gif'
     knucklesimg.style = `
     width: 100px;z-index:3;
     position: relative; position: absolute;
     display: flex;
     align-items: center;
     justify-content: center;
     top: 68%;
     left: 40%;`
     sonic.style = `display:none;`
 }



 HTML
 
    <img class="knucklesimg">

  

   <div class="buttons-knuckles">
   <button onclick="start1()">Start</button>
   <button onclick="stop1()">Stop</button>
   <button onclick="restart1()">Restart</button>
   </div>
     <button onclick="trocarKnuckles()" class="knuckles">Knuckles</button>
*/