$(document).ready(function () {
  $("body").on("focus", "input", function (event) {
    $(this).attr("autocomplete", "off");
  });

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
    tooltip1: `Lorem ipsum 1`,
    tooltip2: `Lorem ipsum 2`,
  };

  $(".tooltip-target").each(function () {
    var tooltipKey = $(this).data("tooltip-key");
    $(this).attr("data-tooltip", tooltips[tooltipKey]);
  });

  $(".tooltip-target")
    .mouseenter(function () {
      var tooltipContent = $(this).attr("data-tooltip");
      $('<div class="tooltip-content">' + tooltipContent + "</div>").appendTo(
        this
      );
    })
    .mouseleave(function () {
      $(this).find(".tooltip-content").remove();
    });

    $(".toggle").click(function () {
      var target = $(this).data('target');
      $(target).toggle();
      $(this).find(".arrow").toggleClass("up");
    });

  $(document).off('dhis2.de.event.formLoaded').on('dhis2.de.event.formLoaded', function () {
    if ($("#CustomForm").length > 0) {
        $("#tabs").tabs();
        $("#CustomForm_Content").hide();
        new RenderRadioBtnTags();
        $("#loaderDiv").show();

        new dsetTranslation(function () {
            $("#loaderDiv").hide();
            $("#CustomForm_Content").show();
        });
    }

    // ============================================================================================================
    // GCACITranslation

    function dsetTranslation(_exeFunc) {
        var me = this;

        me.exeFunc = _exeFunc;

        me.optionSetTermId = "xdBjO8vRHss";

        me.loadedDataSetElementList = false;
        me.loadedOptionSetList = false;

        me.OPTION_KEY = "opt_c";


        // ----------------------------------------------------------------------------------------------
        // URLs

        me.QUERY_URL_TERMS = "../api/optionSets/" + me.optionSetTermId +
            ".json?fields=options[code,displayName]&paging=false";


        // ----------------------------------------------------------------------------------------------
        // HTML Element


        me.tableTag = $("body");

        // ----------------------------------------------------------------------------------------------
        // Init method

        me.init = function () {
            console.log("INIT translation ... ");
            me.translateOptionSetList();
        }

        // ----------------------------------------------------------------------------------------------
        // Supportive methods

        me.translateOptionSetList = function () {
            var url = encodeURI(me.QUERY_URL_TERMS);
            me.loadMetadata(url, function (response) {

                var options = response.options;
                for (var j in options) {
                    var option = options[j];
                    var value = option.displayName;
                    me.tableTag.find("[keyword='" + me.OPTION_KEY + ":" + option.code + "']")
                        .html(value);
                }

                me.exeFunc();
            });
        }

        me.loadMetadata = function (url, exeFunc) {
            $.ajax({
                type: "GET",
                url: url,
                contentType: "application/json;charset=utf-8",
                beforeSend: function (xhr) {
                    //me.hideReportTag();
                },
                success: function (response) {
                    exeFunc(response);
                }
            });

        }


        // ----------------------------------------------------------------------------------------------
        // init

        me.init();

    }
});
});
