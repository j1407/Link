//var pattern14 = new RegExp(/^[0-9]{14,}$/);

chrome.tabs.onUpdated.addListener( function(tabid, info, tab){
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
});

/*function calcDate(date){
  var result = 0;
  var cutDate = new Array(6);

  console.log(pattern.test(date));
  if(pattern.test(date)){
      cutDate[0] = date.slice(0,4);
      cutDate[1] = date.slice(4,6);
      cutDate[2] = date.slice(6,8);
      cutDate[3] = date.slice(8,10);
      cutDate[4] = date.slice(10,12);
      cutDate[5] = date.slice(12);

      for(var i=1; i<cutDate.length; i++){
        if(cutDate[i].slice(0,1) == "0")
          cutDate[i] = cutDate[i].slice(1);
        console.log(cutDate[i]);
      }
    }
  }
}*/
