<template>
  <div class="section">
    <h1 class="section-title" id="contact-title">Contact</h1>

    <div class="contacts">
      <div class="email">
        <email size=25 fillColor="#2c3e50" />
        <p>shu&#64;ceshmina.jp</p>
      </div>
      <div class="sns-links">
        <template v-for="snsLink in snsLinks" :key="snsLink">
          <a :href="snsLink.link" target="_blank">
            <component :is="snsLink.tag" size=25 fillColor="#2c3e50" />
          </a>
        </template>
      </div>
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

.contacts {
  display: flex;
  justify-content: center;
}

.email {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  margin: 30px 0;
  padding-right: 30px;
  font-size: 15px;
  border-right: 1px solid #2c3e50;

  p {
    margin: 0 0 3px;
  }
}

.sns-links {
  display: flex;
  justify-content: space-between;
  width: 120px;
  margin: 30px 0;
  padding-left: 30px;
}
</style>
