$(document).ready(init);
function init()
{
	var thumblinks = $("#slider .thumblinks li");
	$(".thumbnails").on("mouseenter", "li", mostrarCartela)
						 .on("mouseleave", "li", mostrarCartela)
						 .on("click", "li", FotoContainer);
	thumblinks.find("a").on("click", prevenirLink);
	animacion3D();
}
/*mostrar notas en cada foto con un evento de hover*/
function mostrarCartela()
{
	$(this).find("span").slideToggle();
	$('div[class^="icon"]').toggleClass('resplandor');
}
/*evitar que el enlace a cada foto rompa la visibilidad de la ventana
(con anclas intra documentales). Por defecto en el navegador*/
function prevenirLink(event)
{
	// event.preventDefault();
	var reference = $(this).attr("href");
	var listFoto = $(reference);/*elegimos la imagen*/
	var thumbnails = $(this).closest("#slider").find(".thumbnails");
   $(this).closest(".tour").find(".photos").slideToggle();

	thumbnails.prepend(listFoto);/*la añadimos como primer hijo a la lista*/
	thumbnails.children("li:first-child").css({
		"-webkit-animation": "slideFromTop 300ms ease-in-out",
		"-moz-animation": "slideFromTop 300ms ease-in-out",
		"animation": "slideFromTop 300ms ease-in-out"
	});
}
function FotoContainer()
{
	reference = $(this).attr("href");
	$("#contenedor-secundario img").attr("src",$(reference+" img").attr("rel"));
}
function animacion3D()
{
winheight=parseInt($(window).height());
winwidth=parseInt($(window).width());
if((winwidth/16*9)<winheight) {
	$("#contenedor-secundario img").css({height:winheight});
} else {
	$("#contenedor-secundario img").css({width:winwidth});
}

$("#contenedor-ppal").css({height:winheight});
$("#contenedor-secundario").css({webkitTransform: "rotateX(-90deg) translateZ(-"+(winheight/2)+"px) translateY("+(winheight/2)+"px)",height:winheight})

$(".thumbnails").click(function(){
	$("#stage").css({webkitTransform:"scale3d(1, 1, 1) rotateX(90deg) translateY(-"+(winheight)+"px)"});
});
$("#contenedor-secundario img").click(function(){
	$("#stage").css({webkitTransform:"scale3d(1, 1, 1) rotateX(0deg) translateZ(0px)"});
});
}
