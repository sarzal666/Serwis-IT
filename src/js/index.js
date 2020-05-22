import '../scss/style.scss';
import Glide from '@glidejs/glide';

const log = (log) => console.log(log);

new Glide('.glide', {
  type: 'carousel',
  gap: 0,
  autoplay: 2000,
  hoverpause: true,
  animationDuration: 1400,
}).mount();
// log('auuuu');
