


 $(".table").click(function(event){
         event.preventDefault();

         var dest=$(this.hash).offset().top;
/*         if($(this.hash).offset().top > $(document).height() - $(window).height()){
              dest=$(document).height()-$(window).height();
         }else{
              dest=$(this.hash).offset().top;
         }*/
         
         $('html,body').animate({scrollTop:dest}, 1000,'swing');
     });

// $(window).scroll(function() {
//    var hT = $('#two').offset().top,
//        hH = $('#two').outerHeight(),
//        wH = $(window).height(),
//        wS = $(this).scrollTop();
//    if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
//       $('.table2').addClass('view')
//    } else {
//       $('.table2').removeClass('view')
//    }
// });
// $(".refs").on("click", function() {
// 	$(".references").addClass('show');
// });

// $(document).on('click', function(e) {
//     if ( $(e.target).closest('.refs').length ) {
//         $(".references").show();
//     }else if ( ! $(e.target).closest('.references').length ) {
//         $('.references').hide();
//     }
// });

// $(".refs").on("click", function() {
// 	$(".references").addClass('show');
// 	$(".container").addClass('min');
// 	$("h1").addClass('ref');
// });

// $(document).click(function(e) {
// 	if($('.references').hasClass('show')) {
// 		$('.references').removeClass('show');
// 	}});
  

$(".refs").click(function(){
	$(".references").toggleClass("show");
	$(".container").toggleClass("min");
	$("h1").toggleClass("ref");
	$("#subtitle").toggleClass("refere");
});


//   	$(".container").removeClass('min');
// 	$("h1").removeClass('ref');
//   e.stopPropagation();
// });


