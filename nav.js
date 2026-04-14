(function(){
  var pages = [
    {href:'index.html',      label:'Home'},
    {href:'what-we-do.html', label:'What We Do'},
    {href:'use-cases.html',  label:'Use Cases'},
    {href:'technology.html', label:'Technology'},
    {href:'installers.html', label:'Installers'},
    {href:'distribution.html',label:'Distribution'},
    {href:'contact.html',    label:'Contact'},
  ];
  var current = window.location.pathname.split('/').pop() || 'index.html';
  var links = pages.map(function(p){
    var on = (p.href === current) ? ' class="on"' : '';
    return '<li><a href="'+p.href+'"'+on+'>'+p.label+'</a></li>';
  }).join('');
  var html = '<nav><div class="nav-i">'
    + '<a href="index.html" class="n-logo"><svg id="Layer_1" width="110" height="48" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 209.78 92.44">  <!-- Generator: Adobe Illustrator 30.3.0, SVG Export Plug-In . SVG Version: 2.1.3 Build 182)  -->  <defs>    <style>      .st0 {        fill: none;        stroke: #3fc2e7;        stroke-miterlimit: 10;        stroke-width: 6px;      }      .st1 {        fill: #ffffff;        font-family: MyriadPro-Regular, \'Myriad Pro\';        font-size: 70.54px;      }    </style>  </defs>  <path class="st0" d="M82.33,46.22c0-19.32-15.68-35-35-35S12.33,26.9,12.33,46.22s15.68,35,35,35,35-15.68,35-35"/>  <text class="st1" transform="translate(101.33 66.92)"><tspan x="0" y="0">jaly</tspan></text></svg></a>'
    + '<ul class="n-links">'+links+'</ul>'
    + '<a href="contact.html" class="n-btn">Enquire Now</a>'
    + '</div></nav>';
  document.write(html);
})();
