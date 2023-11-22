$(document).ready(function () {

    $("body").on("focus", "input", function (event) {
        $(this).attr('autocomplete', 'off')
    });

    $('.custom_tab li').click(function (e) {
        tab_selected = $(this).find('a').attr('href');
        alert(tab_selected)
        switch (tab_selected) {
            case '#SRHS':
                $(this).attr('tabindex', '0');
                $(this).addClass('ui-state-hover');
                $(this).addClass('ui-tabs-active');
                $(this).addClass('ui-state-active');
                $(this).attr('aria-selected', 'true');
                $(this).attr('aria-expanded', 'true');
                $('#SRHS').attr('aria-hidden', 'false');
                $('#SRHS').css({
                    'display': 'block'
                });
                break;
            case '#PReacher':
                $(this).attr('tabindex', '0');
                $(this).addClass('ui-state-hover');
                $(this).addClass('ui-tabs-active');
                $(this).addClass('ui-state-active');
                $(this).attr('aria-selected', 'true');
                $(this).attr('aria-expanded', 'true');
                $('#PReacher').attr('aria-hidden', 'false');
                $('#PReacher').css({
                    'display': 'block'
                });
                break;
            case '#CMDTS':

                $(this).attr('tabindex', '0');
                $(this).addClass('ui-state-hover');
                $(this).addClass('ui-tabs-active');
                $(this).addClass('ui-state-active');
                $(this).attr('aria-selected', 'true');
                $(this).attr('aria-expanded', 'true');
                $('#CMDTS').css({
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
            case '#OIES':

                $(this).attr('tabindex', '0');
                $(this).addClass('ui-state-hover');
                $(this).addClass('ui-tabs-active');
                $(this).addClass('ui-state-active');
                $(this).attr('aria-selected', 'true');
                $(this).attr('aria-expanded', 'true');
                $('#OIES').attr('aria-hidden', 'false');
                $('#OIES').css({
                    'display': 'block'
                });
                break;
        }
    });
});