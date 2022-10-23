<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeBigPicture></HomeBigPicture>
    <HomeDeals></HomeDeals>
    <section>
      <HomeLeftAside></HomeLeftAside>
    </section>
  </div>
</template>

<script>
import HomeBigPicture from '@/components/HomeBigPicture.vue';
import HomeHeader from '@/components/HomeHeader.vue';
import HomeDeals from '@/components/HomeDeals.vue';
import HomeLeftAside from '@/components/HomeLeftAside.vue';

export default {
  components: { HomeHeader, HomeBigPicture, HomeDeals, HomeLeftAside },
}
</script>
