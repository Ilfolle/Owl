



$(".product-carousel").owlCarousel({
  autoplay: true,
  smartSpeed: 1500,
  margin: 25,
  loop: true,
  center: true,
  dots: false,
  nav: true,

  navText : [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>'
  ],
  responsive: {
0:{
          items:1
      },
      576:{
          items:1
      },
      768:{
          items:2
      },
      992:{
          items:3
      }
  }
});
$(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    loop: true,
    dots: true,
    nav: false,
    
});

(jQuery);


const Navlink = document.querySelectorAll(".nav-link");

Navlink.forEach(Element =>{
    Element.addEventListener("mouseover",()=>{
   
        Element.classList.add("show")
    })
    Element.addEventListener("mouseout",()=>{
        Element.classList.remove("show")
    })
})




var $videoSrc;
$('.btn-play').on('click',function () {
    $videoSrc = $(this).data("src");
});

$('#videoModal').on('shown.bs.modal', function (e) {
    $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
})
$('#videoModal').on('hide.bs.modal', function (e) {
    $("#video").attr('src', '');
    $videoSrc = '';  
})

$(document).ready(function() {
    // Quando viene cliccato il bottone "Torna in cima"
    $('#scrollToTopBtn').click(function() {
        // Anima lo scroll verso la parte superiore della pagina con una durata di 1000 millisecondi (1 secondo)
        $('html, body').animate({
            scrollTop: 0
        }, 1000); // Durata dell'animazione in millisecondi
    });
});
