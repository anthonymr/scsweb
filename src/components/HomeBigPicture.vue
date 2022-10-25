<template> 
    <section>
        <div class="separator"></div>
        <div class="container">
            <div>Ya tienes un espacio residuo cero y sin plástico,</div>
            <div>un espacio para hacer tu compra más consciente y saludable.</div>
            <div>Juntos por un planeta más habitable para todos.</div>
            <!--<div class="lighted">@SazonadoConSal</div>-->
        </div>
    </section>
</template>

<style scoped>
section {
    /*margin-top: 150px;*/
    width: 100%;
    height: 200px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    background-image: url('@/assets/big_picture.webp');
    display: flex;
    flex-direction: column;
    align-items: center;
}

.separator {
    width: 100%;
    height: 10px;
    background-image: linear-gradient(
  90deg,
  hsl(70deg 70% 48%) 0%,
  hsl(52deg 100% 37%) 25%,
  hsl(38deg 100% 38%) 50%,
  hsl(25deg 100% 36%) 75%,
  hsl(0deg 78% 36%) 100%
);
}

.container {
    width: var(--max-width);
    font-weight: 600;
    padding: 30px 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
}

.container > div {
    background-color: rgba(255, 255, 255, 0.856);
    width: fit-content;
    padding: 5px 10px;
    font-size: 24px;
    margin: 3px;
}

/*.container > div:last-child{
    margin-top: 20px;
    background-color: var(--black);
    font-weight: 400;
}*/

</style>