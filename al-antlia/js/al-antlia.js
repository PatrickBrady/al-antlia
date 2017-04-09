$(document).ready(function(){


	$('body').addClass('alp-antlia');

	$('<div class="row"><div class="col-sm-11 col-sm-offset-1 "><div class="login pull-right"><i class="fa fa-lock"></i><a href="/client-login/" class="btn login-btn pull-right">&nbsp;</a></div></div></div>').prependTo('header > .container');

	$('.antlia-hero').parent().parent().parent().parent().addClass('antlia-hero__section');
    $(".antlia-hero__section .overlay .container").attr('class', 'container-fluid');
    $("nav#main").appendTo("header.header");
    $("section.social-media").appendTo("nav#main .container .row").addClass("col-sm-2 soc");
    $("nav#main .container.container-fluid").removeClass('container container-fluid').wrap('<div class="container"><div class="row"><div class="col-sm-10"></div></div></div>');
    //$('.hero-banner').parent().parent().parent().parent().addClass('alp-hero__section');
    $(".moonlight-header-logo").removeClass("col-sm-12 col-md-3").addClass("col-md-4");
    $("section.header-phone").addClass("col-md-8").insertAfter(".moonlight-header-logo");
    $("section.header-phone p a").wrap('<span class="btn header-btn"></span>');
    $('<a href="https://antlia-alpad-co.advisorlaunchpad.io/account-access/?cmsMode=Preview" class="btn header-btn"><i class="fa fa-lock"></i>Account Access</a>').prependTo("section.header-phone");
    $('.login.pull-right').parent().parent().remove();
    $('.hero-container').parent().parent().parent().parent().addClass('antlia-hero__section');
    $('div.antlia-welcome').parent().parent().parent().addClass('main home-content');
    $("div.antlia-featured-cols").closest("section.section_FullWidth").addClass("featured");
    $('<div class="divider"></div>').insertBefore("div.footer-container");
	//$('.welcome-head').parent().parent().parent().parent().parent().addClass('alp-welcome__section');
	//$('.flex-columns.no-gutters').parent().parent().parent().parent().parent().addClass('alp-4box__section');
    //$('.alp-1-box').parent().parent().parent().parent().addClass('alp-content');
    //$('.specialty').parent().parent().parent().parent().parent().parent().addClass('alp-specialty');


	//$('<section class="divider"><span id="divider-img"><span class="inner"></span></span></section>').prependTo('footer');

	        //FOOTER
        //$('.footer-container').addClass('col-sm-12 col-md-12');
        //$('.moonlight-address_block').insertAfter('.footer-container .contact h4');
//
        //$('<div class="col-sm-12 col-md-12 footer-copyright"><div class="container"></div></div>').insertAfter('.footer-container');
//
        //$('.footer-container .row > div:nth-child(2)').detach();
        //$('.footer-container .row div:first-child').removeClass('col-xs-12 col-sm-6 col-md-3 footer-contact-info')
        //$('.footer-container .row > div:first-child').addClass('col-xs-12 col-sm-12 col-md-5 col-sm-offset-1 footer-contact-info')
        //$('.footer-container .footer-contact-info + div').removeClass('col-xs-12 col-sm-12 col-md-7');
        //$('.footer-container .footer-contact-info + div').addClass('col-xs-12 col-sm-12 col-md-5 footer-disclosure');

         //CONTACT PAGE
        //$('.page-contact .contact-block > div:first-child').removeClass('col-xs-12 col-sm-6 col-md-4');
        //$('.page-contact .contact-block > div:last-child').removeClass('col-xs-12 col-sm-6 col-md-8');
        //$('.page-contact .contact-block > div').addClass('col-xs-12 col-sm-12 col-md-12');
//
        //$('.page-contact #content .form.container').insertBefore('.page-contact #content div.contact-block');
//
        //$('.page-contact #content .contact-block').addClass('col-xs-12 col-sm-12 col-md-6');
        //$('.page-contact #content .form').addClass('col-xs-12 col-sm-12 col-md-6');
});



