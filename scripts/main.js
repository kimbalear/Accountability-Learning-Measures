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

    // Form 
    $("#GBV").on("click", "input[type='radio']", function () {
        if ($(this).is(':checked')) {
            var value = $(this).val();
            rbselected(value);
        }
    });

    const oneyes = `<div id="oneyes" class="grdTb2-a1s">
        <div class="l1 lv1">If yes, did your clinic provide emergency contraception to survivors during this reporting period?</div>
        <div class="ans">
            <input type="radio" name="q2" value="oneyes_y"/>
            <label for="Yes">Yes</label>
            <input type="radio" name="q2" value="oneyes_n">
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
            <input type="radio" name="q3" value="oneyes_n4"/>
            <label for="ecnoq34">Other:</label>
        <input />
        </div>
    </div>`

    const oneno = `<div id="oneno" class="grdTb2-a1s">
        <div class="l1 lv1">If no, can your clinic support survivors to access emergency contraception elsewhere through a safe referral?</div>
        <div class="ans">
            <input type="radio" name="q4" value="onenoyes"/>
            <label for="Yes">Yes</label>
            <input type="radio" name="q4" value="onenono"/>
            <label for="No">No</label>
        </div>
    </div>`

    const oneno_n = `<div id="oneno-n" class="grdTb2-a2">
        <div class="l1 lv3">If no, Why?</div>
        <div class="ans1">
            <input type="radio" name="q5" value="oneno_n1"/>
            <label for="q5">No one in the area provides this service</label>
        </div>
        <div class="ans2">
            <input type="radio" name="q5" value="oneno_n2"/>
            <label for="q5">Other:</label>
            <input />
        </div>
    </div>`

    //

    const twoyes = `<div id="twoyes" class="grdTb2-a1s">
        <div class="l1 lv1">If yes, did your clinic provide Post-Exposure Prophylaxis for HIV to survivors during this reporting period?</div>
        <div class="ans">
            <input type="radio" name="q7" value="twoyes_y"/>
            <label for="Yes">Yes</label>
            <input type="radio" name="q7" value="twoyes_n"/>
            <label for="No">No</label>
        </div>
    </div>`

    const twoyes_n = `<div id="twoyes-n" class="grdTb2-a4">
        <div class="l1 lv1">If no, why is this service not available?</div>
        <div class="ansa">
            <input type="radio" name="q8" value="twoyes_n1"/>
            <label for="q81">National policy does not allow</label>
        </div>
        <div class="ansb">
            <input type="radio" name="q8" value="twoyes_n2"/>
            <label for="q82">No stock available</label>
        </div>
        <div class="ansc">
            <input type="radio" name="q8" value="twoyes_n3"/>
            <label for="q83">No trained staff</label>
        </div>
        <div class="ansd">
            <input type="radio" name="q8" value="twoyes_n4"/>
            <label for="q84">Other:</label>
            <input />
        </div>
    </div>`

    const twono = `<div id="twono" class="grdTb2-a1">
        <div class="l1 lv2">If no, can your clinic support survivors to access Post-Exposure Prophylaxis for HIV elsewhere  through a safe referral?</div>
        <div class="ans">
            <input type="radio" name="q9" value="twono_y"/>
            <label for="Yes">Yes</label>
            <input type="radio" name="q9" value="twono_n"/>
            <label for="No">No</label>
        </div>
    </div>`

    const twono_n = `<div id="twono-n" class="grdTb2-a2">
        <div class="l1 lv3">If no, Why?</div>
        <div class="ans1">
            <input type="radio" name="q10" value="twono_n1"/>
            <label for="q10">No one in the area provides this service</label>
        </div>
        <div class="ans2">
            <input type="radio" name="q10" value="twono_n2"/>
            <label for="q10">Other:</label><input />
        </div>
    </div>`

    function rbselected(rbsctd) {
        switch (rbsctd) {
            // Q1
            case 'oneyes':
                if (!$("#oneyes").length) {
                    $("#oneyes-n").remove();
                    $("#oneyes").remove();
                    $("#oneno").remove();
                    $("#oneno-n").remove();
                    $("#one").after(oneyes)
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
                    console.log('Radio button seleccionado 2/yes: ' + rbsctd);
                }
                break;
            case 'twoyes_y':
                if ($("#twoyes-n").length) {
                    $("#twoyes-n").remove();
                    $("#twono").remove();
                    $("#twono-n").remove();
                    console.log('Radio button seleccionado: x ' + rbsctd);
                }
                break;
            case 'twoyes_n':
                if (!$("#twoyes-n").length) {
                    $("#twoyes").after(twoyes_n)
                    console.log('Radio button seleccionado 2/no: ' + rbsctd);
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
});