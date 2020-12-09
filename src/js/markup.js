import menu from '../menu.json'
import itemsTemplate from '../templates/gallery-items.hbs'

const galleryRef = document.querySelector('.js-menu')  
console.log(galleryRef);

// Вставка макета
const markup = itemsTemplate({menu})

galleryRef.insertAdjacentHTML('beforeend', markup)

// Без Webpack:
// в html 
/* <template id="list-item">
  {{#each items}}
  <li>{{this}}</li>
  {{/each}}
</template>  */

// const tech = ['ssddfs', 'dfssdfs'];
// const liRef = document.querySelector('#list-item').innerHTML.trim()
// console.log(liRef);

// const templete = Handlebars.compile(liRef)
// const markup = templete({
//     items: ['ssddfs', 'dfssdfs']
// })

// console.log(markup);

// galleryRef.insertAdjacentHTML('beforeend', markup)
