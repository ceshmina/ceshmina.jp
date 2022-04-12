<template>
  <div class="home">
    <SectionProfile />
    <SectionSkills />
    <SectionWorks />
    <SectionContact />
  </div>
</template>

<script>
import SectionProfile from '@/components/SectionProfile.vue'
import SectionSkills from '@/components/SectionSkills.vue'
import SectionWorks from '@/components/SectionWorks.vue'
import SectionContact from '@/components/SectionContact.vue'

export default {
  name: 'HomeView',
  components: {
    SectionProfile,
    SectionSkills,
    SectionWorks,
    SectionContact
  }
}
</script>
