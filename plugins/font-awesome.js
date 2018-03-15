import Vue from 'vue';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import fontAwesome from '@fortawesome/fontawesome';
// brands
import faVk from '@fortawesome/fontawesome-free-brands/faVk';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import faDiscord from '@fortawesome/fontawesome-free-brands/faDiscord';
import faTwitterSquare from '@fortawesome/fontawesome-free-brands/faTwitterSquare';
import faYoutube from '@fortawesome/fontawesome-free-brands/faYoutube';
// solid
import faLanguage from '@fortawesome/fontawesome-free-solid/faLanguage';
import faRubleSign from '@fortawesome/fontawesome-free-solid/faRubleSign';

fontAwesome.library.add(
  faVk,
  faFacebook,
  faDiscord,
  faTwitterSquare,
  faYoutube,
  faLanguage,
  faRubleSign,
);

Vue.component(FontAwesomeIcon.name, FontAwesomeIcon);
