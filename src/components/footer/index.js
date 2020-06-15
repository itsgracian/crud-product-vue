Vue.component('footer-component', {
    template: `<footer>
    <div class="app-container">
    <div class="mt-5">All right reserved ${new Date().getFullYear()}</div>
     <div class="bold">@ gratien</div>
     <div class="mt-5">Follow me on</div>
     <div class="footer-menu">
     <ul>
     <li><a href="https://twitter.com/Itsgracian" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
     <li><a href="https://www.linkedin.com/in/gratien-tuyishimire-255469113/" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
     <li><a href="https://github.com/itsgracian" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></li>
     <li><a href="https://www.instagram.com/itsgracian/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
     </ul>
     </div>
    </div>
    </footer>`
});