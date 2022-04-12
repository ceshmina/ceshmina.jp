<template>
  <div class="section">
    <h1 class="section-title" id="contact-title">Contact</h1>

    <div class="sns-links">
      <template v-for="snsLink in snsLinks" :key="snsLink">
        <a :href="snsLink.link" target="_blank">
          <img :src="getContactImagePath(snsLink.image)" />
        </a>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      snsLinks: [
        {name: 'twitter', image: 'twitter-3.svg', link: 'https://twitter.com/ceshmina'},
        {name: 'instagram', image: 'instagram-2-1.svg', link: 'https://instagram.com/ceshmina'},
        {name: 'github', image: 'github-icon-1.svg', link: 'https://github.com/ceshmina'}
      ]
    }
  },
  methods: {
    getContactImagePath(image) {
      return require('../assets/contact/' + image)
    }
  }
}
</script>

<style lang="scss" scoped>
.section-title {
  font-size: 25px;
  margin-top: 70px;
}

.sns-links {
  display: flex;
  justify-content: space-between;
  width: 150px;
  margin: 30px auto 0;

  img {
    width: 30px;
  }
}
</style>
