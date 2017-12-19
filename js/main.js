
$('.pais-pt').click(function(event){
	event.preventDefault();
	$('#sobre-en').css('display', 'none');
	$('#sobre-pt').css('display', 'block');
	$('#link-trabalho').text('TRABALHOS');
	$('.work-link').text('VEJA O PROJETO');
	$('#link-formacao').text('FORMACÃO');
	$('#link-conhecimento').text('CONHECIMENTOS');
	$('#link-sobre').text('SOBRE');
	$('.work-link').text('VIEW THE PROJECT');
	$('#trabalhos').text('Trabalhos');
	$('#formacao').text('Formação');
	$('#conhecimento').text('Conhecimentos');


});
$('.pais-en').click(function(event){
	event.preventDefault();
	$('#sobre-pt').css('display', 'none');
	$('#sobre-en').css('display', 'block');
	$('#link-trabalho').text('PROJECTS');
	$('#link-formacao').text('EDUCATION');
	$('#link-conhecimento').text('ACQUIREMENTS');
	$('#link-sobre').text('ABOUT');
	$('.work-link').text('VIEW THE PROJECT');
	$('#trabalhos').text('Projects');
	$('#formacao').text('Education background');
	$('#conhecimento').text('Acquirements');


});
document.querySelector('.menu-abrir').onclick = function() {
    document.documentElement.classList.add('menu-ativo');
    $('.menu-abrir').css('display', 'none')
};

document.querySelector('.menu-fechar').onclick = function() {
    document.documentElement.classList.remove('menu-ativo');
    $('.menu-abrir').css('display', 'block')
};
document.querySelector('.nav-link').onclick = function() {
    document.documentElement.classList.remove('menu-ativo');
};

document.documentElement.onclick = function(event) {
    if (event.target === document.documentElement) {
        document.documentElement.classList.remove('menu-ativo');
    }
};

$('#link-sobre').click(function(){
	var sobre = $('.thumbnail').offset().top-100;
	$('html').animate(
    {
        scrollTop: sobre+'px'

    }, 1000);
});
$('#link-trabalho').click(function(){
	var trabalho = $('#trabalhos').offset().top-100;
	
	$('html').animate(
    {
        scrollTop: trabalho+'px'

    }, 1000);
});
$('#link-conhecimento').click(function(){
	var conhecimento = $('#conhecimento').offset().top-100;
	$('html').animate(
    {
        scrollTop: conhecimento+'px'

    }, 1000);
});
$('#link-formacao').click(function(){
	console.log('yu');
	var formacao = $('#formacao').offset().top-100;
	$('html').animate(
    {
        scrollTop: formacao+'px'

    }, 1000);
});

//console.log('yu');
