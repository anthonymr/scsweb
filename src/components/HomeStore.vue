<template>
    <section>
        <StoreItem v-for="item in items" :key="item.id" :item="item"></StoreItem>
    </section>
</template>

<script>
import StoreItem from '@/components/StoreItem.vue';
import serviceItems from '@/services/serviceItems';

export default {
    created(){
        serviceItems.getAll()
        .then(response => this.items = response.data)
        .catch(e => console.error(e));
    },
    data() {
        return {
            items: [],
        }
    },
    components: { StoreItem }
}
</script>

<style scoped>
section {
    width: calc(100% - 250px);
    background-color: var(--white);
    box-sizing: border-box;
    padding: 50px 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>

