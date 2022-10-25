<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeBigPicture></HomeBigPicture>
    <HomeDeals></HomeDeals>
    <section>
      <HomeLeftAside></HomeLeftAside>
      <HomeStore></HomeStore>
    </section>
  </div>
</template>

<script>
import HomeBigPicture from '@/components/HomeBigPicture.vue';
import HomeHeader from '@/components/HomeHeader.vue';
import HomeDeals from '@/components/HomeDeals.vue';
import HomeLeftAside from '@/components/HomeLeftAside.vue';
import HomeStore from '@/components/HomeStore.vue';

export default {
  components: { HomeHeader, HomeBigPicture, HomeDeals, HomeLeftAside, HomeStore },
}
</script>

<style scoped>
  section {
    display: flex;
  }
</style>