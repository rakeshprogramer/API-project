const QuoteName = document.querySelector(".quote");
authorName = document.querySelector(".author .name");
quotebtn = document.querySelector("button"),
quoteSound = document.querySelector(".sound"),
quoteCopy = document.querySelector(".copy"),
quoteinstagram = document.querySelector(".twitter");
// manupulate the html element to display in javascript.....////






//And nxtstep is we have to create the function, and decleare the function name, this function is helps to generate the random quotes by using fetch method with API//
function randomQuote(){
    quotebtn.innerText = "Quote Loding...";
    //It will fetch the API from  jsonplaceholder and get a random quote......
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
         QuoteName.innerText = result.content;
         authorName.innerText = result.author;
         quotebtn.innerText = "New Quote";
    });
}

//add the event listener for the button when you click........
quoteSound.addEventListener("click", ()=>{
    let utterance = new SpeechSynthesisUtterance(`${ QuoteName.innerText}  by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
   
});

// add an event listner for the copy btn, so that it can be copied to clipboard
quoteCopy.addEventListener("click", ()=>{
   navigator.clipboard.writeText(QuoteName.innerText);
   
});

//add the eventlistener for the instagram share.....
quoteinstagram.addEventListener("click", ()=>{
   let instUrl = `https://www.instagram.com/=${QuoteName.innerText}`;
   window.open(instUrl, "_blank");
    
 });


 ////This is button, when you click the button, it will generate the random quote by using API call function...
quotebtn.addEventListener("click", randomQuote);