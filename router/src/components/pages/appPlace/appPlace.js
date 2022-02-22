let bgImage = import('./img/earth.jpg');

export default {
  name: "appPlace",
  data() {
    return {
      navigator: undefined,
      ipwhois: undefined,
      ipwhois__more: false,
      bgImage: bgImage,
    };
  },
  methods: {
    getNavigatorPosition() {
      navigator.geolocation.getCurrentPosition((data) => {
        // console.log(data);
        this.navigator = data;
      });
    },
    getIpPosition() {
      fetch('https://ipwhois.app/json/')
        .then(dataResponse => {
          return dataResponse.json();
        })
        .then(data => {
          console.log(data);
          this.ipwhois = data;
        });
    },
  },
  created() {
    this.getNavigatorPosition();
    this.getIpPosition();
  }
};