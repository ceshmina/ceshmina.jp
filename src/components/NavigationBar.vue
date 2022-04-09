<template>
  <nav class="nav">
    <ul>
      <li v-for="section in sections" :key="section">
        <a href="#" v-scroll-to="{el: `#${section.titleId}`, offset: -100}">{{ section.title }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        {title: 'Profile', titleId: 'profile-title'},
        {title: 'Skills', titleId: 'skills-title'},
        {title: 'Works', titleId: 'works-title'},
        {title: 'Contact', titleId: 'contact-title'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.8);
  top: 0;
  left: 0;
  width: 100%;

  ul {
    margin: 30px auto;
    padding: 0;
    max-width: 300px;
    display: flex;
    justify-content: space-between;
    list-style: none;
  }

  a {
    font-size: 15px;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
  }
}
</style>