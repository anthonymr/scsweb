<template>
    <aside>
        <h5>Categorías</h5>
        <ul>
            <li v-for="c in categories" :key="c" :class="{'selected': selectedCategory == c}" @click="selectedCategory = c">
                <div>
                    <img src="@/assets/check.svg" v-if="selectedCategory == c">
                </div>
                {{ c }}
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
export default {
    data() {
        return {
            categories: ['Cereales',
                'Condimentos',
                'Infusiones',
                'Manicería',
                'Otros'
            ],

            sortBy: [
                'Categorías',
                'Menor precio',
                'Mayor precio',
                'A-Z',
                'Z-A'
            ],

            selectedCategory: 'Cereales',
            selectedSortBy: 'A-Z',

        }
    }
}
</script>

<style scoped>
aside {
    width: 250px;
    height: 100vh;
    padding: 20px 20px 20px 100px;
    background-color: var(--white);
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