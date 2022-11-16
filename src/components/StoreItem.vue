<template>
    <article>
        <div class="picture">
            <div class="category" :style="'background-color: ' + computedItem.color">{{ computedItem.category }}</div>
            <img :src="require('@/assets/items/' + computedItem.id + '.webp')">
        </div>
        <div class="description">
            <div class="title">{{ computedItem.name.toLowerCase() }}</div>
            <div class="price"><input type="number" min="0" max="5000" :value="computedItem.qty"><span>gramos x</span>{{ computedItem.price100 }} <span>Bs</span></div>
            <div class="aditional"><span>Contiene:</span> {{ computedItem.description }}</div>
        </div>
    </article>
</template>

<script>
export default {
    props: ['item'],

    computed: {
        computedItem(){
            let color = '';

            switch(this.item.category){
                case 'Infusiones': color = 'var(--blue)';
                    break; 
                case 'Manicería': color = 'var(--green)';
                    break;
                case 'Cereales': color = 'var(--contrast)';
                    break;
                case 'Condimentos': color = 'var(--orange)';
                    break;
                default: color = 'var(--gray)';
                    break;
            }

            return {... this.item, color, qty: 100}
        }
    }
}
</script>

<style scoped>
article {
    width: calc(100% / 5 - 22px);
    min-width: 200px;
    height: 250px;
    margin: 10px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid var(--border);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.picture {
    height: calc(100% - 100px);
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
    text-transform: capitalize;
}

.category {
    font-size: 12px;
    font-weight: 600;
    position: absolute;
    margin-top: 5px;
    padding: 2px 5px;
    color: var(--white);
}

.price {
    font-size: 22px;
    color: var(--orange);
    font-weight: 600;
    text-align: right;
    padding-right: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    line-height: 25px;
}

.price>input {
    border: none;
    text-align: right;
    border-bottom: 1px solid var(--border);
    width: 50px;
    margin-right: 5px;
    color: var(--gray);
    font-family: 'Courier New', Courier, monospace;
}

.price>span {
    font-size: 12px;
    font-weight: 400;
    color: rgb(172, 172, 172);
    margin: 0 5px;
}

.aditional {
    margin-top: 5px;
    font-size: 12px;
}

.aditional>span {
    font-weight: 600;
}
</style>