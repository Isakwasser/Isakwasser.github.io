<template>
  <div>
    <h1 class="text-center">Записи</h1>
    <div class="container">
      <AppPost v-for="(post,i) in posts" :key="i" :post="post" :users="users" :comments="comments"></AppPost>
      <div class="text-center download text-center" ref="download">
        <div class="download-square"></div>
        <div class="download-square"></div>
        <div class="download-square"></div>
      </div>
    </div>
  </div>
</template>

<script>
import AppPost from './components/AppPost.vue';

export default {
  components: {AppPost},
  data() {
    return {
      posts: [],
      users: {},
      comments: {},
      fetched: 0,
      isThereMore: true,
    }
  },
  methods: {
    async fetchPost(i) {
      this.download('show');
      await fetch(`https://jsonplaceholder.typicode.com/posts/${i}`)
        .then(response => { return response.json() })
        .then(data => {
          if (data.id) {
            this.posts.push(data);
            if (!this.users[data.userId]) {
              this.getUser(data.userId);
            }
            if (!this.comments[data.id]) {
              this.getComments(data.id);
            }
          } else {
            this.isThereMore && alert('Записи закончились');
            this.isThereMore = false;
          }
          this.download('hide');
        });
    },
    getUser(id) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => { return response.json() })
        .then(data => {
          this.users[id] = data;
        });
    },
    getComments(postId) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => { return response.json() })
        .then(data => {
          this.comments[postId] = data;
        });
    },
    download(action) {
      switch (action) {
        case 'show':
          this.$refs.download.classList.remove('d-none');
          break;
        case 'hide':
          this.$refs.download.classList.add('d-none');
          break;
      }
    },
    async checkPosition() {
      const height = document.body.offsetHeight
      const screenHeight = window.innerHeight
      const scrolled = window.scrollY
      const threshold = height - screenHeight / 10
      const position = scrolled + screenHeight
      if (position >= threshold && this.isThereMore) {
        await this.fetchPost(++this.fetched);
        await this.fetchPost(++this.fetched);
        await this.fetchPost(++this.fetched);
        await this.fetchPost(++this.fetched);
        await this.fetchPost(++this.fetched);
      }
    }
  },
  mounted() {
    this.checkPosition();
    window.addEventListener("scroll", this.checkPosition)
    window.addEventListener("resize", this.checkPosition)
  }
}
</script>

<style>
.download-square {
  width: 40px;
  height: 40px;
  background: blue;
  display: inline-block;
  animation: rotate 4s linear infinite;
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
  
}
</style>
