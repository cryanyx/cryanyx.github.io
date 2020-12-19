function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

$(document).ready(function() {
			$('.minus').click(function () {
				var $input = $(this).parent().find('input');
				var count = parseInt($input.val()) - 1;
				count = count < 1 ? 1 : count;
				$input.val(count);
				$input.change();
				return false;
			});
			$('.plus').click(function () {
				var $input = $(this).parent().find('input');
				$input.val(parseInt($input.val()) + 1);
				$input.change();
				return false;
			});
		});

$(document).ready(function(){
  $("#heart-1").click(function(){
    if($("#heart-1").hasClass("liked")){
      $("#heart-1").html('<i class="fa fa-heart-o fa-2x" aria-hidden="true"></i>');
      $("#heart-1").removeClass("liked");
    }else{
      $("#heart-1").html('<i class="fa fa-heart fa-2x" aria-hidden="true"></i>');
      $("#heart-1").addClass("liked");
    }
  });
});


$(document).ready(function(){
  $("#heart-2").click(function(){
    if($("#heart-2").hasClass("liked")){
      $("#heart-2").html('<i class="fa fa-heart-o fa-2x" aria-hidden="true"></i>');
      $("#heart-2").removeClass("liked");
    }else{
      $("#heart-2").html('<i class="fa fa-heart fa-2x" aria-hidden="true"></i>');
      $("#heart-2").addClass("liked");
    }
  });
});


$(document).ready(function(){
  $("#heart-3").click(function(){
    if($("#heart-3").hasClass("liked")){
      $("#heart-3").html('<i class="fa fa-heart-o fa-2x" aria-hidden="true"></i>');
      $("#heart-3").removeClass("liked");
    }else{
      $("#heart-3").html('<i class="fa fa-heart fa-2x" aria-hidden="true"></i>');
      $("#heart-3").addClass("liked");
    }
  });
});


$(document).ready(function(){
  $("#heart-4").click(function(){
    if($("#heart-4").hasClass("liked")){
      $("#heart-4").html('<i class="fa fa-heart-o fa-2x" aria-hidden="true"></i>');
      $("#heart-4").removeClass("liked");
    }else{
      $("#heart-4").html('<i class="fa fa-heart fa-2x" aria-hidden="true"></i>');
      $("#heart-4").addClass("liked");
    }
  });
});


$(document).ready(function(){
  $("#heart-5").click(function(){
    if($("#heart-5").hasClass("liked")){
      $("#heart-5").html('<i class="fa fa-heart-o fa-2x" aria-hidden="true"></i>');
      $("#heart-5").removeClass("liked");
    }else{
      $("#heart-5").html('<i class="fa fa-heart fa-2x" aria-hidden="true"></i>');
      $("#heart-5").addClass("liked");
    }
  });
});


$(document).ready(function(){
  $("#heart-6").click(function(){
    if($("#heart-6").hasClass("liked")){
      $("#heart-6").html('<i class="fa fa-heart-o fa-2x" aria-hidden="true"></i>');
      $("#heart-6").removeClass("liked");
    }else{
      $("#heart-6").html('<i class="fa fa-heart fa-2x" aria-hidden="true"></i>');
      $("#heart-6").addClass("liked");
    }
  });
});


$(document).ready(function(){
  $("#heart-7").click(function(){
    if($("#heart-7").hasClass("liked")){
      $("#heart-7").html('<i class="fa fa-heart-o fa-2x" aria-hidden="true"></i>');
      $("#heart-7").removeClass("liked");
    }else{
      $("#heart-7").html('<i class="fa fa-heart fa-2x" aria-hidden="true"></i>');
      $("#heart-7").addClass("liked");
    }
  });
});


$(document).ready(function(){
  $("#heart-8").click(function(){
    if($("#heart-8").hasClass("liked")){
      $("#heart-8").html('<i class="fa fa-heart-o fa-2x" aria-hidden="true"></i>');
      $("#heart-8").removeClass("liked");
    }else{
      $("#heart-8").html('<i class="fa fa-heart fa-2x" aria-hidden="true"></i>');
      $("#heart-8").addClass("liked");
    }
  });
});


$(document).ready(function(){
  $("#heart-9").click(function(){
    if($("#heart-9").hasClass("liked")){
      $("#heart-9").html('<i class="fa fa-heart-o fa-2x" aria-hidden="true"></i>');
      $("#heart-9").removeClass("liked");
    }else{
      $("#heart-9").html('<i class="fa fa-heart fa-2x" aria-hidden="true"></i>');
      $("#heart-9").addClass("liked");
    }
  });
});


$(document).ready(function(){
  $("#heart-10").click(function(){
    if($("#heart-10").hasClass("liked")){
      $("#heart-10").html('<i class="fa fa-heart-o fa-2x" aria-hidden="true"></i>');
      $("#heart-10").removeClass("liked");
    }else{
      $("#heart-10").html('<i class="fa fa-heart fa-2x" aria-hidden="true"></i>');
      $("#heart-10").addClass("liked");
    }
  });
});