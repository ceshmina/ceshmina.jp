<template>
  <header class="header">
    <h1 class="website-title">
      <a href="#" v-scroll-to="{el: '#main', offset: -100}">ceshmina</a>
    </h1>
    <nav class="nav">
      <ul>
        <li v-for="section in sections" :key="section">
          <a href="#" v-scroll-to="{el: `#${section.titleId}`, offset: -100}">{{ section.title }}</a>
        </li>
      </ul>
    </nav>
  </header>
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
.header {
  position: fixed;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.8);
  top: 0;
  left: 0;
  width: 100%;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
  }

  @media (min-width: 800px) {
    display: flex;
    padding: 0 30px;
    justify-content: space-between;
    align-items: center;
  }

  .website-title {
    font-size: 20px;
    margin: 15px 0 10px;

    @media (min-width: 800px) {
      margin: 15px 0;
    }
  }

  .nav {
    ul {
      font-size: 15px;
      margin: 10px auto 15px;
      padding: 0;
      max-width: 300px;
      display: flex;
      justify-content: space-between;
      list-style: none;

      @media (min-width: 800px) {
        margin: 15px 70px 15px 0;
        width: 300px;
      }
    }
  }
}
</style>
