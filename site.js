(function(){
  var C = window.AI_CFO || {};
  if (C.pixelId) {
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', C.pixelId); fbq('track', 'PageView');
  }
  function track(ev, p){ try{ if(window.fbq) fbq('track', ev, p||{}); }catch(e){} }
  document.querySelectorAll('[data-pay]').forEach(function(a){
    if (C.payUrl) a.setAttribute('href', C.payUrl);
    a.addEventListener('click', function(e){
      if (!C.payUrl){ e.preventDefault(); alert('Оплату ще не підключено'); return; }
      track('InitiateCheckout', {value: C.price, currency: 'UAH'});
    });
  });
  document.querySelectorAll('[data-bot]').forEach(function(a){ a.setAttribute('href', C.botUrl); });
  if (document.querySelector('[data-thanks]')) track('Purchase', {value: C.price, currency: 'UAH'});
})();
