
$(document).ready(function () {

    $("body").on("focus", "input", function (event) {
        $(this).attr('autocomplete', 'off')
    });

    $('.custom_tab li').click(function (e) {
        tab_selected = $(this).find('a').attr('href');
        switch (tab_selected) {
            case '#DT':
                $(this).attr('tabindex', '0');
                $(this).addClass('ui-state-hover');
                $(this).addClass('ui-tabs-active');
                $(this).addClass('ui-state-active');
                $(this).attr('aria-selected', 'true');
                $(this).attr('aria-expanded', 'true');
                $('#DT').attr('aria-hidden', 'false');
                $('#DT').css({
                    'display': 'block'
                });
                break;
            case '#GBV':
                $(this).attr('tabindex', '0');
                $(this).addClass('ui-state-hover');
                $(this).addClass('ui-tabs-active');
                $(this).addClass('ui-state-active');
                $(this).attr('aria-selected', 'true');
                $(this).attr('aria-expanded', 'true');
                $('#GBV').attr('aria-hidden', 'false');
                $('#GBV').css({
                    'display': 'block'
                });
                break;
            case '#HIVSTI':
                $(this).attr('tabindex', '0');
                $(this).addClass('ui-state-hover');
                $(this).addClass('ui-tabs-active');
                $(this).addClass('ui-state-active');
                $(this).attr('aria-selected', 'true');
                $(this).attr('aria-expanded', 'true');
                $('#HIVSTI').css({
                    'display': 'block'
                });
                break;
            case '#PEMNMM':
                $(this).attr('tabindex', '0');
                $(this).addClass('ui-state-hover');
                $(this).addClass('ui-tabs-active');
                $(this).addClass('ui-state-active');
                $(this).attr('aria-selected', 'true');
                $(this).attr('aria-expanded', 'true');
                $('#PEMNMM').attr('aria-hidden', 'false');
                $('#PEMNMM').css({
                    'display': 'block'
                });
                break;
            case '#FP':
                $(this).attr('tabindex', '0');
                $(this).addClass('ui-state-hover');
                $(this).addClass('ui-tabs-active');
                $(this).addClass('ui-state-active');
                $(this).attr('aria-selected', 'true');
                $(this).attr('aria-expanded', 'true');
                $('#FP').attr('aria-hidden', 'false');
                $('#FP').css({
                    'display': 'block'
                });
                break;
        }
    });


    // // Form 
    // $("#GBV").on("click", "input[type='radio']", function () {
    //     if ($(this).is(':checked')) {
    //         var value = $(this).val();
    //         rbselected(value);
    //     }
    // });

    const oneyes = `<div id="oneyes" class="grdTb2-a1s">
      <div class="l1 lv1">If yes, did your clinic provide emergency contraception to survivors during this reporting period?</div>
      <div class="ans">
          <input type="radio" name="q2" value=""/>
          <label for="Yes">Yes</label>
          <input type="radio" name="q2" value="">
          <label for="No">No</label>
      </div>
  </div>`

    const oneyes_n = `<div id="oneyes-n" class="grdTb2-a4">
      <div class="l1 lv1">If no, why is this service not available?</div>
      <div class="ansa">
          <input type="radio" name="q3" value="oneyes_n1">
          <label for="q31">National policy does not allow</label>
      </div>
      <div class="ansb">
          <input type="radio" name="q3" value="oneyes_n2">
          <label for="q32">No stock available</label>
      </div>
      <div class="ansc">
          <input type="radio" name="q3" value="oneyes_n3"/>
          <label for="q33">No trained staff</label>
      </div>
      <div class="ansd">
          <input type="radio" name="q3" value=""/>
          <label for="ecnoq34">Other:</label>
      <input />
      </div>
  </div>`

    const oneno = `<div id="oneno" class="grdTb2-a1s">
      <div class="l1 lv1">If no, can your clinic support survivors to access emergency contraception elsewhere through a safe referral?</div>
      <div class="ans">
          <input type="radio" name="q4" value=""/>
          <label for="Yes">Yes</label>
          <input type="radio" name="q4" value=""/>
          <label for="No">No</label>
      </div>
  </div>`

    const oneno_n = `<div id="oneno-n" class="grdTb2-a2">
      <div class="l1 lv3">If no, Why?</div>
      <div class="ans1">
          <input type="radio" name="q5" value=""/>
          <label for="q5">No one in the area provides this service</label>
      </div>
      <div class="ans2">
          <input type="radio" name="q5" value=""/>
          <label for="q5">Other:</label>
          <input />
      </div>
  </div>`

    const twoyes = `<div id="twoyes" class="grdTb2-a1s">
      <div class="l1 lv1">If yes, did your clinic provide Post-Exposure Prophylaxis for HIV to survivors during this reporting period?</div>
      <div class="ans">
          <input type="radio" name="q7" value=""/>
          <label for="Yes">Yes</label>
          <input type="radio" name="q7" value=""/>
          <label for="No">No</label>
      </div>
  </div>`

    const twoyes_n = `<div id="twoyes-n" class="grdTb2-a4">
      <div class="l1 lv1">If no, why is this service not available?</div>
      <div class="ansa">
          <input type="radio" name="q8" value=""/>
          <label for="q81">National policy does not allow</label>
      </div>
      <div class="ansb">
          <input type="radio" name="q8" value=""/>
          <label for="q82">No stock available</label>
      </div>
      <div class="ansc">
          <input type="radio" name="q8" value=""/>
          <label for="q83">No trained staff</label>
      </div>
      <div class="ansd">
          <input type="radio" name="q8" value=""/>
          <label for="q84">Other:</label>
          <input />
      </div>
  </div>`

    const twono = `<div id="twono" class="grdTb2-a1">
      <div class="l1 lv2">If no, can your clinic support survivors to access Post-Exposure Prophylaxis for HIV elsewhere  through a safe referral?</div>
      <div class="ans">
          <input type="radio" name="q9" value=""/>
          <label for="Yes">Yes</label>
          <input type="radio" name="q9" value=""/>
          <label for="No">No</label>
      </div>
  </div>`

    const twono_n =
        `<div id="twono-n" class="grdTb2-a2">
      <div class="l1 lv3">If no, Why?</div>
      <div class="ans1">
          <input type="radio" name="q10" value=""/>
          <label for="q10">No one in the area provides this service</label>
      </div>
      <div class="ans2">
          <input type="radio" name="q10" value=""/>
          <label for="q10">Other:</label><input />
      </div>
  </div>`

    //   function rbselected(rbsctd) {
    //     console.log('===>> ' + rbsctd);
    //       switch (rbsctd) {
    //           // Q1
    //           case 'oneyes':
    //               if (!$("#oneyes").length) {
    //                   $("#oneyes-n").remove();
    //                   $("#oneyes").remove();
    //                   $("#oneno").remove();
    //                   $("#oneno-n").remove();
    //                   $("#one").after(oneyes)
    //                   console.log('Radio button seleccionado: ' + rbsctd);
    //               }
    //               break;
    //           case 'oneyes_y':
    //               if ($("#oneyes-n").length) {
    //                   $("#oneyes-n").remove();
    //                   $("#oneyes").remove();
    //                   $("#oneno").remove();
    //                   $("#oneno-n").remove();
    //                   console.log('Radio button seleccionado: ' + rbsctd);
    //               }
    //               break;
    //           case 'oneyes_n':
    //               if (!$("#oneyes-n").length) {
    //                   $("#oneyes").after(oneyes_n)
    //                   console.log('Radio button seleccionado: ' + rbsctd);
    //               }
    //               break;
    //           case 'oneno':
    //               if (!$("#oneno").length) {
    //                   $("#oneyes").remove();
    //                   $("#oneyes-n").remove();
    //                   $("#one").after(oneno)
    //               }
    //               break;
    //           case 'onenoyes':
    //               if ($("#oneno-n").length) {
    //                   $("#oneno-n").remove();
    //                   console.log('Radio button seleccionado: ' + rbsctd);
    //               }
    //               break;
    //           case 'onenono':
    //               if (!$("#oneno-n").length) {
    //                   $("#oneno").after(oneno_n)
    //                   console.log('Radio button seleccionado: ' + rbsctd);
    //               }
    //               break;
    //           // Q2
    //           case 'twoyes':
    //               if (!$("#twoyes").length) {
    //                   $("#twoyes-n").remove();
    //                   $("#twoyes").remove();
    //                   $("#twono").remove();
    //                   $("#twono-n").remove();
    //                   $("#two").after(twoyes)
    //                   console.log('Radio button seleccionado: twoyes== ' + rbsctd);
    //               }
    //               break;
    //           case 'twoyes_y':
    //               if ($("#twoyes-n").length) {
    //                   $("#twoyes-n").remove();
    //                   $("#twono").remove();
    //                   $("#twono-n").remove();
    //                   console.log('Radio button seleccionado: ' + rbsctd);
    //               }
    //               break;
    //           case 'twoyes_n':
    //               if (!$("#twoyes-n").length) {
    //                   $("#twoyes").after(twoyes_n)
    //                   console.log('Radio button seleccionado: ' + rbsctd);
    //               }
    //               break;
    //           case 'twono':
    //               if (!$("#twono").length) {
    //                   $("#twoyes").remove();
    //                   $("#twoyes-n").remove();
    //                   $("#two").after(twono)
    //               }
    //               break;
    //           case 'twono_y':
    //               if ($("#twono-n").length) {
    //                   $("#twono-n").remove();
    //                   console.log('Radio button seleccionado: ' + rbsctd);
    //               }
    //               break;
    //           case 'twono_n':
    //               if (!$("#twono-n").length) {
    //                   $("#twono").after(twono_n)
    //                   console.log('Radio button seleccionado: ' + rbsctd);
    //               }
    //               break;
    //       }
    //   }
    // 

});

