$(document).ready(function(){
	$('.icon_menu').on('click', function(){
		$('.menu_hambu').animate({top: '0',}, 1500, '')
	});
	$('.btn_cerrar').on('click', function(){
		$('.menu_hambu').animate({top: '-275px',}, 1500, '')
	});
});