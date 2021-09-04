let timeLimit=60
let quotesArray=["The world isn't perfect. But it's there for us, doing the best it can...that's what makes it so damn beautiful.\"- Roy Mustang (Full Metal Alchemist)",
"Religion, ideology, resources, land, spite, love or just because... No matter how pathetic the reason, it’s enough to start war. War will never cease to exist... reasons can be thought up after the fact... Human nature pursues strife.\-  Pain (Naruto Shippuden)",
"People, who can’t throw something important away, can never hope to change anything.\"- Armin Arlert (Attack on Titan)",
"Why should I apologize for being a monster? Has anyone ever apologized for turning me into one?\" – Juuzou Suzuya (Tokyo Ghoul)",
"If you wanna make people dream, you’ve gotta start by believing in that dream yourself!\"– Seiya Kanie (Amagi Brilliant Park)",
"Giving up kills people. When people reject giving up... they finally win the right to transcend humanity.\"– Alucard (Hellsing)",
"There are no regrets. If one can be proud of one’s life, one should not wish for another chance.\"– Saber (Fate Stay Night)",
"If you don’t like your destiny, don’t accept it. Instead, have the courage to change it the way you want it to be.\"– Naruto Uzumaki (Naruto)",
"Sometimes I do feel like I’m a failure. Like there’s no hope for me. But even so, I’m not gonna give up. Ever!\"– Izuku Midoriya (My Hero Academia)"]

let timerText = document.querySelector('#seconds')
let errorText = document.querySelector('#err-num')
let accuracyText= document.querySelector('#acc-num')
let wpmText= document.querySelector('#wpm-number')
let cpmText= document.querySelector('#cpm-number')
let quotesText= document.querySelector('#words')
let inputText= document.querySelector('#input-text')
let restartBtn= document.querySelector('#restart-btn')
let wpmGroup= document.querySelector('#wpm')
let cpmGroup= document.querySelector('#cpm')
let errorGroup= document.querySelector('#error')
let accuracyGroup= document.querySelector('#accuracy')
let instruct =document.querySelector('#to-start')

let  timeLeft=timeLimit
let timeLapsed=0
let totalErrors=0
let errors=0
let accuracy=0
let charactersTyped=0
let currentQuote=''
let quoteNo=0
let timer=null


function updateQuote(){
  quotesText.textContent=null
  currentQuote= quotesArray[quoteNo]//current quote is now the first quote in the array

  currentQuote.split('').forEach(char=>{
    const charSpan=document.createElement('span')//creating span tag
    charSpan.innerText=char//inserting each letter in the charSpan
    quotesText.appendChild(charSpan)
  })

  if(quoteNo< quotesArray.length-1){
    quoteNo++
  }else{
    quoteNo=0
  }
}

function processInput(){
  currentInput= inputText.value
  currInputArray= currentInput.split('')//pushing each letter typed into an array

  charactersTyped++
  errors=0
  quoteSpanArray= quotesText.querySelectorAll('span')
  quoteSpanArray.forEach((char,index)=>{
    let typedChar= currInputArray[index]

    if(typedChar==null){
      char.classList.remove('incorrectChar')
      char.classList.remove('correctChar')
    }else if(typedChar==char.innerText){
      char.classList.add('correctChar')
      char.classList.remove('incorrectChar')
    }else{
      char.classList.remove('correctChar')
      char.classList.add('incorrectChar')

      errors++
    }
  })

  errorText.textContent=totalErrors+errors
  let correctCharacters=charactersTyped-(totalErrors+errors)
  let accuracyValue= Math.round((correctCharacters /charactersTyped) *100)

  accuracyText.textContent=accuracyValue

  if(currentInput.length===currentQuote.length){
    updateQuote()
    totalErrors+=errors
    inputText.value=''
  }
}errorText

function startGame(){
  resetValue()
  instruct.textContent=''
  clearInterval(timer)
  timer= setInterval(updateTimer,1000)

}

function resetValue(){
  errors=0
  accuracy=0
  timeLeft=timeLimit
  timeLapsed=0
  inputText.value=''
  inputText.disable=false
  totalErrors=0
  quoteNo=0
  inputText.style.display='block'
  updateQuote()

  instruct.textContent='click below to start typing'
  accuracyText.textContent=100
  errorText.textContent=0
  timerText.textContent=timeLimit+'s'
  wpmGroup.style.display='none'
  cpmGroup.style.display='none'
  clearInterval(timer)
}

function updateTimer(){
  if(timeLeft>0){
    timeLeft--
    timeLapsed++

    timerText.textContent=timeLeft+'s'
  }else{
    finishGame()
  }
}

function finishGame(){
  inputText.style.display='none'

  clearInterval(timer)
  instruct.textContent='click on restart to take another test'
  let grossWPM= Math.round(charactersTyped/5)
  let netWPM=Math.round((((charactersTyped / 5) / timeLapsed) * 60))
  let cpm= Math.round((charactersTyped/timeLapsed)*timeLimit)

  wpmText.textContent=netWPM
  cpmText.textContent=cpm

  wpmGroup.style.display='block'
  cpmGroup.style.display='block'


}













//hey hey hey




































//hey hey hey
