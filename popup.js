var date;
var button = document.getElementById('btn');
var sw = document.getElementById('flag');
var link = document.getElementsByTagName('a');

sw.onclick = swClick;
button.onclick = btnClick;

//ボタンクリック時にcontent_scriptから日付を受け取りhtml上で表示
function btnClick(){
  console.log(link);

  chrome.tabs.query({active : true, currentWindow : true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, { type : "url" }, function(response){
      if(response)
        date = response;
      else
        date = "message passing failed";
    });
  });

  //テキスト書き換え
  document.getElementById('txt').value = date;
}

function swClick(){
  var flag = sw.checked;

  if(flag)
    chrome.extension.getBackgroundPage().setFlag();
  else
    chrome.extension.getBackgroundPage().resetFlag();
}

function linkClick(){
  alert("clicked");
}
