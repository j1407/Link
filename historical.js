var date;
var url;

//waybackMachineのページが読み込まれたときに実行
window.onload = function(){
  var head = document.head.innerHTML;         //<head>の中身
  var start = head.indexOf("WB_wombat_Init"); //WB_wombat_Initの開始位置
  var end = head.indexOf(';',start);          //行末の位置
  var line = head.slice(start,end);           //１行抜き出し
  //lineは WB_wombat_Init('waybackmachineのurl','日付','保存されているページのurl');
  date = line.replace(/[^0-9]/g,"");          //日付を抜き出し

  //いろいろ微調整
  start = line.indexOf('\'',line.indexOf(',',line.indexOf(',')+1)+1) + 1;
  end = line.lastIndexOf('\'');
  url = line.slice(start,end);
}

//メッセージ返信
chrome.runtime.onMessage.addListener( function(message, sender, sendResponse){
  switch(message.type){
    case "date":
      sendResponse(date);
      break;
    case "url":
      sendResponse(url);
      break;
    default:
      sendResponse("unknown type");
      break;
  }
});
