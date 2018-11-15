//var pattern14 = new RegExp(/^[0-9]{14,}$/);
var flag = false;
const request = new XMLHttpRequest();
const api_url = "http://archive.org/wayback/available?url=";
var request_url;

/*chrome.tabs.onUpdated.addListener( function(tabid, info, tab){
  if(info.status == 'complete'){
    chrome.storage.local.get("date", function(items){
      if(items.date){
        console.log(items.date);
        //calcDate(items.date);
      }
      else
        console.log("no data");
    });
  }
  else {
    chrome.runtime.sendMessage({ type : "url" }, function(response){
      if(response){
        console.log(response);
      }
      else {
        console.log("aaaaa");
      }
    });
  }
});*/

chrome.webRequest.onBeforeRequest.addListener( function(details){
  if(flag){
    var new_url = "https://twitter.com/KosenProcon/status/784997742326132738";
    return { redirectUrl : new_url };
  }
},
{ urls : ["https://web.archive.org/web*"] },
["blocking"]
);

function setFlag(){
  flag = true;
}

function resetFlag(){
  flag = false;
}

function getFlag(){
  return flag;
}
