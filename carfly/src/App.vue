<template>
  <div class="d-flex flex-column min-vh-100">
    <HeaderView></HeaderView>
    <FormView class="animateOnScroll"></FormView>
    <ServicesView class="animateOnScroll"></ServicesView>
    <AboutView class="animateOnScroll"></AboutView>
    <LocationView class="animateOnScroll"></LocationView>
    <FooterView class="mt-auto"></FooterView>
  </div>
</template>

<script>
import HeaderView from './views/HeaderView.vue';
import FooterView from './views/FooterView.vue';
import FormView from './views/FormView.vue';
import ServicesView from './views/ServicesView.vue';
import AboutView from './views/AboutView.vue';
import LocationView from './views/LocationView.vue';
export default {
  name: "App",
  components: { HeaderView, FooterView, FormView, ServicesView, AboutView, LocationView },
  mounted() {
    let options = {
      rootMargin: '0px',
      threshold: 0
    }
    let callback = function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // entry.target.classList.remove('animateOnScroll_show');
          // entry.target.clientWidth;
          entry.target.classList.add('animateOnScroll_show');
        }
      })
    };
    let observer = new IntersectionObserver(callback, options);
    document.querySelectorAll('.animateOnScroll').forEach(el => {
      observer.observe(el)      
    });
  },
  
}
</script>
