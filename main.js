const imageItems = document.querySelectorAll('.image-item');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = modal.querySelector('.image-close');

imageItems.forEach(item => {
    item.addEventListener('click', () => {
        const modalSrc = item.dataset.modal; // prend l'image pour le popup
        modalImg.src = modalSrc;
        modal.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modalImg.src = '';
});

modal.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.style.display = 'none';
        modalImg.src = '';
    }
});


//const carouselTrack = document.querySelector('.carousel-track');
//const nextBtn = document.querySelector('.carousel-next');
//const videoModal = document.getElementById('videoModal');
//const videoIframe = document.getElementById('videoIframe');
//const videoClose = document.querySelector('.video-close');

//prevBtn.addEventListener('click', () => {
    //carouselTrack.scrollBy({ left: -420, behavior: 'smooth' });
//});

//nextBtn.addEventListener('click', () => {
    //carouselTrack.scrollBy({ left: 420, behavior: 'smooth' });
//});

//document.querySelectorAll('.carousel-item').forEach(item => {
    //item.addEventListener('click', () => {
        //videoIframe.src = item.dataset.video + '?autoplay=1';
        //videoModal.style.display = 'flex';
    //});
//});

//videoClose.addEventListener('click', () => {
    //videoModal.style.display = 'none';
    //videoIframe.src = '';
//});

//videoModal.addEventListener('click', e => {
    //if (e.target === videoModal) {
        //videoModal.style.display = 'none';
       //videoIframe.src = '';
    //}
//});

document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const galleryModal = document.getElementById('galleryModal');
    const galleryModalImg = document.getElementById('galleryModalImg');
    const galleryClose = document.querySelector('.gallery-close');

    // Sécurité : vérifier que tous les éléments existent
    if (!galleryModal || !galleryModalImg || !galleryClose) {
        console.error("Un élément du modal galerie est manquant !");
        return;
    }

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            galleryModalImg.src = item.dataset.modal;
            galleryModal.style.display = 'flex';
        });
    });

    galleryClose.addEventListener('click', () => {
        galleryModal.style.display = 'none';
        galleryModalImg.src = '';
    });

    galleryModal.addEventListener('click', e => {
        if (e.target === galleryModal) {
            galleryModal.style.display = 'none';
            galleryModalImg.src = '';
        }
    });
});