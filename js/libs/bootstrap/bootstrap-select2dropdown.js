/*!
 * Convert <select> elements to Dropdown Group
 *
 * Author: John Rocela 2012 <me@iamjamoy.com>
 * Customized: Frank B 3/2012
 */

jQuery(function($){
    $('select').each(function(i, e){
        if (!($(e).data('convert') == 'no')) {
            //get some initial data...
            xSelect = $(e).attr('id')
            xLabel =  $("#"+xSelect +  " option:selected").text();
            xClass =  $(e).data('class')
                      
            $(e).hide().wrap('<div class="btn-group" id="select-group-' + i + '" />');
            
            var select = $('#select-group-' + i);

            select.html('<a class="btn dropdown-toggle '+ xClass + '" data-toggle="dropdown" href="javascript:;">' + xLabel + ' <span class="caret"></span></a><ul class="dropdown-menu"></ul><input type="hidden" value="' + $(e).val() + '" name="' + $(e).attr('name') + '" id="' + $(e).attr('id') + '" class="' + $(e).attr('class') + '" />');

            $(e).find('option').each(function(o,q) {
                select.find('.dropdown-menu').append('<li><a href="javascript:;" data-title="'+ $(q).text() +'" data-value="' + $(q).attr('value') + '">' + $(q).text() + '</a></li>');
                if ($(q).attr('selected')) select.find('.dropdown-menu li:eq(' + o + ')').click();
            });

            select.find('.dropdown-menu a').click(function() {
                select.find('input[type=hidden]').live().val($(this).data('value')).change();
                select.find('.btn:eq(0)').html($(this).text() + ' <span class="caret"></span>');
            });
        }
    });
});