<template>
  <section class="app-main">
    <div class="main-content">
      <transition name="fade-transform" mode="out-in">
        <router-view :key="key" />
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #f3f3f4;
}
.fixed-header+.app-main {
  padding-top: 50px;
}
.main-content {
  width: 100%;
  height: 100%;
  padding: 15px 15px 0 15px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  background-color: #fff;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
