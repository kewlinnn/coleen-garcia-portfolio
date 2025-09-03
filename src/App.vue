<template>
  <header>
    <nav v-intersect class="navbar bs">
      <a :href="item.link" v-for="item in navbarItems" :key="item.name" class="navbar-item">
        <span>{{ item.name }}</span>
      </a>
    </nav>
  </header>

  <main>
    <section id="home" class="hero-section flex-align flex-wrap">
      <div v-intersect class="hero-text left-target">
        <h2 class="hero-greeting">Hello I'm <br />
        <span class="hero-name linear-gradient-text typewriter">Coleen Garcia</span>
      </h2>
      <h3 class="hero-job">Web Developer</h3>
      <p class="hero-description">I’m a web developer focused on front-end development with a strong foundation in Vue.js, React Native, and UI/UX design, I love turning ideas into interactive digital experiences. Whether I’m coding layouts or refining user flows in Figma, I aim to create intuitive solutions that leave a lasting impact.</p>
      </div>
      <img v-intersect src="@/assets/images/coleen-image.png" alt="my picture" class="hero-image right-target" draggable="false"/>
    </section>
    <img src="@/assets/images/wave.svg" alt="wave transition" class="wave-transition" draggable="false" />

    <section id="about" class="about-section bg-gradient">
      <h2 v-intersect class="section-title light bottom-target">About me</h2>
      <div class="about-content flex-align flex-wrap">
        <div v-intersect class="about-desc left-target">
          <p class="text-light">
            My journey into web development began with a love for the arts — from drawing and design to crafting digital visuals. That passion naturally evolved into building user interfaces that are not just functional, but also visually engaging and intuitive.
          </p>
          <p class="text-light">
            I specialize in creating responsive websites and mobile apps using Vue.js, React Native, and design tools like Figma and Canva. I thrive on transforming ideas into seamless digital experiences. Whether it’s designing wireframes or implementing interactive features, I aim to make every project both beautiful and usable.
          </p>
        </div>
        <div v-intersect class="about-education bs right-target">
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

    <section id="skills" class="skills-section">
      <h2 v-intersect class="section-title linear-gradient-text bottom-target">Technical Skills</h2>

      <div class="skills-content">
        <div v-intersect class="stack-container bs bottom-target" v-for="stack in Object.values(skills)">
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

    <section id="internship" class="internship-section">
      <h2 v-intersect class="section-title linear-gradient-text bottom-target">Internship Experience</h2>
      
      <div class="timeline">
        <div v-for="internship in internships" :key="internship.title"
        class="timeline-item"
        :class="internship.timelinePosition"
        >
          <div v-intersect class="timeline-content bs bottom-target">
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

    <section id="projects" class="projects-section bg-gradient">
      <h2 v-intersect class="section-title fc-inverse bottom-target">Projects</h2>
      <div class="card-container">
        <div v-intersect v-for="project in projects" :key="project.title" class="card bs bottom-target">
          <img :src="project.image" :alt="`${project.title} thumbnail`" class="project-image" draggable="false"/>
          <h3> {{ project.title }}</h3>
          <h4 class="project-type"> {{ project.type }}</h4>
          <div class="tech-stack">
            <span class="stack-item">{{ project.stack.join(', ') }}</span>
          </div>

          <p class="project-description">{{ project.description }}</p>

          <div class="links">
            <a :href="project.link" target="_blank" class="live-demo">Live Demo</a>
            <a :href="project.github" target="_blank" class="github-project">GitHub</a>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="socials-section">
      <h2 v-intersect class="section-title linear-gradient-text top-target">Let's Connect!</h2>

      <div class="social-content flex-align">
        <div  v-intersect class="social-details left-target">
          <div class="social-item">
            <h3 class="social-title">Social Media</h3>
            <div class="stack-container bs item-content">
              <a href="https://www.linkedin.com/in/coleenagarcia" target="_blank" class="social-link">
                <img src="@/assets/images/socials-logo/linkedin.png" alt="linkedin logo">
              </a>
              <a href="https://github.com/kewlinnn" target="_blank" class="social-link">
                <img src="@/assets/images/socials-logo/github.png" alt="github logo">
              </a>
            </div>
          </div>
          <div class="social-item">
            <h3 class="social-title">Location</h3>
            <p class="stack-container bs item-content ">
              <LocationIcon/>
              Pasig, Metro Manila, Philippines</p>
          </div>
          <div class="social-item">
            <h3 class="social-title">Response Time</h3>
            <p class="stack-container bs item-content">I typically respond within 1–2 business days. Looking forward to connecting with you!</p>
          </div>
        </div>
  
        <div v-intersect class="contact-form right-target">
          <h3 class="social-title txt-center">Send a message</h3>

          <form @submit.prevent="submit" class="stack-container form-details">
            <!-- Honeypot field (hidden) -->
            <label class="hp" aria-hidden="true">
              Leave this field empty
              <input type="text" v-model="honeypot" autocomplete="off" tabindex="-1" />
            </label>

            <label for="user-name">Name</label>
            <input type="text" id="user-name" name="user-name" placeholder="Your Name" v-model="form.name" required>
  
            <label for="user-email">Email</label>
            <input type="email" id="user-email" name="user-email" placeholder="example@email.com" v-model="form.email" required>

            <label for="user-message">Message</label>
            <textarea name="user-message" id="user-message" placeholder="Your message goes here..." rows="5" v-model="form.message" required></textarea>

            <button type="submit" class="form-btn" :disabled="loading">{{ loading ? "Sending…" : "Send Message" }}</button>


            <p v-if="status" class="txt-center txt-small status" :class="status.type">
              {{ status.message }}
            </p>

            <p class="txt-center txt-small">I value your privacy. Your information will never be shared with third parties.</p>
          </form>
        </div>
      </div>
    </section>
  </main>

  <footer class="txt-center">
    <p>&copy; {{ currentYear }} Coleen Garcia. All rights reserved.</p>
  </footer>
