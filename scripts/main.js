$(document).ready(function () {
  var firstTab = $(".tablinks:first");
  firstTab.addClass("active");
  $("#" + firstTab.attr("data-target")).show();

  $(".tablinks").click(function () {
    var tabName = $(this).attr("data-target");

    $(".tabcontent").hide();
    $("#" + tabName).show();
    $(".tablinks").removeClass("active");
    $(this).addClass("active");
  });

  // tooltips

  var tooltips = {
    tooltip1: `Lorem ipsum 1`, // Contraceptive Services - Term
    tooltip2: `Lorem ipsum 2`  // Más tooltips según sea necesario
};

$(".tooltip-target").each(function() {
    var tooltipKey = $(this).data("tooltip-key");
    $(this).attr("data-tooltip", tooltips[tooltipKey]);
});

$(".tooltip-target").mouseenter(function() {
    // Crear y mostrar el tooltip
    var tooltipContent = $(this).attr("data-tooltip");
    $('<div class="tooltip-content">' + tooltipContent + '</div>').appendTo(this);
}).mouseleave(function() {
    // Eliminar el tooltip
    $(this).find(".tooltip-content").remove();
});
});
