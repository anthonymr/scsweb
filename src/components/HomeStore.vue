<template>
    <section>
        <StoreItem v-for="item in items" :key="item.id" :item="item"></StoreItem>
    </section>
</template>

<script>
import StoreItem from '@/components/StoreItem.vue';
import serviceItems from '@/services/serviceItems';

export default {
    components: { StoreItem },

    created(){
        serviceItems.getAll()
        .then(response => {
            this.$store.commit('setItems', response.data);
        })
        .catch(e => console.error(e));
    },

    computed: {
        items(){
            return this.$store.state.items;
        }
    }
}
</script>

<style scoped>
section {
    width: calc(100% - 350px);
    background-color: var(--white);
    box-sizing: border-box;
    padding: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>

