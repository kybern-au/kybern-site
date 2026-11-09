(function(){
  var b=document.querySelector('.menu-btn'),n=document.querySelector('.nav');
  if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)})}
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
    els.forEach(function(el){io.observe(el)});
  }else{els.forEach(function(el){el.classList.add('in')})}
  var f=document.getElementById('enquiry');
  if(f){f.addEventListener('submit',function(ev){
    ev.preventDefault();
    var v=function(id){return document.getElementById(id).value.trim()};
    var subj='Enquiry: '+v('topic')+(v('org')?' ('+v('org')+')':'');
    var body='Name: '+v('name')+'\nOrganisation: '+v('org')+'\nEmail: '+v('email')+'\nTopic: '+v('topic')+'\n\n'+v('msg');
    window.location.href='mailto:contact@kybern.com.au?subject='+encodeURIComponent(subj)+'&body='+encodeURIComponent(body);
  })}
})();
