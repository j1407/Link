var date;
var url;
var link = document.getElementsByTagName('a');
const api_url = "https://archive.org/wayback/available";
var request_url = "";


//waybackMachineのページが読み込まれたときに実行
window.onload = function(){
  let head = document.head.innerHTML;         //<head>の中身
  let start = head.indexOf("WB_wombat_Init"); //WB_wombat_Initの開始位置
  let end = head.indexOf(';',start);          //行末の位置
  let line = head.slice(start,end);           //１行抜き出し
  //lineは WB_wombat_Init('waybackmachineのurl','日付','保存されているページのurl');
  date = line.replace(/[^0-9]/g,"");          //日付を抜き出し

  //いろいろ微調整
  /*start = line.indexOf('\'',line.indexOf(',',line.indexOf(',')+1)+1) + 1;
  if(line.indexOf(':'))
    end = line.indexOf(':');
  else
    end = line.lastIndexOf('\'');
  //url = line.slice(start,end);
  */

  for(let i=0; i<link.length; i++){
    //ページ内リンククリック時イベント登録
    link[i].addEventListener("click", function(e){
      //リンク先のurllを抜き出す
      url = e.path[1].href;
      //WaybackMachineAPIに問い合わせ
      $.getJSON(`${api_url}?url=${request_url}`, function(response){
        json = response.archived_snapshots.closest;
        Object.keys(json).forEach( function(key){
          console.log(`${key} : ${json[key]}`);
        });
      });
    }, false);
  }
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

//リンク先のほうが古いか判定
function compDate(time1,time2){
  //YYYYMMDDHHMMにそろえる
  if(time1.length > 12)
    time1 = time1.substr(0,12);
  if(time2.length > 12)
    time2 = time2.substr(0,12);

  let date1 = new Date(time1.substr(0,4),time1.substr(4,2),time1.substr(6,2),time1.substr(8,2),time1.substr(10,2));
  let date2 = new Date(time2.substr(0,4),time2.substr(4,2),time2.substr(6,2),time2.substr(8,2),time2.substr(10,2));

  if(date1 > date2)
    return true;
  else
    return false;
}
