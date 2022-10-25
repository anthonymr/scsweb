<template>
    <article>
        <div class="picture">
            <img :src="require('@/assets/items/' + item.picture)">
        </div>
        <div class="description">
            <div class="title">{{ item.name }}</div>
            <div class="category">{{ item.category }}</div>
            <div class="price"><span>(100g)</span>USD {{ item.price }}</div>
            <div class="aditional"><span>Contiene:</span> {{ item.description }}</div>
        </div>
    </article>
</template>

<script>
export default {
    props: ['item'],
}
</script>

<style scoped>
article {
    width: calc(100% / 4 - 33px);
    min-width: 280px;
    height: 350px;
    margin: 15px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid var(--border);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.picture {
    height: calc(100% - 135px);
}

.picture>img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
}

.description {
    padding: 10px;
    color: var(--light-black);
}

.title {
    font-size: 16px;
    font-weight: 600;
}

.category {
    font-size: 12px;
    margin-bottom: 3px;
}

.price {
    font-size: 22px;
    color: var(--green);
    font-weight: 600;
    text-align: right;
    padding-right: 10px;
}

.price>span {
    font-size: 12px;
    font-weight: 400;
    color: rgb(172, 172, 172);
    margin-right: 5px;
}

.aditional {
    margin-top: 5px;
    font-size: 12px;
}

.aditional>span {
    font-weight: 600;
}
</style>