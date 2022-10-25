<template>
    <section>
        <StoreItem v-for="item in items" :key="item.id" :item="item"></StoreItem>
    </section>
</template>

<script>
import StoreItem from '@/components/StoreItem.vue';

export default {
    data() {
        return {
            items: [
                {
                    name: 'Maní mixto especial',
                    category: 'frutos secos',
                    price: '1.00',
                    description: 'mani garrapiñado, mani con ajonjolí, mani sin sal, uvas pasas, nueces, almendras y merey.',
                    picture: 'mani especial_.png',
                    id: 0,
                },
                {
                    name: 'Maní mixto especial',
                    category: 'frutos secos',
                    price: '1.00',
                    description: 'mani garrapiñado, mani con ajonjolí, mani sin sal, uvas pasas, nueces, almendras y merey.',
                    picture: 'mani Premium_.png',
                    id: 1,
                },
                {
                    name: 'Maní mixto especial',
                    category: 'frutos secos',
                    price: '1.00',
                    description: 'mani garrapiñado, mani con ajonjolí, mani sin sal, uvas pasas, nueces, almendras y merey.',
                    picture: 'mani mixto_.png',
                    id: 2,
                },
                {
                    name: 'Maní mixto especial',
                    category: 'frutos secos',
                    price: '1.00',
                    description: 'mani garrapiñado, mani con ajonjolí, mani sin sal, uvas pasas, nueces, almendras y merey.',
                    picture: 'mani garrapiñado_.png',
                    id: 3,
                },
                {
                    name: 'Maní mixto especial',
                    category: 'frutos secos',
                    price: '1.00',
                    description: 'mani garrapiñado, mani con ajonjolí, mani sin sal, uvas pasas, nueces, almendras y merey.',
                    picture: 'mani con ajonjoli_.png',
                    id: 4,
                },
                {
                    name: 'Maní mixto especial',
                    category: 'frutos secos',
                    price: '1.00',
                    description: 'mani garrapiñado, mani con ajonjolí, mani sin sal, uvas pasas, nueces, almendras y merey.',
                    picture: 'Mani con avena.png',
                    id: 5,
                },
                {
                    name: 'Maní mixto especial',
                    category: 'frutos secos',
                    price: '1.00',
                    description: 'mani garrapiñado, mani con ajonjolí, mani sin sal, uvas pasas, nueces, almendras y merey.',
                    picture: 'Mani con coco.png',
                    id: 6,
                },
                {
                    name: 'Maní mixto especial',
                    category: 'frutos secos',
                    price: '1.00',
                    description: 'mani garrapiñado, mani con ajonjolí, mani sin sal, uvas pasas, nueces, almendras y merey.',
                    picture: 'mani Premium_.png',
                    id: 7,
                },
                {
                    name: 'Maní mixto especial',
                    category: 'frutos secos',
                    price: '1.00',
                    description: 'mani garrapiñado, mani con ajonjolí, mani sin sal, uvas pasas, nueces, almendras y merey.',
                    picture: 'Almendras_.png',
                    id: 8,
                },
                {
                    name: 'Maní mixto especial',
                    category: 'frutos secos',
                    price: '1.00',
                    description: 'mani garrapiñado, mani con ajonjolí, mani sin sal, uvas pasas, nueces, almendras y merey.',
                    picture: 'nueces peladas_.png',
                    id: 9,
                },
                {
                    name: 'Maní mixto especial',
                    category: 'frutos secos',
                    price: '1.00',
                    description: 'mani garrapiñado, mani con ajonjolí, mani sin sal, uvas pasas, nueces, almendras y merey.',
                    picture: 'Merey_.png',
                    id: 10,
                },
                {
                    name: 'Maní mixto especial',
                    category: 'frutos secos',
                    price: '1.00',
                    description: 'mani garrapiñado, mani con ajonjolí, mani sin sal, uvas pasas, nueces, almendras y merey.',
                    picture: 'chia_.png',
                    id: 11,
                },

            ],
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

