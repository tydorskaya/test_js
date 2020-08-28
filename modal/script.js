function callModal(idModal){
    console.log(idModal);
    var basisModal = document.getElementById(idModal);

    var title = basisModal.querySelector('div.title').innerHTML;
    var contant = basisModal.querySelector('div.content').innerHTML;


    var shellModal = '<div class="bg_modal" onclick="closeModal()"></div>' +
        '<div class="centering_modal" id="'+ idModal +'">' +
        '<div class="modal_container"><div class="modal_close" onclick="closeModal()">×</div>' +
        '<div class="title">'+ title + '</div><div class="content">' + contant + '</div></div></div>';
    
    document.body.insertAdjacentHTML('beforeend', shellModal);
}

function closeModal() {
    var bg = document.querySelector('div.bg_modal');
    var modal = document.querySelector('div.centering_modal');

    bg.remove();
    modal.remove();
}