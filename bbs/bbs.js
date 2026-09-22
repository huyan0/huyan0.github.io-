
(function(){
  var K='beichuang.epilogue';
  function get(){try{return localStorage.getItem(K)}catch(e){return null}}
  var t=get();
  if(t){
    var d=new Date(t);
    var s=d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+('0'+d.getHours()).slice(-2)+':'+('0'+d.getMinutes()).slice(-2);
    var on=document.getElementById('online');
    if(on){on.innerHTML='当前在线：<a href="space-uid-1.html">阿沅</a>';}
    var lo=document.getElementById('ayuan-last');
    if(lo){lo.textContent=s;}
  }
  var v=document.getElementById('vtoggle');
  if(v){v.addEventListener('click',function(){document.body.classList.toggle('vertical');v.textContent=document.body.classList.contains('vertical')?'横排显示':'竖排显示';});}
  try{console.log('%c你也是爱看源码的人啊。 —— 阿沅','color:#2F5F8C;font-size:13px');}catch(e){}
})();
