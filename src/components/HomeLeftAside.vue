<template>
    <aside>
        <h5>Categorías</h5>
        <ul>
            <li v-for="c in categories" :key="c.category" :class="{'selected': currentCateogry == c.category}" @click="sercurrentCateogry(c)">
                <div>
                    <img src="@/assets/check.svg" v-if="currentCateogry == c.category">
                </div>
                {{ c.category }} ({{c.count}})
            </li>
        </ul>
        <h5>Ordenar por</h5>
        <ul>
            <li v-for="s in sortBy" :key="s" :class="{'selected': selectedSortBy == s}" @click="selectedSortBy = s">
                <div>
                    <img src="@/assets/check.svg" v-if="selectedSortBy == s">
                </div>
                {{ s }}
            </li>
        </ul>
    </aside>
</template>

<script>
import serviceItems from '@/services/serviceItems';

export default {
    data() {
        return {
            sortBy: [
                'Categorías',
                'Menor precio',
                'Mayor precio',
                'A-Z',
                'Z-A'
            ],

            selectedSortBy: 'A-Z',
        }
    },

    created(){
        serviceItems.getCategories()
        .then(response => {
            const categories = response.data;

            categories.unshift({
                category: 'Ver todo',
                count: categories.reduce((a,b) => a + parseInt(b.count), 0)
            });

            this.$store.commit('setCategories', categories);
        })
        .catch(e => console.error(e));
    },

    methods: {
        sercurrentCateogry(category){
            this.$store.commit('sercurrentCateogry', category);
        }
    },

    computed: {
        categories(){
            return this.$store.state.categories;
        },
        currentCateogry(){
            return this.$store.state.currentCateogry;
        }
    }
}
</script>

<style scoped>
aside {
    width: 350px;
    height: auto;
    padding: 20px 20px 20px 100px;
    background-color: var(--white);
    box-sizing: border-box;
}

h5 {
    font-size: 20px;
    color: var(--light-black);
}

ul {
    list-style-type: none;
    font-size: 13px;
    font-weight: 400;
    color: var(--light-black);
}

li {
    margin: 15px 0;
    cursor: pointer;
    user-select: none;
    display: flex;
    margin-left: -10px;
}

li > div {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    margin-top: -4px;
}

.selected{
    font-weight: 700;
}

</style>