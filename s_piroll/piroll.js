let open_menu = false;
let num_slider = 1;

function menu_state(menu, state ){
    document.getElementsByClassName('menu__link')[0].style.display = menu;
    document.getElementsByClassName('out__state')[0].style.display = state;
}

function but_sl(nsl, nsl1,  hei_wid, mar, hei1_wid1, mar1){

    document.getElementById('id__slider__text' + num_slider).style.display = nsl;
    document.getElementById('id__slider__text' + (num_slider + 1)%3).style.display = nsl1;

    document.getElementById('circle__item' + num_slider).style.height = hei_wid;
    document.getElementById('circle__item' + num_slider).style.width = hei_wid;
    document.getElementById('circle__item' + num_slider).style.margin = mar;

    document.getElementById('circle__item' + (num_slider + 1)%3).style.height = hei1_wid1;
    document.getElementById('circle__item' + (num_slider + 1)%3).style.width = hei1_wid1;
    document.getElementById('circle__item' + (num_slider + 1)%3).style.margin = mar1;
}


document.getElementById('burger').onclick = () => {
    open_menu = true;
    menu_state('flex', 'block');
}

document.getElementsByClassName('out_state')[0].onclick = () => {
    open_menu = false;
    menu_state('none', 'none');
}

window.addEventListener('scroll', function() {
    if(open_menu){
        open_menu = false;
        menu_state('none', 'none');
    }
});


document.getElementById('but__sl__right').onclick = () => {
        but_sl('none', 'flex', '5px', '2.5px', '10px', '0px');
    num_slider = (num_slider + 1)%3;
}

document.getElementById('but__sl__left').onclick = () => {
    (num_slider == 0) ? num_slider = 2: num_slider = num_slider - 1;
        but_sl( 'flex', 'none', '10px', '0px', '5px', '2.5px');
}

