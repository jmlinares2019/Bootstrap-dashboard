/*--- top-tabs active state ---*/  

$('.top-tab').click(function(e){
    e.preventDefault();
    $('.top-tab').removeClass('active');
    $(this).toggleClass('active');
});

/*--- collapsable arrow rotation animation ---*/  

$('.aside-collapse').click(function(e){
    e.preventDefault();
    $('.collapse-arrow', this).toggleClass('down');
    $(this).toggleClass('open');
});