export default {
    data() {
        return {
            show: false,
            showDetailPhoto: false,
            detailPhotoSrc: '',
        };
    },
    methods: {
        About_click(event) {
            let target = event.target;
            if (target && target.classList.contains('showDetail')) {
                this.detailPhotoSrc = target.src;
                this.showDetailPhoto = true;
            }
        },
    },
}