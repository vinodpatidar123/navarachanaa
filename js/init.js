(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();

  var options = [
    {selector: '.class', offset: 200, callback: 'globalFunction()' },
    {selector: '.other-class', offset: 200, callback: 'globalFunction()' },
  ];
  Materialize.scrollFire(options);


  $('.modal').modal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: .5, // Opacity of modal background
    inDuration: 300, // Transition in duration
    outDuration: 200, // Transition out duration
    startingTop: '4%', // Starting top style attribute
    endingTop: '10%', // Ending top style attribute
    ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
      console.log(modal, trigger);
    },
    complete: function() { } // Callback for Modal close
  }
);

$('a[href^="#"]').click(function() {
     var target = $(this.hash);
     if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
     if (target.length == 0) target = $('html');
     $('html, body').animate({ scrollTop: target.offset().top }, 1000);
     return false;
 });

  }); // end of document ready
})(jQuery); // end of jQuery name space
