$(function() {

	$(".header-wrap li").hover(function() {
		$(this).find("ul").show();
	}, function() {
		$(this).find("ul").hide();
	})

	$(".header-wrap li").on("click", function() {
		$(this).find("ul").slideToggle();
	})

	$(".toggle-mnu").click(function() {
	  $(this).toggleClass("on");
	  $(".main-mnu").slideToggle();
	  if ($(this).is(".on")) {
		  	$(".header-wrap .right-mnu").animate({
		  	"right": "0"
		  }, 500)
		} else {
			$(".header-wrap .right-mnu").animate({
		  	"right": "-100%"
		  }, 500)
		}
	  return false;
	});

	$(".order-blocks .num-block .img").on("click", function() {
		$(this).parents(".wrap-order-box").find(".show-block").slideToggle();
	})

	var flagFirst = false;

	$(window).click(function(event) {
		if (flagFirst === true) {
		if ($(event.target).closest(".select-block ul").length) return;
		if ($(event.target).closest(".first-click").length) return;
	    $(".select-block ul").hide();
	    flagFirst = false;
	    event.stopPropagation();
		} 
  	});
	$(".select-block").on("click", function() {
		if (flagFirst === false) {
			$(this).find("ul").show();
			flagFirst = true;
		} else {
			$(this).find("ul").hide();
			flagFirst = false;
		}
		
		
	})
	$(".select-block li").on("click", function() {
		$(this).parents(".select-block").find(".first-click span").text($(this).text());
		$(this).parents("ul").hide();
		var text = $(".select-btc span").text()
		if (text.toLowerCase() == "btc") {
			$(".left-show-block .disable").attr("disabled", "disabled");
		} else {
			$(".left-show-block .disable").removeAttr("disabled");
		}

	})
	
	

	$(".close, .cancel").on("click", function() {
		$(".wrap-pop-lay").hide();
	})

	$(".create-but .create").on("click", function() {
		$(".wrap-pop-lay").show();
	})

	$(".request-block").hover(function() {
		$(this).find(".hover-block").show();
		var hRequest = $(this).height() / 2;
		var hHover = $(this).find(".hover-block").height() / 2 +  5;
		var resH = hHover - hRequest;
		$(this).find(".hover-block").css({
			"top": "-" + resH + "px"
		})
	}, function() {
		$(this).find(".hover-block").hide();
	})

	

	$(".accaunt-page table tr").not(".first-tr").on("click", function() {
		$(this).addClass("active");
	})	

	$(".accaunt-page .left-show-block .close").on("click", function() {
		$(".left-show-block").animate({
			"margin-right": "0px"
		})
	})

	$(".my-page .left-show-block .close").on("click", function() {
		$(".left-show-block").animate({
			"right": "-500px"
		}, function() {
			$(".left-show-block").addClass("hide-but");
		})
		$(".my-page .wrap-resin-part").animate({
			"margin-right": "20px"
		})

		$(this).toggleClass("rotate");
		if (!$(this).hasClass("rotate")) {
			$(".my-page .wrap-resin-part").animate({
				"margin-right": "500px"
			})
			$(".left-show-block").animate({
				"right": "0px"
			}, function() {
				$(".left-show-block").removeClass("hide-but");
			})
			
		} 
	})



	$(".wrap-toolbar .add").on("click", function() {
		$(".accaunt-page .left-show-block").animate({
			"margin-right": "660px"
		})
	})

	$(".wrap-toolbar .edit").on("click", function() {
		$(".accaunt-page .left-show-block").animate({
			"margin-right": "660px"
		})
	})

	$(".require").on("click", function() {
		$(".require").trigger("input")	})

	$(".require").on("input", function() {
		if ($(this).val() === "") {
			$(".warning-p").addClass("active");
			$(".stop").addClass("active");
		} else {
			$(".warning-p").removeClass("active");
			$(".stop").removeClass("active");
		}
		
	})

	$(".tab").on("click", function() {
		$(this).parents("p").next().slideToggle();
	})

	$(".static-block").on("click", function(e) {
		e.preventDefault();
		$(this).hide();
		$(".dinamic-block").show();
	})

	$("div.tab").on("click", function() {
		$(this).parents(".content").find(".tab-item").not($(this).next()).slideUp();
		$(this).next().slideToggle();
	})

	$(".popup").on("click", function() {
		var targets = $(this).attr("href");
		$(targets).show();
		$(".form-pop").each(function() {
			$(this).not("#main-wrap-left").css({
				"margin-top": "-" + ($(this).height() / 2) + "px",
				"margin-left": "-" + ($(this).width() / 2) + "px"
			})
		})
		if ($(this).attr("href") == "#pop6") {
			$(".time-hide").animate({
				"opacity": "0"
			}, 2000)
		}
	})

	$(".mavro table.template tr").not(".first-tr").on("click", function() {
		$(this).addClass("active");
	})

	$(".my-page .okey").on("click", function() {
		$(this).parents(".confirmation").hide();
		$(".dinamic-block").hide();
		$(".static-block").show();
	})



	$(".wrap-item.start-buts").on("click", function() {
		$(this).addClass("active");
		$(this).find("input").addClass("active");
	})

	$(".start-buts .wrap-inp").on("click", function() {
		$(this).parents(".right").find("a").show();
	})

	$(".chan").on("click", function() {
		$(this).parents(".wrap-links").find("a").hide();
		$(this).parents(".right").find(".wrap-inp").show();
	})

	$("#pop6 input").on("input", function() {
		$(".start-buts").addClass("active-blue");
	})
	
	


});
