import '../scss/style.scss';
import Glide from '@glidejs/glide';

const log = (log) => console.log(log);

new Glide('.glide', {
  type: 'carousel',
}).mount();
log('auuuu');
