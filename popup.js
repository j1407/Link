var date;

document.getElementById('btn').onclick = btnClick;

//ボタンクリック時にcontent_scriptから日付を受け取りhtml上で表示
function btnClick(){
  chrome.tabs.query({active : true, currentWindow : true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, { type : "date"}, function(response){
      if(response)
        date = response;
      else
        date = "message passing failed";
    });
  });

  //テキスト書き換え
  document.getElementById('txt').value = date;
}
