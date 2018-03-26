// Contact Form
jQuery('#template-jobform').submit(function() {

    var action = jQuery(this).attr('action');

    jQuery("#message").slideUp(750, function() {
        jQuery('#message').hide();

        jQuery('#submit')
            .after('<div class="fa fa-spinner fa-spin contact-loader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>')
            .attr("disabled", 'disabled');

        jQuery.post(action, {
                fname: jQuery('#fname').val(),
                email: jQuery('#email').val(),
                comment: jQuery('#comment').val(),
            },
            function(data) {
                document.getElementById('message').innerHTML = data;
                jQuery('#message').slideDown('slow');
                jQuery('#template-jobform .contact-loader').fadeOut('slow', function() { jQuery(this).remove() });
                jQuery('#submit').removeAttr('disabled');
                if (data.match('success') != null) jQuery('#template-jobform').slideUp('slow');
            }
        );

    });
    return false;
});