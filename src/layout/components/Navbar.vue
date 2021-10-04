<template>
  <div class="navbar">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

    <breadcrumb class="breadcrumb-container" />

    <div class="header-wrap">
      <div class="pull-right">
        <div class="user-info pull-left">
          <img class="circle-img" :src="avatar"  />
          <span class="info">{{username}}</span></div>
        <div class="header-icon pull-left"><svg-icon iconClass="exit" @click="logout"></svg-icon></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'username'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  line-height: 50px;
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 50px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }
  .header-icon {
    padding: 0 15px;
    border-left: 1px solid #ccc;
    svg {
      margin-bottom: -3px;
      font-size: 25px;
      cursor: pointer;
    }
  }
  .user-info {
    height: 100%;
    font-weight: 500;
    display: flex;
    align-items: center;
    align-content: center;
    margin: 0 10px;
    .circle-img{
      margin-right: 10px;
      border-radius: 20px;
      width:40px;
      height:40px;
      border: 1px solid #ededed;
    }
  }

}
</style>
