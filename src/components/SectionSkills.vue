<template>
  <div class="section">
    <h1 class="section-title" id="skills-title">Skills</h1>

    <div class="subsections-wrapper">
      <div class="subsection" v-for="skillArea in skills" :key="skillArea">
        <h2 class="subsection-title">{{ skillArea.area }}</h2>
        <div class="skills">
          <template v-for="skill in skillArea.skills" :key="skill">
            <dt>{{ skill.name }}</dt>
            <dd class="skill-image"><img :src="getSkillImagePath(skill.image)"></dd>
            <dd class="skill-level">{{ formatLevel(skill.level) }}</dd>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          area: 'frontend',
          skills:  [
            {name: 'HTML/CSS', image: 'html-5.svg', level: 3},
            {name: 'JavaScript', image: 'javascript.svg', level: 3},
            {name: 'Vue.js', image: 'vue.svg', level: 3},
            {name: 'TypeScript', image: 'typescript-icon.svg', level: 2}
          ]
        },
        {
          area: 'backend',
          skills: [
            {name: 'C', image: 'c.svg', level: 2},
            {name: 'C++', image: 'c-plusplus.svg', level: 3},
            {name: 'Python', image: 'python.svg', level: 4},
            {name: 'Scala', image: 'scala.svg', level: 2}
          ]
        },
        {
          area: 'infrastructure',
          skills: [
            {name: 'Docker', image: 'docker-icon.svg', level: 3},
            {name: 'Kubernetes', image: 'kubernetes.svg', level: 2},
            {name: 'AWS', image: 'aws.svg', level: 2},
            {name: 'GCP', image: 'google-cloud.svg', level: 3}
          ]
        },
        {
          area: 'data science',
          skills: [
            {name: 'Jupyter', image: 'jupyter.svg', level: 5},
            {name: 'SQL/BigQuery', image: 'google_bigquery-icon.svg', level: 5},
            {name: 'scikit-learn', image: 'Scikit_learn_logo_small.svg', level: 3},
            {name: 'TensorFlow', image: 'tensorflow.svg', level: 3}
          ]
        }
      ]
    }
  },
  methods: {
    getSkillImagePath(image) {
      return require('../assets/skills/' + image)
    },
    formatLevel(level) {
      return '★'.repeat(level) + '☆'.repeat(5 - level)
    }
  }
}
</script>

<style lang="scss" scoped>
.section-title {
  font-size: 25px;
  margin-top: 70px;
}

.subsections-wrapper {
  margin: 0 auto;
  max-width: 800px;

  @media (min-width: 800px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}

.subsection {
  width: 320px;
  box-shadow: 0 0 10px #bec0c2;
  margin: 30px auto;
  padding: 5px 0 20px;
}

.subsection-title {
  font-size: 20px;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  max-width: 720px;
  margin: 0 auto;

  dt, dd.skill-level {
    padding: 8px 0;
  }

  dt {
    font-size: 15px;
    font-weight: bold;
    text-align: right;
    padding-right: 12px;
    width: calc(50% - 30px);
  }

  dd {
    &.skill-level {
      font-size: 18px;
      text-align: left;
      margin-left: 0;
      padding-left: 12px;
      width: calc(50% - 30px);
    }

    &.skill-image {
      margin: 0;
      img {
        width: 25px;
      }
    }
  }
}
</style>
