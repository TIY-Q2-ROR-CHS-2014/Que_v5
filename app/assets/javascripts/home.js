// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

console.log($("div"));
$(document).ready(function() {
  console.log($("div"));

  // If you are evluating an if statement,
  // you need to check .length because
  // if you don't, it will still be true
  // It returns a BLANK ARRAY: []
  // if( $("div.black_background").length > 0 ) {
  // }

  // This selects multiple layers.
  // It goes within the red_background
  // And finds all of the blue_backgrounds
  $("div.red_background .blue_background");

  // :first
  $("div.blue_background:first");
  // :last
  $("div.blue_background:last");
  // > - direct descendent
  $("div.red_background > div.blue_background");
  // :hidden
  $("div.blue_background:hidden");
  // :visible
  $("div.blue_background:visible");
  // .parent()
  $("h3.black_background").parent();
  // .html()
  // Will return the HTML inside the element
  $("h1").html()
  // to set: $("h1").html("Kevin's new haircut.")
  // .find()
  // traverses down the tree
  // returns any element that matches
  $("div.blue_background:first").find("h3")
  // .not()
  $("div.blue_background:first").find("h3").not(".black_background")
  // .closest()
  // Traverses up the tree
  // returns a single element
  $("h3.red_background").closest(".blue_background")
  // .attr()
  // Gets an attribute
  $("h3:last").attr("brian_is_cool");
  // Sets an attribute
  $("h3:last").attr("brian_is_cool", 1234);
  // .data()
  // Gets a data attribute
  $("h3:last").data("brian_is_cool");
  // Sets a data attribute
  $("h3:last").data("brian_is_cool", 1234);

  // people.each do |person|
  // .each
  $.each( $(".blue_background"), function(index, element) {
    console.log( index );
    console.log( $(element) );
  });
  // color maker

  // .css
  // returns the CSS of said property
  $("div.blue_background").css("background-color");
  // Sets background
  // $("div.blue_background").css("background-color", "red");

  // .addClass
  // $("div.blue_background").addClass("orange_background");
  // $("div.blue_background").removeClass("blue_background");

  // Anonymous function \/
  $("h3").mouseenter( function() {
    console.log("hovering");
    $(this).addClass("gray_background");
    $(this).removeClass("blue_background");
  });

  var preston_asks_really_good_questions = function() {
    console.log("Preston asks good questions");
  };

  var jake_explains_things_gud = function() {
    console.log("dudeman");
  };

  $("div").mouseenter(preston_asks_really_good_questions);
  $("div").mouseleave(jake_explains_things_gud);
  $("li").mouseenter(preston_asks_really_good_questions);
  $("li").mouseleave(jake_explains_things_gud);
  // This is a CALLBACK FUNCTION
  var mouseleave_callback = function() {
    console.log("leaving");
    $(this).addClass("blue_background");
    $(this).removeClass("gray_background");
  };

  $("h3").mouseleave(mouseleave_callback);

  $("li").click( function() {
    $(this).hide();
  });

  // $("a.hide_students").click( function() {
  //   $("li.student").hide();
  // });

  // $("a.show_students").click(function() {
  //   $("li.student").show();
  // });

  // var hide_show_students = function() {
  //   $("li.student").toggle();
  // };

  // $("a.hide_students").click(hide_show_students);

  // $("a.show_students").click(hide_show_students);

  $("a.remove_students").click(function() {
    $("ul.students").empty();
  });
  
  $("a.remove_student_from_list").click(function() {
    $(this).parent().remove();
  });

  $("li.student").append(":)")
  $("li.student").prepend("):")

});


