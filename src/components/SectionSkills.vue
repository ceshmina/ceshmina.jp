<template>
  <div class="section">
    <h1 class="section-title" id="skills-title">Skills</h1>

    <div class="subsection">
      <h2 class="subsection-title">frontend</h2>
      <div class="skills">
        <template v-for="skill in frontendSkills" :key="skill">
          <dt>{{ skill.name }}</dt>
          <dd>{{ formatLevel(skill.level) }}</dd>
        </template>
      </div>

      <h2 class="subsection-title">backend</h2>
      <div class="skills">
        <template v-for="skill in backendSkills" :key="skill">
          <dt>{{ skill.name }}</dt>
          <dd>{{ formatLevel(skill.level) }}</dd>
        </template>
      </div>

      <h2 class="subsection-title">infrastructure</h2>
      <div class="skills">
        <template v-for="skill in infrastructureSkills" :key="skill">
          <dt>{{ skill.name }}</dt>
          <dd>{{ formatLevel(skill.level) }}</dd>
        </template>
      </div>

      <h2 class="subsection-title">data science</h2>
      <div class="skills">
        <template v-for="skill in datascienceSkills" :key="skill">
          <dt>{{ skill.name }}</dt>
          <dd>{{ formatLevel(skill.level) }}</dd>
        </template>
      </div>

      <h2 class="subsection-title">others</h2>
      <div class="skills">
        <template v-for="skill in otherSkills" :key="skill">
          <dt>{{ skill.name }}</dt>
          <dd>{{ formatLevel(skill.level) }}</dd>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      frontendSkills: [
        {name: 'HTML/CSS', level: 3},
        {name: 'JavaScript', level: 3},
        {name: 'Vue.js', level: 3},
        {name: 'TypeScript', level: 2}
      ],
      backendSkills: [
        {name: 'C', level: 2},
        {name: 'C++', level: 3},
        {name: 'Python', level: 4},
        {name: 'Scala', level: 2}
      ],
      infrastructureSkills: [
        {name: 'Docker', level: 3},
        {name: 'Kubernetes', level: 2},
        {name: 'AWS', level: 2},
        {name: 'GCP', level: 3}
      ],
      datascienceSkills: [
        {name: 'Jupyter', level: 5},
        {name: 'SQL/BigQuery', level: 5},
        {name: 'scikit-learn', level: 3},
        {name: 'TensorFlow', level: 3}
      ],
      otherSkills: [
        {name: 'English', level: 3},
        {name: 'Mathematics', level: 5},
        {name: 'TeX/LaTeX', level: 4}
      ]
    }
  },
  methods: {
    formatLevel(level) {
      return '★'.repeat(level) + '☆'.repeat(5 - level)
    }
  }
}
</script>

<style lang="scss" scoped>
.section-title {
  margin-top: 70px;
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

  dt, dd {
    padding: 8px 0;
  }

  dt {
    font-size: 15px;
    font-weight: bold;
    text-align: right;
    padding-right: 8px;
    width: calc(50% - 8px);
  }

  dd {
    font-size: 18px;
    text-align: left;
    margin-left: 0;
    padding-left: 8px;
    width: calc(50% - 8px);
  }
}
</style>
