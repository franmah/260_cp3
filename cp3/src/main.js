import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'

Vue.config.productionTip = false

let data = {
  color: 'white',
  universities: [{
    name: 'byu',
    id: 0,
    main_color: '#0F2C5C',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Brigham_Young_University_medallion.svg/1200px-Brigham_Young_University_medallion.svg.png',
    description: `Brigham Young University (BYU) is a private research university owned by The Church of Jesus Christ of Latter-day Saints (LDS Church) and located in Provo, Utah. The university is accredited by the Northwest Commission on Colleges and Universities.[9] The university is run under the auspices of the church's parent organization, the Church Educational System (CES), and is classified among "R2: Doctoral Universities – High Research Activity" with "more selective, lower transfer-in" admissions.[10] The university's primary emphasis is on undergraduate education in 179 majors, but it also has 62 master's and 26 doctoral degree programs.[11] The university also administers two satellite campuses, one in Jerusalem and one in Salt Lake City.`,
    courses: [
      {
      name: 'cs 260',
      credits: 3,
      full_name: 'Web Programming',
      id: 0,
      description: 'Introduction to web application design and implementation. Both front end and back end development with an emphasis on REST architectures.',
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
          content: 'The course is great, but I wish it was easier to make html and css do what I want them to do.',
          professor: 'J. Crandall',
          rating: 10,
        },
      ],
      },
      {
        name: 'cs 142',
        id: 1,
        credits: 3,
        full_name: 'Intro to programming',
        description: 'Introduction to object-oriented program design and development. Principles of algorithm formulation and implementation.',
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
    main_color: '#972B34',
    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png',
    description: 'Located in Cambridge, Massachusetts and established in 1636. Basically, it\'s a pretty good school.',
    courses: [
      {
      name: 'cs 50',
      full_name: 'Introduction to Computer Science',
      description: 'An introduction to the intellectual enterprises of computer science and the art of programming. You will gain a broad and robust understanding of computer science and programming',
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
        name: 'econ 101',
        full_name: 'Principles of Economics',
        description: 'This course provides an introduction to current economic issues and to basic economic principles and methods. The economist John Maynard Keynes wrote that "the ideas of economists and political philosophers, both when they are right and when they are wrong, are more powerful than is commonly understood." Economics is not primarily a set of answers, but rather a method of reasoning. By the end of the semester, students are able to use the analysis practiced in the course to form their own judgments about many of the major economic problems faced by the United States and other countries. In the first part of the semester, we focus on microeconomics, which is the study of the interaction of people and firms in markets. Since we live in a market economy, this study helps students to understand how American society organizes its economic affairs. We examine how the forces of supply and demand operate in the markets for goods and services. Students learn powerful tools that enable them to understand a great deal about the economy and how it works. Using these tools, we develop a framework to evaluate social policies. Trade—always a controversial subject—is analyzed, along with measures, such as tariffs, designed to restrict trade. Theories concerning firm behavior will then be examined—how companies decide how much to produce, and the profits which result. During the second half of the semester, we focus on macroeconomics, the study of the economy as a whole. We study economic growth and development, business cycles, and the impact of both monetary and fiscal policy on inflation, unemployment, interest rates, investment, the exchange rate, and international trade.',
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