function RenderRadioBtnTags() {
    var me = this;

    me.init = function () {
        me.renderRadioBtnTags();
    }

    me.renderRadioBtnTags = function () {
        // <div class="radioBtn" name="q1" values="oneyes,oneno" lables="Yes,No"></div>
        // <input name="q1" type="radio" value="" /> <label for="Yes">Yes</label> <input name="q1" type="radio" value="" /> <label for="No">No</label></div>
        $(".radioBtn").each(function () {
            $(this).html("");

            var name = $(this).attr("name");
            var values = $(this).attr("values").split(",");
            var lables = $(this).attr("lables").split(",");
            for (var i = 0; i < values.length; i++) {
                let inputTag = $("<input name='" + name + "' type='radio' value='" + values[i] + "'/>");
                inputTag.click(function () {
                    me.rbselected(inputTag.val());
                });

                $(this).append(inputTag);
                $(this).append("<label for='" + lables[i] + "'>" + lables[i] + "</label>");


            }
        })
    }

    me.rbselected = function (rbsctd) {
        console.log('===>> ' + rbsctd);
        switch (rbsctd) {
            // Q1
            case 'oneyes':
                if (!$("#oneyes").length) {
                    // $("#oneyes-n").remove();
                    // $("#oneyes").remove();
                    // $("#oneno").remove();
                    // $("#oneno-n").remove();
                    // $("#one").after(oneyes)
                    console.log('Radio button seleccionado: ' + rbsctd);
                }
                break;
            case 'oneyes_y':
                if ($("#oneyes-n").length) {
                    $("#oneyes-n").remove();
                    $("#oneyes").remove();
                    $("#oneno").remove();
                    $("#oneno-n").remove();
                    console.log('Radio button seleccionado: ' + rbsctd);
                }
                break;
            case 'oneyes_n':
                if (!$("#oneyes-n").length) {
                    $("#oneyes").after(oneyes_n)
                    console.log('Radio button seleccionado: ' + rbsctd);
                }
                break;
            case 'oneno':
                if (!$("#oneno").length) {
                    $("#oneyes").remove();
                    $("#oneyes-n").remove();
                    $("#one").after(oneno)
                }
                break;
            case 'onenoyes':
                if ($("#oneno-n").length) {
                    $("#oneno-n").remove();
                    console.log('Radio button seleccionado: ' + rbsctd);
                }
                break;
            case 'onenono':
                if (!$("#oneno-n").length) {
                    $("#oneno").after(oneno_n)
                    console.log('Radio button seleccionado: ' + rbsctd);
                }
                break;
                // Q2
            case 'twoyes':
                if (!$("#twoyes").length) {
                    $("#twoyes-n").remove();
                    $("#twoyes").remove();
                    $("#twono").remove();
                    $("#twono-n").remove();
                    $("#two").after(twoyes)
                    console.log('Radio button seleccionado: twoyes== ' + rbsctd);
                }
                break;
            case 'twoyes_y':
                if ($("#twoyes-n").length) {
                    $("#twoyes-n").remove();
                    $("#twono").remove();
                    $("#twono-n").remove();
                    console.log('Radio button seleccionado: ' + rbsctd);
                }
                break;
            case 'twoyes_n':
                if (!$("#twoyes-n").length) {
                    $("#twoyes").after(twoyes_n)
                    console.log('Radio button seleccionado: ' + rbsctd);
                }
                break;
            case 'twono':
                if (!$("#twono").length) {
                    $("#twoyes").remove();
                    $("#twoyes-n").remove();
                    $("#two").after(twono)
                }
                break;
            case 'twono_y':
                if ($("#twono-n").length) {
                    $("#twono-n").remove();
                    console.log('Radio button seleccionado: ' + rbsctd);
                }
                break;
            case 'twono_n':
                if (!$("#twono-n").length) {
                    $("#twono").after(twono_n)
                    console.log('Radio button seleccionado: ' + rbsctd);
                }
                break;
        }
    }


    me.init();

}

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

        me.optionSetTermId = "poTgmG2n7xT";

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
