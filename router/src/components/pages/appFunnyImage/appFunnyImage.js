let defaultImage = import('@/assets/img/funny-image.jpg');

export default {
  name: "appFunnyImage",
  data() {
    return {
      isImagesShowed: false,
      backImage: 'linear-gradient(45deg, #f8a261, #6e9fc9)',
    };
  },
  methods: {
    showFileAsJpg(image = undefined, event) {
        image = this.$refs.fileIn.files[0];
      
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = () => {
          this.isImagesShowed = true;
          this.showOutImages('url(' + reader.result + ')');
        }
    },
    useDefaultImage() {
      defaultImage.then(src => {
        this.isImagesShowed = true;
        this.showOutImages('url('+src+')');
      });
      
    },
    showOutImages(image) {
          this.$refs.showImage.style.backgroundImage = image + ', ' + this.backImage;
          this.$refs.showOverlayImage.style.backgroundImage = image + ', ' + this.backImage;
          this.$refs.showCanvasImage.style.backgroundImage = image + ', url(https://html5book.ru/wp-content/uploads/2015/12/background63.jpg)';
          this.$refs.showRetroImage.style.backgroundImage = image + ', radial-gradient(rgba(255,255,255,.3) 20px, transparent 20px)';
          this.$refs.showMeshedImage.style.backgroundImage = image + ', radial-gradient(black 1px, transparent 1px)';
          this.$refs.showDiffImage.style.backgroundImage = image + ', linear-gradient(45deg, #fff, #fff)';
    }
  },
};