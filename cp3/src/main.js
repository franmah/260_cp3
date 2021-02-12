import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'

Vue.config.productionTip = false

let data = {
  universities: [{
    name: 'byu',
    id: 0,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Brigham_Young_University_medallion.svg/1200px-Brigham_Young_University_medallion.svg.png',
    description: 'Brigham Young University is a private research university owned by The Church of Jesus Christ of Latter-day Saints and located in Provo, Utah. The university is accredited by the Northwest Commission on Colleges and Universities.',
    courses: [
      {
      name: 'cs260',
      id: 0,
      professors: ['D. Zappala', 'J. Crandall'],
      rating: 10,
      comments: [
        {
        author: 'Random cs student',
        content: 'Great class! Very useful!',
        professor: 'D.Zappala',
        rating: 10,
        },
        {
          author: 'A. Smith',
          content: 'The course is great, but I wish it was easier to make html and css do what I want',
          professor: 'J. Crandall',
          rating: 10,
        },
      ],
      },
      {
        name: 'cs142',
        id: 1,
        professors: ['D. Ventura', 'A. Mercer'],
        rating: 2,
        comments: [
          {
            author: 'A frustrated student',
            content: 'Why is programming so difficult?!',
            professor: 'A. Mercer',
            rating: 3,
          },
          {
            author: 'Just another student',
            content: 'The class is tought and requires a lot of work, but after 4 years you get a nice salary',
            professor: 'D. Ventura',
            rating: 5,
          }
        ]
      }
    ],
  },
  {
    name: 'Harvard',
    id: 1,
    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png',
    description: 'A pretty good school.',
    courses: [
      {
      name: 'cs101',
      id: 0,
      professors: ['D. NobelPrice', 'J. Smart'],
      rating: 1,
      comments: [
        {
        author: 'Freshman student',
        content: 'I wish this class was as good as cs 260 at byu!',
        professor: 'J. Smart',
        rating: 11,
        },
        {
          author: 'J. Smith',
          content: 'The course is great! Don\'t be fooled by the professor\'s name, he doesn\'t actually have a nobel price',
          professor: 'D. NobelPrice',
          rating: 1,
        },
      ],
      },
      {
        name: 'econ110',
        id: 1,
        professors: ['A. gme', 'B. nasdaq'],
        rating: -1,
        comments: [
          {
            author: 'Another random student',
            content: 'Economics is interesting but hard to understand.',
            professor: 'A. gme',
            rating: 0,
          },
          {
            author: 'Another random student (yes, again)',
            content: 'Very difficult course!',
            professor: 'B. nasdaq',
            rating: 1,
          }
        ]
      }
    ],
  },
  ],
}

new Vue({
  router,
  data: data,
  render: h => h(App)
}).$mount('#app')