</template>

<script setup>
import CalendarIcon from './components/icons/CalendarIcon.vue';
import { ref, computed, reactive } from 'vue';
import LocationIcon from './components/icons/LocationIcon.vue';

const currentYear = computed(() => new Date().getFullYear());
const form = reactive({
  name: '',
  email: '',
  message: ''
});
const honeypot = ref('');
const loading = ref(false);
const status = ref(null);

const navbarItems = ref([
  { name: 'Home', link: '#home' },
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Contact', link: '#contact' }
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

const getIcon = (iconName) => {
  const ICON_BASE_SRC = '@/assets/images/';
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
  // {
  //   title: 'E-AcadEase ETEEAP Academic Progress Monitoring System with Chatbot',
  //   type: 'Thesis',
  //   stack: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'SQLite'],
  //   description: 'A web application for monitoring student applications, academic progress, and instructor compensation, with an integrated chatbot to assist with academic-related queries.'
  // },
  {
    title: 'Keno Plus',
    type: 'Bootcamp Project',
    stack: ['Vue', 'TypeScript', 'Pinia', 'CSS', 'Element Plus'],
    description: 'An interactive Keno lottery game with classic and mini game modes.',
    image: '@/assets/images/project-thumbnails/keno-plus.jpg',
    link: 'https://keno-plus.vercel.app/',
    github:'https://github.com/kewlinnn/keno-plus',
  },
  {
    title: 'DexHub',
    type: 'Personal Project',
    stack: ['HTML', 'CSS', 'EJS', 'Node.js', 'Express.js', 'PokeAPI'],
    description: 'A dynamic Pokédex web app using PokeAPI to display and filter Pokémon data with server-side rendering.',
    image: '@/assets/images/project-thumbnails/dexhub.jpg',
    link: 'https://dexhub.onrender.com/',
    github:'https://github.com/kewlinnn/dexhub',
  },
  {
    title: 'BLOGIT',
    type: 'Personal Project',
    stack: ['HTML', 'CSS', 'EJS', 'Node.js', 'Express.js'],
    description: 'A blogging platform that allows users to create, edit, and share their blog posts.',
    image: '@/assets/images/project-thumbnails/blogit.jpg',
    link: 'https://blogit-osvi.onrender.com/',
    github:'https://github.com/kewlinnn/blog-it',
  }
]

// IntersectionObserver directive
// This custom Vue directive adds a 'show' class to elements when they enter the viewport,
// enabling scroll-based animations or transitions. It stops observing after the first intersection
// for performance, and cleans up the observer when the element is unmounted.
const vIntersect = {
  mounted(el) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('show')
          observer.unobserve(entry.target); // stop observing after first trigger
        }
      },
      { threshold: 0.5 } // adjust sensitivity
    )
    observer.observe(el)
    el._observer = observer // store for cleanup
  },
  unmounted(el) {
    if (el._observer) {
      el._observer.disconnect()
      delete el._observer
    }
  },
}

async function submit() {

  if(honeypot.value) {
    //bot detected - return immediately
    return;
  }

  status.value = null;
  loading.value = true;

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to send");

    status.value = { type: "success", message: "Message sent successfully!" };
    form.name = form.email = form.message = "";
  } catch (err) {
    status.value = { type: "error", message: err.message };
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
</style>