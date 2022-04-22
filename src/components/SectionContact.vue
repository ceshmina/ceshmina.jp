<template>
  <div class="section">
    <h1 class="section-title" id="contact-title">Contact</h1>

    <div class="email">
      <email size=25 fillColor="#2c3e50" /> shu&#64;ceshmina.jp
    </div>
    <div class="sns-links">
      <template v-for="snsLink in snsLinks" :key="snsLink">
        <a :href="snsLink.link" target="_blank">
          <component :is="snsLink.tag" size=25 fillColor="#2c3e50" />
        </a>
      </template>
    </div>
  </div>
</template>

<script>
import Email from 'vue-material-design-icons/Email.vue'
import Twitter from 'vue-material-design-icons/Twitter.vue'
import Instagram from 'vue-material-design-icons/Instagram.vue'
import Github from 'vue-material-design-icons/Github.vue'

export default {
  components: {
    Email,
    Twitter,
    Instagram,
    Github
  },
  data() {
    return {
      snsLinks: [
        {name: 'twitter', tag: 'twitter', link: 'https://twitter.com/ceshmina'},
        {name: 'instagram', tag: 'instagram', link: 'https://instagram.com/ceshmina'},
        {name: 'github', tag: 'github', link: 'https://github.com/ceshmina'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  margin-top: 50px;
  padding: 30px 0 150px;
  background-color: #f5f0eb;
}

.section-title {
  font-size: 25px;
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
