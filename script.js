var level=1;
var pattern=(String(Math.floor(Math.random() * 4)));
var answer="";
var played=false;
var start=false;
$(document).ready(function(){
  $("#greenButton").hide();
  $("#blueButton").hide();
  $("#redButton").hide();
  $("#yellowButton").hide();

  $("#start").click(function(){
        $("#start").hide();
        $("#greenButton").fadeIn(1000);
        $("#blueButton").fadeIn(2000);
        $("#redButton").fadeIn(3000);
        $("#yellowButton").fadeIn(4000);
        var counter = 6;
        var interval = setInterval(function() {
            counter--;
            $("#countDown").html("Begin in  " +counter );
            if (counter == 0) {
              start=true;
                $("#countDown").fadeOut(1000);

                console.log(pattern);
                clearInterval(interval);
            }
        }, 1000);
        $("#level").html("Level "+ level );
    });


    $("#greenButton").mousedown(function(){
        $("#greenButton").css("background-color", "#66ff66");
        greenSound.play();
        answer+="0";
        });
    $("#greenButton").mouseup(function(){
        $("#greenButton").css("background-color", "#00cc00");
        });
    $("#blueButton").mousedown(function(){
        $("#blueButton").css("background-color", "#66a3ff");
          blueSound.play();
          answer+="1";
        });
    $("#blueButton").mouseup(function(){
        $("#blueButton").css("background-color", "#0066ff");
        });
    $("#yellowButton").mousedown(function(){
        $("#yellowButton").css("background-color", "#ffff66");
          yellowSound.play();
          answer+="2";
        });
    $("#yellowButton").mouseup(function(){
        $("#yellowButton").css("background-color", "#ffff00");
        });
    $("#redButton").mousedown(function(){
        $("#redButton").css("background-color", "#ff6666");
          redSound.play();
          answer+="3";
        });
    $("#redButton").mouseup(function(){
        $("#redButton").css("background-color", "#ff0000");
        });




});



    setInterval(function(){
      console.log(answer);
        if(answer.length==pattern.length || answer.length>pattern.length){
          if(answer==pattern){
            level+=1;
              $("#level").html("Level "+ level );
                pattern+=(String(Math.floor(Math.random() * 4)));
                console.log("Current Pattern = " + pattern);
                answer="";
                played=false;
          }
          else{
            alert("no");
            location.reload();
          }
        }
    }, 1000);



    setInterval(function(){
    if(!played & start==true){
      played=true;

      var i = 0, howManyTimes = level;
    function f() {

        $("#greenButton").css("background-color", "#00cc00");
        $("#blueButton").css("background-color", "#0066ff");
        $("#yellowButton").css("background-color", "#ffff00");
        $("#redButton").css("background-color", "#ff0000");


        if(pattern[i]=="0"){
          $("#greenButton").css("background-color", "#66ff66");
          greenSound.play();
        }
        if(pattern[i]=="1"){
          $("#blueButton").css("background-color", "#66a3ff");
          blueSound.play();
        }
        if(pattern[i]=="2"){
          $("#yellowButton").css("background-color", "#ffff66");
          yellowSound.play();
        }
        if(pattern[i]=="3"){
          $("#redButton").css("background-color", "#ff6666");
          redSound.play();
        }
        i++;
        if( i < howManyTimes ){

            setTimeout( f, 1000 );

        }
    }
    f();






    }
  }, 2000);
