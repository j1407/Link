window.onload = function(){
  var str = document.head;
  var start = str.indexOf('WB_wombat_Init');
  var end = str.indexOf(';',start);
  var result = str.slice(start,end);

  console.log(result);
}
