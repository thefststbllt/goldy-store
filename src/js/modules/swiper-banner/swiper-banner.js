import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

Swiper.use([Navigation, Pagination]);

new Swiper('.swiper1', {
    loop: true,
    spaceBetween: 100,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },

    navigation: {
        nextEl: '.swiper-banner-button-next',
        prevEl: '.swiper-banner-button-prev',
    },
});
