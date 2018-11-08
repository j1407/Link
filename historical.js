var date;

//waybackMachineのページが読み込まれたときに実行
window.onload = function(){
  var head = document.head.innerHTML;         //<head>の中身
  var start = head.indexOf("WB_wombat_Init"); //WB_wombat_Initの開始位置
  var end = head.indexOf(';',start);          //行末の位置
  var line = head.slice(start,end);           //１行抜き出し
  date = line.replace(/[^0-9]/g,"");          //日付を抜き出し
  chrome.storage.local.set({ 'date' : date });
  chrome.storage.local.set({ 'url' : location.href });
}

window.onunload = function(){
  chrome.storage.local.remove("date");
  chrome.storage.local.remove("url");
}

//popup.jsに日付を返す
chrome.runtime.onMessage.addListener( function(message, sender, sendResponse){
  switch(message.type)
  {
    case "date":
      sendResponse(date);
      break;
    case "url":
      sendResponse(location.href);
      break;
    default:
      sendResponse("unknown type");
      break;
  }
});
