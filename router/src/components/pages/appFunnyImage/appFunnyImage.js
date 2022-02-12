import Vue from "vue";

export default {
  name: "appFunnyImage",
  data() {
    return {
      currentDeleted: 0,
    };
  },
  methods: {
    showFileAsText() {
      let file = this.$refs.fileIn.files[0];
      let reader = new FileReader();

      reader.readAsText(file);

      reader.onload = function() {
        console.log(reader.result);
      };

      reader.onerror = function() {
        console.log(reader.error);
      };
    },
    showFileAsJpg(event) {
      // try {
        let image = this.$refs.fileIn.files[0];

        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = () => {
          this.$refs.showImage.src = reader.result;

          this.$refs.showChangedImage.src = this.changeImage(reader.result);

        }
      // } catch (err) {
      //   console.log('ошибка')
      // }
    },
    changeImage(str) {
      let ans = '';
      for (let i = 0; i < str.length; i++) {
        let current;
        switch (str[i]) {
          case 'A':
            current = '1';
            break;
          // case 'B':
          //   current = '1';
          //   break;
          // case 'C':
          //   current = '1';
          //   break;
          // case 'D':
          //   current = '1';
          //   break;
          // case 'E':
          //   current = '1';
          //   break;
          // case 'F':
          //   current = '1';
          //   break;
          // case 'G':
          //   current = '1';
          //   break;
          default:
            current = str[i];
        }
        ans += current;
      }
      return "data:image/gif;base64,R0lGODdhMAAwAPAAAAAAAP///ywAAAAAMAAw" +
   "AAAC8IyPqcvt3wCcDkiLc7C0qwyGHhSWpjQu5yqmCYsapyuvUUlvONmOZtfzgFz" +
   "ByTB10QgxOR0TqBQejhRNzOfkVJ+5YiUqrXF5Y5lKh/DeuNcP5yLWGsEbtLiOSp" +
   "a/TPg7JpJHxyendzWTBfX0cxOnKPjgBzi4diinWGdkF8kjdfnycQZXZeYGejmJl" +
   "ZeGl9i2icVqaNVailT6F5iJ90m6mvuTS4OK05M0vDk0Q4XUtwvKOzrcd3iq9uis" +
   "F81M1OIcR7lEewwcLp7tuNNkM3uNna3F2JQFo97Vriy/Xl4/f1cf5VWzXyym7PH" +
   "hhx4dbgYKAAA7";
    },
  },
  watch: {
    currentDeleted() {
      this.showFileAsJpg();
    }
  },
};