//var finalStack=[];
var finalString="";
var numString = "1234567890.";
var equalsPressed = false;
//var numArray = ["1","2","3","4","5","6","7","8","9","0"];
$(".col-lg-3").addClass("hoverable col-md-3 col-sm-3 col-xs-3");
$(".col-lg-3").addClass("light-blue darken-1");
$(".col-lg-6").addClass("hoverable col-md-6 col-sm-6 col-xs-6");


$(function()
 {
  $(".answerDiv").html("0");
  $(".stackDiv").html("0");
});


function displayNumberOnScreen(elem) 
{
    if(elem.id==="CE" || elem.id==="AC")
    {
        $(".answerDiv").html("0");
        $(".stackDiv").html("0");
        finalString="";
    }
    else if(finalString.length === 0 && (elem.id === "*" || elem.id === "/" || elem.id === "="))
    {
      console.log(elem.id);
      //doNothing
    }
    else if(finalString.length !== 0)
    {
      if(elem.id==="=")
      {
        var evaluation = eval(finalString);
        if(evaluation % 1 != 0)
        {
            $(".answerDiv").html(evaluation.toFixed(3));
            finalString+=elem.id;
            finalString+=evaluation.toFixed(3);
            $(".stackDiv").html(finalString);
            finalString=""+evaluation.toFixed(3);
            equalsPressed = true;
        }
        else
        {
          $(".answerDiv").html(evaluation);
          finalString+=elem.id;
          finalString+=evaluation;
          $(".stackDiv").html(finalString);
          finalString=""+evaluation;
          equalsPressed = true;
        }
        
      }
      else
      {
        if(numString.indexOf(finalString[finalString.length-1]) !== -1 && numString.indexOf(elem.id) !== -1 && !equalsPressed)
        {
          $(".answerDiv").html($(".answerDiv").text()+elem.id);
          finalString+=elem.id;
          $(".stackDiv").html(finalString); 
          equalsPressed = false;
        }
        
        else if(numString.indexOf(finalString[finalString.length-1]) !== -1 && equalsPressed && numString.indexOf(elem.id) !== -1)
        {
          $(".answerDiv").html(elem.id);
          finalString=elem.id;
          $(".stackDiv").html(finalString);
          equalsPressed = false;
        }
        else if(numString.indexOf(finalString[finalString.length-1]) !== -1 && numString.indexOf(elem.id) !== -1 && equalsPressed)
        {
          $(".answerDiv").html($(".answerDiv").text()+elem.id);
          finalString+=elem.id;
          $(".stackDiv").html(finalString);   
          equalsPressed = false;
        }
        else
        {
          $(".answerDiv").html(elem.id);
          finalString+=elem.id;
          $(".stackDiv").html(finalString); 
          equalsPressed = false;
        }
      }
      
    }
    else
    {
        $(".answerDiv").html(elem.id);
        finalString=elem.id;
        $(".stackDiv").html(finalString); 
    }
  
  if($(".answerDiv").text().length>9)
  {
    alert("Cannot handle such large values.");
    $(".answerDiv").html("0");
    $(".stackDiv").html("0");
    finalString="";
  }
  
}