<template>
    <section>
        <marquee><span class="bolder">10% de descuento</span> en infusiones durante esta semana 
            <span class="shady">FLOR DE JAMAICA</span>
            <span class="shady">TILO EN HOJAS</span>
            <span class="shady">TE VERDE EN HOJAS</span>
            <span class="shady">TE NEGRO EN HOJAS</span>
            <span class="shady">ROMERO</span>
            <span class="shady">MENTA</span>
            <span class="shady">TOMILLO</span>
            <span class="shady">MANZANILLA</span>
            <span class="shady">SEN EN HOJAS</span>
            <span class="shady">HIERBABUENA SECA</span>
            
        </marquee>
    </section>
</template>

<style scoped>
    section {
        width: 100%;
        height: 30px;
        line-height: 30px;
        font-weight: 600;
        color: var(--light-black);
        background-color: var(--black);
        border-bottom: 1px solid var(--border);
        background-image: url('@/assets/table.webp');
    }

    .bolder {
        color: var(--black);
        font-weight: 700;
    }
    .shady{
        margin-left: 20px;
        text-transform:lowercase;
    }
</style>