//demo.js
//this will help embed the embed.html into the demo.html as a responsive iframe.
//the embeded page must include this code 
//var ir = responsiveIframe();
//ir.allowResponsiveEmbedding();
//and also include the jquery.responsiveiframe.min.js
//bootstrap used just to make demo page responsive. not needed tp iFrame functionality.

$( document ).ready(function() {
   
  ;(function($){          
      $(function(){
        $('#embed').responsiveIframe({ xdomain: '*'});
      });        
  })(jQuery);
    
});