var header, cadastroFoto, interrogação, navbar_itens, entrar, seta1, seta2, cadastro;
cadastro = document.getElementById('cadastro')
header = document.getElementById('header');
cadastroFoto = document.getElementById('foto_perfil')
entrar = document.getElementById('entrar');
interrogação = document.getElementById('interrogacao');
navbar_itens = document.getElementsByClassName('nav_item');
seta1 = document.getElementById('seta1');
seta2 = document.getElementById('seta2');
banner = document.getElementById('banner');

window.addEventListener('scroll', function(){

    if(window.scrollY > 0){

        header.setAttribute('class', 'headerRolagem');
        seta1.setAttribute('src', '../img/seta_preta.png');
        seta2.setAttribute('src', '../img/seta_preta.png');
        interrogação.setAttribute('src', '../img/interrogação_preta.png');
        cadastroFoto.setAttribute('src', '../img/perfil_sem_foto_preto.png');
        cadastro.setAttribute('class', 'cadastrorolagem')
        entrar.setAttribute('style', 'color: black');
        navbar_itens[0].setAttribute('style', 'color: black');
        navbar_itens[1].setAttribute('style', 'color: black');
        navbar_itens[3].setAttribute('style', 'color: black');
        navbar_itens[4].setAttribute('style', 'color: black');
        navbar_itens[6].setAttribute('style', 'color: black');

    }else{

        header.setAttribute('class', 'header');
        seta1.setAttribute('src', '../img/seta_branca.svg');
        seta2.setAttribute('src', '../img/seta_branca.svg');
        navbar_itens[0].setAttribute('style', 'color: white');
        navbar_itens[1].setAttribute('style', 'color: white');
        navbar_itens[3].setAttribute('style', 'color: white');
        navbar_itens[4].setAttribute('style', 'color: white');
        navbar_itens[6].setAttribute('style', 'color: white');
        interrogação.setAttribute('src', '../img/interrogação_branca.svg');
        entrar.setAttribute('style', 'color: white');
        cadastroFoto.setAttribute('src', '../img/free_icon_1 (1).svg');

        

    }

})

window.addEventListener('click', function(event){

    if(event){

        banner.setAttribute('src', '../img/coca_slide2.jpg')

    }

})



