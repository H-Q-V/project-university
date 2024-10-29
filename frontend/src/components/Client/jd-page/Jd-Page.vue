<template>
  <div>
    <JdHeader></JdHeader>
    <JdDetailHeader></JdDetailHeader>
    <div class="wrapper">
      <div class="container">
        <div class="row">
          <JdMainContent></JdMainContent>
          <JdSidebar></JdSidebar>
        </div>
      </div>
    </div>
    <JdFooter></JdFooter>
  </div>
</template>

<script>
import JdHeader from './JdHeader.vue'
import JdDetailHeader from './JdDetailHeader.vue'
import JdMainContent from './JdMainContent.vue'
import JdSidebar from './JdSidebar.vue'
import JdFooter from './JdFooter.vue'

export default {
  name: 'JdPage',
  components: {
    JdHeader,
    JdDetailHeader,
    JdMainContent,
    JdSidebar,
    JdFooter
  }
}
</script>