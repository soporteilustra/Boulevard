Vue.component('menu-items', {
     props: ['item'],
     template: '<li v-bind:class="[item.class,item.category]"><i class="icon ion-wineglass mr-2"></i>{{ item.text }}</li>'
})


var heading = new Vue({
  el: '#heading',
  data: {
    menu: [
         { id: 0, text: 'Bar', icon: 'icon ion-wineglass', class: 'list-inline-item', category: 'drink'},
         { id: 1, text: 'Tiendas', icon: 'icon ion-bag', class: 'list-inline-item', category: 'shop'},
         { id: 2, text: 'Restaurantes', icon: 'icon ion-fork',class: 'list-inline-item',  category: 'food'},
         { id: 3, text: 'Parques', icon: 'icon ion-partlysunny', class: 'list-inline-item', category: 'walk'}
    ]
  }
})
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

document.querySelector('video').defaultPlaybackRate = 1.5;
 document.querySelector('video').play();

 /* now play three times as fast just for the heck of it */
 document.querySelector('video').playbackRate = 3.0;
