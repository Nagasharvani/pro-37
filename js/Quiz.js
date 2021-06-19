class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    this.button.mousePressed(()=>{
      background("white")
      this.question.hide();
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();
     
     })

        
    //write code to change the background color here


    //write code to show a heading for showing the result of Quiz
      textSize(30)
      text("Showing the test results") 
  

    //call getContestantInfo( ) here
     static getContestantInfo(){
      var contestantCountRef=database.ref('contestants');
     contestantCountRef.on("value",(data)=>{
        allContestants=data.val();
      })
    }
  


    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined){
     fill("blue");
     textSize(20);
       //write code to add a note here
     text("Note:Contestants who answered correct are hightlighted in green!!",130,230)
    }

  



    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      var correctAns = "2";
      if(correctAns === allContestants[plr].answer)
      fill("green")
      else
      fill("red")
    }
  }
}


