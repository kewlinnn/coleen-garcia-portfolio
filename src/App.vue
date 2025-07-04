<template>
  <header>
    <nav class="navbar bs">
        <span class="navbar-item" v-for="item in navbarItems" key="item.name">{{ item.name }}</span>
    </nav>
  </header>

  <main>
    <section class="hero-section flex-align flex-wrap">
      <div class="hero-text">
        <h2 class="hero-greeting">Hello I'm <br />
        <span class="hero-name linear-gradient-text typewriter">Coleen Garcia</span>
      </h2>
      <h3 class="hero-job">Web Developer</h3>
      <p class="hero-description">I’m a web developer focused on front-end development with a strong foundation in Vue.js, React Native, and UI/UX design, I love turning ideas into interactive digital experiences. Whether I’m coding layouts or refining user flows in Figma, I aim to create intuitive solutions that leave a lasting impact.</p>
      </div>
      <img src="../src/assets/images/coleen-image.png" alt="my picture" class="hero-image" draggable="false"/>
    </section>
    <img src="../src/assets/images/wave.svg" alt="wave transition" class="wave-transition" draggable="false" />

    <section class="about-section bg-gradient">
      <h2 class="section-title light">About me</h2>
      <div class="about-content flex-align flex-wrap">
        <div class="about-desc">
          <p class="text-light">
            My journey into web development began with a love for the arts — from drawing and design to crafting digital visuals. That passion naturally evolved into building user interfaces that are not just functional, but also visually engaging and intuitive.
          </p>
          <p class="text-light">
            I specialize in creating responsive websites and mobile apps using Vue.js, React Native, and design tools like Figma and Canva. I thrive on transforming ideas into seamless digital experiences. Whether it’s designing wireframes or implementing interactive features, I aim to make every project both beautiful and usable.
          </p>
        </div>
        <div class="about-education bs">
          <p class="txt-lg bold">Bachelor of Science in Computer Science</p>
          <p class="txt-md bold">Technological University of the Philippines</p>
          <p class="txt-sm italic">Cum Laude</p>
          <div class="flex-group">
            <div class="educ-item flex-align flex-gap-1">
              <CalendarIcon :color="colors.softBlack" />
              <span>2020 - 2024</span>
            </div>
            <div class="educ-item flex-align flex-gap-1">
              <LocationIcon :color="colors.softBlack" />
              <span>Manila, Philippines</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="skills-section">
      <h2 class="section-title linear-gradient-text">Technical Skills</h2>

      <div class="skills-content">
        <div class="stack-container bs" v-for="stack in skills">
          <h3 class="stack-title">{{ stack.name }}</h3>
          <div class="tech-wrapper flex-wrap">
            <div class="stack flex-gap-2" v-for="tech in stack.tech">
              <img class="tech-image" :src="tech.icon" :alt="`${tech.name} icon`" draggable="false">
              <span>{{ tech.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="internship-section">
      <h2 class="section-title linear-gradient-text">Internship Experience</h2>
      
      <div class="timeline">
        <div v-for="internship in internships" :key="internship.title"
        class="timeline-item"
        :class="internship.timelinePosition"
        >
          <div class="timeline-content bs">
              <h3 class="linear-gradient-text">{{ internship.title }}</h3>
              <h4 class="fs-1 fc-secondary">{{ internship.company }}</h4>
              <h5 class="fs-1 fw-1">{{ internship.duration }}</h5>
              <h5 class="fs-1 fw-1">{{ internship.location }} | {{ internship.classification }}</h5>
              <ul class="internship-description">
                <li v-for="bullet in internship.description">{{ bullet }}</li>
              </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="projects-section bg-gradient">
      <h2 class="section-title fc-inverse">Projects</h2>
      <div class="card-container">
        <div v-for="project in projects" class="card bs">
          <h3> {{ project.title }}</h3>
          <h4> {{ project.type }}</h4>
          <span v-for="stack in project.stack"> {{ stack }}</span>
          <p>{{ project.description }}</p>
        </div>
      </div>
      
    </section>
  </main>
</template>

<script setup>
import CalendarIcon from './components/icons/CalendarIcon.vue';
import { ref } from 'vue';
import LocationIcon from './components/icons/LocationIcon.vue';

const navbarItems = ref([
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Projects', link: '/projects' },
  { name: 'Contact', link: '/contact' }
])

const colors = {
  primary: "#f4f4f4",
  secondary: "#A04747",
  accent: "#D8A25E",
  accentLight: "#EEDF7A",
  softBlack: "#343131",
  darkBlack: "#1a1a1a",
  brightWhite: "#ffffff"
}

const ICON_BASE_SRC = '../src/assets/images/';

const getIcon = (iconName) => {
  return `${ICON_BASE_SRC}${iconName}.png`;
}

const skills = {
  frontend:{
    name: "Front-end",
    tech:
    [
    { name: 'Vue.js', icon: getIcon('vue-icon') },
    { name: 'JavaScript', icon: getIcon('js-icon') },
    { name: 'TypeScript', icon: getIcon('ts-icon') },
    { name: 'Bootstrap', icon: getIcon('bootstrap-icon') },
    { name: 'React', icon: getIcon('react-icon')},
    { name: 'React Native', icon: getIcon('react-native-icon') },
    { name: 'HTML5', icon: getIcon('html-icon') },
    { name: 'CSS3', icon: getIcon('css-icon') },
    { name: 'JQuery', icon: getIcon('jquery-icon') },
    { name: 'SCSS', icon: getIcon('scss-icon') },
  ]},
  backend: {
    name: "Back-end",
    tech:
  [
    { name: 'Node.js', icon: getIcon('node-icon') },
    { name: 'Express.js', icon: getIcon('express-icon') },
    { name: 'Rest API', icon: getIcon('restapi-icon') },
    { name: 'PostgreSQL', icon: getIcon('postgresql-icon') },
  ]
  },
  tools: {
    name: "Tools & Platforms",
    tech: [
    { name: 'Git', icon: getIcon('git-icon') },
    { name: 'GitHub', icon: getIcon('github-icon') },
    { name: 'Postman', icon: getIcon('postman-icon') },
  ]}
}

const internships = [
  {
    timelinePosition: 'left',
    title: 'Front-end Developer',
    company: 'Digiplus Interactive Corp.',
    duration: 'Mar 2025 - Jun 2025',
    location: 'Taguig City, Philippines',
    classification: 'On-site',
    description: [
      "Developed responsive internal registration website using Vue.js, TypeScript, and Element Plus UI library to streamline user onboarding and data entry",
      "Integrated RESTful APIs using Axios to build dynamic data tables, search filters, and pagination components.",
      "Collaborated in an Agile environment, and received hands-on mentorship from senior developers, enhancing proficiency in debugging, and version control with Git and GitHub."
    ]
  },
  {
    timelinePosition: 'right',
    title: 'Technical (Web and Mobile Developer)',
    company: 'VisibleTeam',
    duration: 'Mar 2024 - Oct 2024',
    location: 'New York, USA',
    classification: 'Remote',
    description: [
      "Developed user interfaces for a web-based team collaboration app using Vue.js.",
      "Created and iterated on wireframes and UI prototypes in Figma to improve user experience based on feedback",
      "Integrated RESTful APIs to enable real-time updates and user authentication, enhancing data synchronization across devices."
    ]
  }
]

const projects = [
  {
    title: 'E-AcadEase ETEEAP Academic Progress Monitoring System with Chatbot',
    type: 'Thesis',
    stack: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'SQLite'],
    description: 'A web application for monitoring student applications, academic progress, and instructor compensation, with an integrated chatbot to assist with academic-related queries.'
  },
  {
    title: 'Keno Plus',
    type: 'Bootcamp Project',
    stack: ['Vue', 'TypeScript', 'Pinia', 'CSS', 'Element Plus'],
    description: 'An interactive Keno lottery game with classic and mini game modes.'
  },
  {
    title: 'DexHub',
    type: 'Personal Project',
    stack: ['HTML', 'CSS', 'JavaScript', 'EJS', 'Node.js', 'Express.js', 'PokeAPI'],
    description: 'A dynamic Pokédex web app using PokeAPI to display and filter Pokémon data with server-side rendering.'
  }
]
</script>

<style scoped>
</style>