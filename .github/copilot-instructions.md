# Coleen Garcia Portfolio
Coleen Garcia Portfolio is a Vue 3 + Vite single-page application showcasing a web developer's professional portfolio. The portfolio includes sections for skills, experience, projects, and contact information with interactive features.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively
- Bootstrap, build, and test the repository:
  - `npm install` -- takes ~10 seconds. Expect peer dependency warnings (non-blocking).
  - `npm run build` -- takes ~1.5 seconds. NEVER CANCEL. Set timeout to 30+ seconds.
  - `npm run dev` -- starts in ~656ms, runs on http://localhost:5173/. NEVER CANCEL for dev work.
  - `npm run preview` -- serves built files on http://localhost:4173/. Use for testing production builds.

## Validation
- ALWAYS manually validate any changes by running the full development workflow:
  1. Run `npm install` if dependencies changed
  2. Run `npm run dev` to start development server
  3. Open http://localhost:5173/ in browser
  4. Test complete user scenarios: scroll through all sections, fill contact form, click project links
  5. Run `npm run build` to ensure production build succeeds
  6. Run `npm run preview` and test production build at http://localhost:4173/
- The application should display a complete portfolio with:
  - Hero section with Coleen's photo and introduction
  - About section with education details
  - Technical skills with icons for Vue.js, JavaScript, TypeScript, etc.
  - Internship experience timeline
  - Projects section with working external links
  - Contact form with social media links
- External links (Live Demo, GitHub) open in new tabs - this is expected behavior
- Form validation works: clicking "Send Message" with empty required fields should focus the first empty field

## Common Tasks
The following are outputs from frequently run commands. Reference them instead of viewing, searching, or running bash commands to save time.

### Repository Structure
```
/home/runner/work/coleen-garcia-portfolio/coleen-garcia-portfolio/
├── .github/
├── .gitignore
├── .vscode/
│   └── extensions.json (recommends Vue.volar)
├── README.md
├── index.html (main HTML entry point)
├── jsconfig.json (path aliases configuration)
├── package.json (dependencies and scripts)
├── package-lock.json
├── public/ (static assets)
├── src/
│   ├── App.vue (main Vue component - entire portfolio)
│   ├── assets/
│   │   ├── images/ (portfolio photos, icons, project thumbnails)
│   │   └── main.css (global styles)
│   ├── components/
│   │   └── icons/ (LocationIcon.vue, CalendarIcon.vue)
│   └── main.js (Vue app entry point)
└── vite.config.js (Vite configuration with @ alias)
```

### Key Dependencies (package.json)
```json
{
  "dependencies": {
    "vue": "^3.5.17"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^6.0.0",
    "vite": "^7.0.0",
    "vite-plugin-vue-devtools": "^7.7.7"
  }
}
```

### Key Configuration Files
- **vite.config.js**: Standard Vue 3 + Vite setup with Vue DevTools and @ alias for src/
- **jsconfig.json**: Configures @ path alias and excludes node_modules/dist from VS Code
- **No linting tools**: No ESLint, Prettier, or other code quality tools configured
- **No testing framework**: No Jest, Vitest, or other testing tools configured
- **No CI/CD**: No GitHub Actions or other automation configured

### Important Code Locations
- **Main portfolio content**: `src/App.vue` (single large component with all portfolio sections)
- **Styles**: `src/assets/main.css` (global CSS, component styles are in App.vue)
- **Project data**: Hardcoded in `src/App.vue` script section (projects, skills, internships arrays)
- **Images**: `src/assets/images/` (profile photo, tech icons, project thumbnails, social logos)
- **External links**: Projects link to live demos on Vercel/Render and GitHub repositories

### Node.js Environment
- **Node.js**: v20.19.4 (tested and working)
- **npm**: 10.8.2 (tested and working)
- **Build output**: dist/ directory with optimized assets

### Development Workflow
1. **Start development**: `npm run dev` opens dev server with hot reload
2. **Make changes**: Edit src/App.vue for content, src/assets/main.css for global styles
3. **Test changes**: Refresh browser at http://localhost:5173/
4. **Build for production**: `npm run build` creates optimized dist/ folder
5. **Test production**: `npm run preview` serves production build

### Common Modifications
- **Update portfolio content**: Edit the data arrays in `src/App.vue` script section
- **Add new skills/technologies**: Add to skills object in App.vue
- **Update projects**: Modify projects array in App.vue
- **Change styling**: Edit CSS in `src/assets/main.css` or component styles in App.vue
- **Add images**: Place in `src/assets/images/` and reference with relative paths

### Troubleshooting
- **Build fails**: Check for syntax errors in Vue components, ensure all image paths are correct
- **Images not loading**: Verify paths start with `../src/assets/images/` or move to public/ and use absolute paths
- **Dev server not starting**: Check if port 5173 is already in use, try different port with `--port` flag
- **Peer dependency warnings**: Safe to ignore, related to vite-plugin-vue-devtools compatibility

### Performance Notes
- Build is very fast (~1.5 seconds) due to simple single-component structure
- Development server starts quickly (~656ms) 
- No heavy dependencies or complex build processes
- Portfolio images are optimized but can be further compressed if needed