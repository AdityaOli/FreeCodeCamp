$( "#allcircle")
  .mouseover(function() 
  {
    $(this).html("All");
    $(this).css("cursor","pointer");
    $(this).css("font-size","20px");
  })
  .mouseout(function() 
  {
    $(this).css("color","red");
  $(this).css("font-size","15px");
    //$(this).html("");
  });

$( "#incircle")
  .mouseover(function() 
  {
    $(this).html("Online");
    $(this).css("cursor","pointer");
   $(this).css("font-size","20px");
  })
  .mouseout(function() 
  {
    $(this).css("color","green");
   $(this).css("font-size","15px");
    //$(this).html("");
  });
$( "#offcircle")
  .mouseover(function() 
  {
    $(this).html(" Offline ");
  $(this).css("cursor","pointer");
   $(this).css("font-size","20px");
  })
  .mouseout(function() 
  {
    $(this).css("color","darkgray");
   $(this).css("font-size","15px");
    //$(this).html("");
  });


$(function() 
{   
      var userList  = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
      //apiCall(userList);
      var title, i;
      for (i = 0; i < userList.length; i += 1) 
      {
          title = userList[i];
          $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/"+title,(function(thisi) 
          {
                return function(json) 
                {
                   var status="";
                 if(json.stream != null && json.stream.channel!=null && json.stream.channel["url"]!=null)
                 {
                    status  = "<a href='"+json.stream.channel["url"]+"' target='_blank'>"+json.stream.channel["url"]+"</a>";
                 }
                 else
                 {
                     status = "Offline";
                 }
          
                var Stream = userList[thisi];
                if(json.stream!=null && json.stream["game"]!=null)
                {
                    Stream=Stream+" : streaming "+json.stream["game"];
                }
                $(".panel-group").append
                (
       "<div class='panel panel-default'><div class='panel-heading'>"+Stream+"</div><div class='panel-body'>"+status+"</div></div>" 
                ); 
                };
             }(i)) // calling the function with the current value
          );
      }
});

$(".All").click(function()
 {
      $(".panel-group").html("");
      var userList  = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
      var title, i;
      for (i = 0; i < userList.length; i += 1) 
      {
          title = userList[i];
          $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/"+title,(function(thisi) 
          {
                return function(json) 
                {
                   var status="";
                 if(json.stream != null && json.stream.channel!=null && json.stream.channel["url"]!=null)
                 {
                    status  = "<a href='"+json.stream.channel["url"]+"' target='_blank'>"+json.stream.channel["url"]+"</a>";
                 }
                 else
                 {
                     status = "Offline";
                 }
                
                var Stream = userList[thisi];
                if(json.stream!=null && json.stream["game"]!=null)
                {
                    Stream=Stream+" : streaming "+json.stream["game"];
                }
                $(".panel-group").append
                (
       "<div class='panel panel-default'><div class='panel-heading'>"+Stream+"</div><div class='panel-body'>"+status+"</div></div>" 
                ); 
                };
             }(i)) // calling the function with the current value
          );
      }
});

$(".Online").click(function()
 {
      $(".panel-group").html("");
      var userList  = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
      var title, i;
      for (i = 0; i < userList.length; i += 1) 
      {
          title = userList[i];
          $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/"+title,(function(thisi) 
          {
                return function(json) 
                {
                   var status="";
                 if(json.stream != null && json.stream.channel!=null && json.stream.channel["url"]!=null)
                 {
                    status  = "<a href='"+json.stream.channel["url"]+"' target='_blank'>"+json.stream.channel["url"]+"</a>";
                 }                
          
                  if(json.stream!=null && json.stream.channel!=null && json.stream.channel["name"]!=null)
                   {
                     var Stream = userList[thisi];
                      if(json.stream!=null && json.stream["game"]!=null)
                      {
                          Stream=Stream+" : streaming "+json.stream["game"];
                      }
                      $(".panel-group").append
                      (
             "<div class='panel panel-default'><div class='panel-heading'>"+Stream+"</div><div class='panel-body'>"+status+"</div></div>" 
                      ); 
                   }
                };
             }(i)) // calling the function with the current value
          );
      }
});
$(".Offline").click(function()
 {
      $(".panel-group").html("");
      var userList  = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
      var title, i;
      for (i = 0; i < userList.length; i += 1) 
      {
          title = userList[i];
          $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/"+title,(function(thisi) 
          {
                return function(json) 
                {
                   var status="";
                 if(json.stream != null && json.stream.channel!=null && json.stream.channel["url"]!=null)
                 {
                    status  = "<a href='"+json.stream.channel["url"]+"' target='_blank'>"+json.stream.channel["url"]+"</a>";
                 }
                 else
                 {
                     status = "Offline";
                 }
                
          
                if(status==="Offline")
                  {
                    $(".panel-group").append
                (
       "<div class='panel panel-default'><div class='panel-heading'>"+userList[thisi]+"</div><div class='panel-body'>"+status+"</div></div>" 
                ); 
                  }
                };
             }(i)) // calling the function with the current value
          );
      }
});

$("#searchButton").click(
function()
{
  var textInputValue = $('#usr').val();
  if(textInputValue != null && textInputValue!="")
  {
          
          $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/"+textInputValue, function(json)
          {
                var status="";
                   if(json.stream != null && json.stream.channel!=null && json.stream.channel["url"]!=null)
                   {
                      status  = "<a href='"+json.stream.channel["url"]+"' target='_blank'>"+json.stream.channel["url"]+"</a>";
                   }
                   else
                   {
                       status = "Offline";
                   }
                  var Stream = textInputValue;
                  if(json.stream!=null && json.stream["game"]!=null)
                  {
                      Stream=Stream+" : streaming "+json.stream["game"];
                  }
                  $(".panel-group").html("");
                    $(".panel-group").append
                      (
             "<div class='panel panel-default'><div class='panel-heading'>"+Stream+"</div><div class='panel-body'>"+status+"</div></div>" 
                      ); 
          });
        }
});