$(window).on("scroll", function() {
    


    if($(window).scrollTop() > $('#one').position().top + 350 ){
        $(".t1").addClass("view");
        // $('body').css('background', $("#one").attr("data-color"));
    } else {
       $(".t1").removeClass("view");

    }

	if($(window).scrollTop() > $('#beforetwo').position().top -275 ){
		$('body').addClass("color-two");
		$("#container-overlay").addClass("block-container-one");
	}
	else {
		$('body').removeClass("color-two");
		$("#container-overlay").removeClass("block-container-one");
	}
	if($(window).scrollTop() > $('#emptytwo').position().top -275 ){
		$('body').removeClass("color-two");
		$("#container-overlay").removeClass("block-container-one");
	}


    if($(window).scrollTop() > $('#two').position().top -275 ){
    	// $('body').addClass('changecolor');

var morphing = anime({
  targets: '#morphing #XMLID_12_',
  points: [
    { value: '816,568 49,568 816,12.5' },
  ],
  easing: 'easeOutQuad',
  duration: 300,
});

var morphing2 = anime({
  targets: '#morphing #XMLID_14_',
  points: [
    { value: '99,12.5 111,568 87,568' },
  ],
  easing: 'easeOutQuad',
  duration: 400,
});
var morphing3 = anime({
  targets: '#morphing #XMLID_15_',
  points: [
    { value: '145.5,568 130,12.5 161,12.5' },
  ],
  easing: 'easeOutQuad',
  duration: 300,
});

var morphing4 = anime({
  targets: '#morphing #XMLID_16_',
  points: [
    { value: '804,12.5 763,12.5 789,568' },
  ],
  easing: 'easeOutQuad',
  duration: 500,
});
var morphing5 = anime({
  targets: '#morphing #XMLID_17_',
  points: [
    { value: '32.5,12.5 53.1,568 81,12.5' },
  ],
  easing: 'easeOutQuad',
  duration: 300,
});

var morphing6 = anime({
  targets: '#morphing #XMLID_18_',
  points: [
    { value: '816,301.5 700,12.5 700,568' },
  ],
  easing: 'easeOutQuad',
  duration: 400,
});
var morphing7 = anime({
  targets: '#morphing #XMLID_19_',
  points: [
    { value: '728,568 754,568 741,12.5' },
  ],
  easing: 'easeOutQuad',
  duration: 300,
});

// var paths = [
//   {id: '#XMLID_12_', d: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369'},
//   {id: '#XMLID_14_', d: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369'},
//   {id: '#XMLID_15_', d: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369'},
//   {id: '#XMLID_16_', d: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369'},
//   {id: '#XMLID_17_', d: 'm 545.22983,415.36039 -20.70812,55.81093 16.92005,-3.28299 z'},
//   {id: '#XMLID_18_', d: 'm 545.22983,415.36039 -20.70812,55.81093 -29.04189,-24.74873 z'},
//   {id: '#XMLID_19_', d: 'm 506.33896,522.43656 18.18275,-51.26524 -29.86566,-26.49728 z'},];

//   var timeline = anime({ autoplay: true, direction: 'alternate', loop: true });

// paths.forEach(function(path, index) {
//   timeline
//   .add({
//     targets: path.id,
//     d: {
//       value: path.d,
//       duration: 1000,
//       easing: 'easeInOutQuad'
//     },
//     offset: 1000 + 10 * index
//   });
// });

    	// $(".poly1").addClass("poly1-two");
     //    $(".poly2").addClass("poly2-two");
     //    $(".poly3").addClass("poly3-two");
     //    $(".poly4").addClass("poly4-two");
     //    $(".poly5").addClass("poly5-two");
     //    $(".poly6").addClass("poly6-two");
    	$(".t1").removeClass("view");
        $(".t2").addClass("view");
        // $('body').removeClass("color");
        // $('body').css('background', $("#two").attr("data-color"));
        

    } else {
       $(".t2").removeClass("view");
       // $('body').removeClass("changecolor");
       // $(".poly1").removeClass("poly1-two");
       // $(".poly2").removeClass("poly2-two");
       // $(".poly3").removeClass("poly3-two");
       // $(".poly4").removeClass("poly4-two");
       // $(".poly5").removeClass("poly5-two");
       // $(".poly6").removeClass("poly6-two");


var morphing8 = anime({
  targets: '#morphing #XMLID_12_',
  points: [
    { value: '185.9,76.9 17.6,272.1 17.6,8' },
  ],
  easing: 'easeOutQuad',
  duration: 500,
});

var morphing9 = anime({
  targets: '#morphing #XMLID_14_',
  points: [
    { value: '6,156.6 101.8,215.7 53.9,341 ' },
  ],
  easing: 'easeOutQuad',
  duration: 1000,
});
var morphing10 = anime({
  targets: '#morphing #XMLID_15_',
  points: [
    { value: '820.2,42 711.9,179 820.2,289.1' },
  ],
  easing: 'easeOutQuad',
  duration: 800,
});

var morphing11 = anime({
  targets: '#morphing #XMLID_16_',
  points: [
    { value: '839.9,272.1 644.8,422.4 820.2,525.4' },
  ],
  easing: 'easeOutQuad',
  duration: 600,
});
var morphing12 = anime({
  targets: '#morphing #XMLID_17_',
  points: [
    { value: '711.9,280.1 732.5,386.6 796,324' },
  ],
  easing: 'easeOutQuad',
  duration: 500,
});

var morphing13 = anime({
  targets: '#morphing #XMLID_18_',
  points: [
    { value: '165.2,537.1 38.3,478.3 70.9,392' },
  ],
  easing: 'easeOutQuad',
  duration: 1000,
});
var morphing14 = anime({
  targets: '#morphing #XMLID_19_',
  points: [
    { value: '640.3,18.7 689.5,93 754,12.5' },
  ],
  easing: 'easeOutQuad',
  duration: 900,
});


    } 


    if($(window).scrollTop() > $('#beforethree').position().top -275 ){
		$('body').addClass("color-three");
		$("#container-overlay").addClass("block-container-two");
	}
	else {
		$('body').removeClass("color-three");
		$("#container-overlay").removeClass("block-container-two");
	}
	if($(window).scrollTop() > $('#emptythree').position().top -275 ){
		$('body').removeClass("color-three");
		$("#container-overlay").removeClass("block-container-two");
	}




    if($(window).scrollTop() > $('#three').position().top -275 ){
    	$(".t2").removeClass("view");
        $(".t3").addClass("view");
        // $(".poly1").addClass("poly1-three");
        // $(".poly2").addClass("poly2-three");
        // $(".poly3").addClass("poly3-three");
        // $(".poly4").addClass("poly4-three");
        // $(".poly5").addClass("poly5-three");
        // $(".poly6").addClass("poly6-three");

var morphing15 = anime({
  targets: '#morphing #XMLID_12_',
  points: [
    { value: '672,413 161,444 116,279 ' },
  ],
  easing: 'easeOutQuad',
  duration: 500,
});

var morphing16 = anime({
  targets: '#morphing #XMLID_14_',
  points: [
    { value: '804,347 48,412 653,433  ' },
  ],
  easing: 'easeOutQuad',
  duration: 1000,
});
var morphing17 = anime({
  targets: '#morphing #XMLID_15_',
  points: [
    { value: '145.5,458 25,421 82,357' },
  ],
  easing: 'easeOutQuad',
  duration: 800,
});

var morphing18 = anime({
  targets: '#morphing #XMLID_16_',
  points: [
    { value: '800,444 64,347 789,458' },
  ],
  easing: 'easeOutQuad',
  duration: 600,
});
var morphing19 = anime({
  targets: '#morphing #XMLID_17_',
  points: [
    { value: '622.4,419 660.5,458 706.4,393' },
  ],
  easing: 'easeOutQuad',
  duration: 500,
});

var morphing20 = anime({
  targets: '#morphing #XMLID_18_',
  points: [
    { value: '525,407.5 41,467 606,467' },
  ],
  easing: 'easeOutQuad',
  duration: 1000,
});
var morphing21 = anime({
  targets: '#morphing #XMLID_19_',
  points: [
    { value: '702,458 735,439.5 716,421' },
  ],
  easing: 'easeOutQuad',
  duration: 900,
});

    } else {
       $(".t3").removeClass("view");
       // $(".poly1").removeClass("poly1-three");
       // $(".poly2").removeClass("poly2-three");
       // $(".poly3").removeClass("poly3-three");
       // $(".poly4").removeClass("poly4-three");
       // $(".poly5").removeClass("poly5-three");
       // $(".poly6").removeClass("poly6-three");
    } 




    if($(window).scrollTop() > $('#beforefour').position().top -275 ){
		$('body').addClass("color-four");
		$("#container-overlay").addClass("block-container-three");
	}
	else {
		$('body').removeClass("color-four");
		$("#container-overlay").removeClass("block-container-three");
	}
	if($(window).scrollTop() > $('#emptyfour').position().top -275 ){
		$('body').removeClass("color-four");
		$("#container-overlay").removeClass("block-container-three");
	}



    if($(window).scrollTop() > $('#four').position().top -275 ){
    	$(".t3").removeClass("view");
        $(".t4").addClass("view");


var morphing22 = anime({
  targets: '#morphing #XMLID_12_',
  points: [
    { value: '814,58 30,87 809,34 ' },
  ],
  easing: 'easeOutQuad',
  duration: 500,
});

var morphing23 = anime({
  targets: '#morphing #XMLID_14_',
  points: [
    { value: '30,105 69,486 452,439.5  ' },
  ],
  easing: 'easeOutQuad',
  duration: 1000,
});
var morphing24 = anime({
  targets: '#morphing #XMLID_15_',
  points: [
    { value: '30,58 30,25 809,18' },
  ],
  easing: 'easeOutQuad',
  duration: 800,
});

var morphing25 = anime({
  targets: '#morphing #XMLID_16_',
  points: [
    { value: '800,444 792,67 274,425.5' },
  ],
  easing: 'easeOutQuad',
  duration: 600,
});
var morphing26 = anime({
  targets: '#morphing #XMLID_17_',
  points: [
    { value: '54.8,230 121,156 138.8,204' },
  ],
  easing: 'easeOutQuad',
  duration: 500,
});

var morphing27 = anime({
  targets: '#morphing #XMLID_18_',
  points: [
    { value: '809,18 30,393 789,458' },
  ],
  easing: 'easeOutQuad',
  duration: 1000,
});
var morphing28 = anime({
  targets: '#morphing #XMLID_19_',
  points: [
    { value: '714,295.5 772,280 735,251' },
  ],
  easing: 'easeOutQuad',
  duration: 900,
});



    } else {
       $(".t4").removeClass("view");
    } 

if($(window).scrollTop() > $('#beforefive').position().top -275 ){
		$('body').addClass("color-five");
		$("#container-overlay").addClass("block-container-four");
	}
	else {
		$('body').removeClass("color-five");
		$("#container-overlay").removeClass("block-container-four");
	}
	if($(window).scrollTop() > $('#emptyfive').position().top -275 ){
		$('body').removeClass("color-five");
		$("#container-overlay").removeClass("block-container-four");
	}



    if($(window).scrollTop() > $('#five').position().top -275 ){
    	$(".t4").removeClass("view");
        $(".t5").addClass("view");



var morphing29 = anime({
  targets: '#morphing #XMLID_12_',
  points: [
    { value: '830,58 743,134 809,34 ' },
  ],
  easing: 'easeOutQuad',
  duration: 500,
});

var morphing30 = anime({
  targets: '#morphing #XMLID_14_',
  points: [
    { value: '814,176 731,152 602,319.2  ' },
  ],
  easing: 'easeOutQuad',
  duration: 1000,
});
var morphing31 = anime({
  targets: '#morphing #XMLID_15_',
  points: [
    { value: '672,253 757,319.2 584,375' },
  ],
  easing: 'easeOutQuad',
  duration: 800,
});

var morphing32 = anime({
  targets: '#morphing #XMLID_16_',
  points: [
    { value: '226,375 123,178 48,207 ' },
  ],
  easing: 'easeOutQuad',
  duration: 600,
});
var morphing33 = anime({
  targets: '#morphing #XMLID_17_',
  points: [
    { value: '646,201 761,78 786,145' },
  ],
  easing: 'easeOutQuad',
  duration: 500,
});

var morphing34 = anime({
  targets: '#morphing #XMLID_18_',
  points: [
    { value: '134.3,230.4 21,297.6 183,344.2' },
  ],
  easing: 'easeOutQuad',
  duration: 1000,
});
var morphing35 = anime({
  targets: '#morphing #XMLID_19_',
  points: [
    { value: '108,201 134.3,259.9 97.3,249' },
  ],
  easing: 'easeOutQuad',
  duration: 900,
});

    } else {
       $(".t5").removeClass("view");
    } 

if($(window).scrollTop() > $('#beforesix').position().top -275 ){
		$('body').addClass("color-six");
		$("#container-overlay").addClass("block-container-five");
	}
	else {
		$('body').removeClass("color-six");
		$("#container-overlay").removeClass("block-container-five");
	}
	if($(window).scrollTop() > $('#emptysix').position().top -275 ){
		$('body').removeClass("color-six");
		$("#container-overlay").removeClass("block-container-five");
	}



    if($(window).scrollTop() > $('#six').position().top -275 ){
    	$(".t5").removeClass("view");
        $(".t6").addClass("view");



var morphing29 = anime({
  targets: '#morphing #XMLID_12_',
  points: [
    { value: '16,428 21,62 823,75  ' },
  ],
  easing: 'easeOutQuad',
  duration: 500,
});

var morphing30 = anime({
  targets: '#morphing #XMLID_14_',
  points: [
    { value: '777,412 16,428 803,480  ' },
  ],
  easing: 'easeOutQuad',
  duration: 1000,
});
var morphing31 = anime({
  targets: '#morphing #XMLID_15_',
  points: [
    { value: '16,494 821,391 803,480' },
  ],
  easing: 'easeOutQuad',
  duration: 800,
});

var morphing32 = anime({
  targets: '#morphing #XMLID_16_',
  points: [
    { value: '829,93 72,22 21,62 ' },
  ],
  easing: 'easeOutQuad',
  duration: 600,
});
var morphing33 = anime({
  targets: '#morphing #XMLID_17_',
  points: [
    { value: '16,428 21,468 803,480 ' },
  ],
  easing: 'easeOutQuad',
  duration: 500,
});

var morphing34 = anime({
  targets: '#morphing #XMLID_18_',
  points: [
    { value: '21,468 16,494 777,412' },
  ],
  easing: 'easeOutQuad',
  duration: 1000,
});
var morphing35 = anime({
  targets: '#morphing #XMLID_19_',
  points: [
    { value: '72,22 823,75 829,93' },
  ],
  easing: 'easeOutQuad',
  duration: 900,
});


    } else {
       $(".t6").removeClass("view");
    } 


    if($(window).scrollTop() > $('#beforeseven').position().top -275 ){
		$('body').addClass("color-seven");
		$("#container-overlay").addClass("block-container-six");
	}
	else {
		$('body').removeClass("color-seven");
		$("#container-overlay").removeClass("block-container-six");
	}
	if($(window).scrollTop() > $('#emptyseven').position().top -275 ){
		$('body').removeClass("color-seven");

	}




        if($(window).scrollTop() > $('#seven').position().top -275 ){
    	$(".t6").removeClass("view");
        $(".t7").addClass("view");



var morphing8 = anime({
  targets: '#morphing #XMLID_12_',
  points: [
    { value: '185.9,76.9 17.6,272.1 17.6,8' },
  ],
  easing: 'easeOutQuad',
  duration: 500,
});

var morphing9 = anime({
  targets: '#morphing #XMLID_14_',
  points: [
    { value: '6,156.6 101.8,215.7 53.9,341 ' },
  ],
  easing: 'easeOutQuad',
  duration: 1000,
});
var morphing10 = anime({
  targets: '#morphing #XMLID_15_',
  points: [
    { value: '820.2,42 711.9,179 820.2,289.1' },
  ],
  easing: 'easeOutQuad',
  duration: 800,
});

var morphing11 = anime({
  targets: '#morphing #XMLID_16_',
  points: [
    { value: '839.9,272.1 644.8,422.4 820.2,525.4' },
  ],
  easing: 'easeOutQuad',
  duration: 600,
});
var morphing12 = anime({
  targets: '#morphing #XMLID_17_',
  points: [
    { value: '711.9,280.1 732.5,386.6 796,324' },
  ],
  easing: 'easeOutQuad',
  duration: 500,
});

var morphing13 = anime({
  targets: '#morphing #XMLID_18_',
  points: [
    { value: '165.2,537.1 38.3,478.3 70.9,392' },
  ],
  easing: 'easeOutQuad',
  duration: 1000,
});
var morphing14 = anime({
  targets: '#morphing #XMLID_19_',
  points: [
    { value: '640.3,18.7 689.5,93 754,12.5' },
  ],
  easing: 'easeOutQuad',
  duration: 900,
});



    } else {
       $(".t7").removeClass("view");
    } 
 });
