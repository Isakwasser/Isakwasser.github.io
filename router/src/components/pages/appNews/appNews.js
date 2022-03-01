import appNewsLeft from './left/appLeft.vue';
import appNewsContent from './content/appContent.vue';
import appNewsModal from './modal/appNewsModal.vue';

export default {
  name: "appNews",
  components: {
    'appNewsLeft': appNewsLeft,
    'appNewsContent': appNewsContent,
    'appNewsModal': appNewsModal,
  },
  data() {
    return {
      gotData: {},
      status: 'download',
    };
  },
  methods: {
    getNews() {
      fetch('https://newsdata.io/api/1/news?apikey=pub_508083ccacd95ad6401c5b0d54908e5c3b34&language=en')
        .then(response => {
          // console.log(response);
          return response.json();
        })
        .then(data => {
          console.log(data.results[0]);
          this.gotData = data;
          this.status = 'show';
        });
    }
  },
  created() {
    this.getNews();
  },
};