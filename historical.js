var date;

//waybackMachineのページが読み込まれたときに実行
window.onload = function(){
  var head = document.head.innerHTML;         //<head>の中身
  var start = head.indexOf("WB_wombat_Init"); //WB_wombat_Initの開始位置
  var end = head.indexOf(';',start);          //行末の位置
  var line = head.slice(start,end);           //１行抜き出し
  date = line.replace(/[^0-9]/g,"");          //日付を抜き出し
}
