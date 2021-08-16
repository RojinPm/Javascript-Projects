function AgeInDays(){


      var Birthday=prompt("Enter the year you born ..friend.....");

      if (Number(Birthday) != ""){

         var ageDays=(2021-Birthday)*365
        var h1=document.createElement('h1');
        var Text_Answer=document.createTextNode(" You are" + " " +   ageDays + " " + " Days Old") 
        h1.setAttribute('id','ageDays');
        h1.appendChild(Text_Answer);
        document.getElementById("inside-result-box").appendChild(h1).style.fontFamily="sans-serif";
        document.getElementById("inside-result-box").appendChild(h1).style.color="red";
     
      }else{

        alert("Enter any input")
      }
}

function reset(){

     document.getElementById("ageDays").remove()
 
}

function CatGenerator(){
 
    var image=document.createElement("img");
    var div=document.getElementById("cat-gen-div");
    image.src="cat.jpg";
    image.setAttribute('id','cat-image')

    div.appendChild(image);
    // div.appendChild(image).style.height="150px"
    // div.appendChild(image).style.width="150px"
    // div.appendChild(image).style.border="2px solid green"
    // div.appendChild(image).style.padding="15px"

}

//Challenge-3

function rpsgame(Your_choice){

console.log(Your_choice)


var Human_choice,Bot_Choice;

Human_choice=Your_choice.id

Bot_Choice=number_toChoice(randomtag_in()); //generate random like rock or paper or scissor


console.log("Computer choice ", Bot_Choice)


 results=DecideWinner(Human_choice,Bot_Choice) //[0,1] Human failed | Bot won

 console.log(results)

 message=final_message(results); //

 console.log(message)

 rps_FrontEnd(Your_choice.id,Bot_Choice,message);

}


function randomtag_in(){

 
 return Math.floor(Math.random() * 3) //Randomly generate number between 0 and 2
 
}

function number_toChoice(number){

   return ['rock','paper','scissors'][number]; //Generate between 0-2 that means either rock or paper or scissor

}

function DecideWinner(Your_choice,computerChoice){

var rps_database = {

 'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0 },

 'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0 },

 'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}

};

var your_Score= rps_database[Your_choice][computerChoice]

var computer_Score=rps_database[computerChoice][Your_choice]


return [your_Score, computer_Score];

}

function final_message([your_Score,computer_Score]){

 
  if (your_Score === 0){

      return {'message': 'You lost !','color': 'red'};

  }else if(your_Score === 0.5){

      return {'message': 'You tied ', 'color': 'orange'};

  }else{

      return {'message': 'You won ', 'color': 'blue'};

  }

}

function rps_FrontEnd(humanImageChoice,botImageChoice,final_message){


var imageDatabse= {

  'rock': document.getElementById('rock').src,
  'paper': document.getElementById('paper').src,
  'scissors': document.getElementById('scissors').src

}
//remove all the images

document.getElementById('rock').remove()
document.getElementById('paper').remove()
document.getElementById('scissors').remove()

var humanDiv=document.createElement('div');
var botDiv=document.createElement('div');
var messageDiv=document.createElement('div');

humanDiv.innerHTML="<img src='" + imageDatabse[humanImageChoice] + "' height=150 width=150 style='box-shadow:0px 10px 40px rgba(37, 50, 255, 1);'>"
messageDiv.innerHTML="<h1 style='color: " + final_message['color'] + "; font-size:50px; padding:30px; font-family:sans-serif; '>" + final_message['message'] + "</h1>"
botDiv.innerHTML="<img src='" + imageDatabse[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 40px rgb(255, 12, 113);'>"
document.getElementById('container-3-flexdiv').appendChild(humanDiv)
document.getElementById('container-3-flexdiv').appendChild(botDiv)
document.getElementById('container-3-flexdiv').appendChild(messageDiv)




}