let btn = document.querySelector("button");
let input = document.querySelector("input");
let answer = document.querySelector(".answer");

function getRandomChinese(){
  return new Promise(function(resolve) {
      setTimeout(() => {
          let arr = [];
          let sign = Date.now().toString().slice(-5);
               for(let i = 0;i<input.value;i++){
               sign+=i;    
               arr.push(String.fromCharCode(sign));
           }
          resolve( arr.join(""));
      },input.value * 50);
  });
}
btn.addEventListener("click",() =>{
       getRandomChinese(input.value).then(word => {
      answer.innerHTML=
     ` <p> China word:${word}</p>`
  })
});