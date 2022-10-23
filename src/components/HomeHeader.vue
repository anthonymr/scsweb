<template> 
    <header>
        <div class="scs-header">
            <div class="scs-header_logo">
                <img src="@/assets/logo.svg">
                <div>
                    <img src="@/assets/location-dot.svg">
                    <h2>Manicería en</h2>
                    <h3>Ciudad Ojeda</h3>
                    <h4>Zulia</h4>
                </div>
            </div>
            <div class="scs-header_search">
                <input type="text" placeholder="Busca productos, categorías y más...">
                <div class="scs-header_search_button">
                    <img src="@/assets/search.svg">
                </div>
            </div>
            <div class="scs-header_aditional">
                <h1>Tienda de frutos secos, infusiones, granos, semillas y condimentos a granel.</h1>
            </div>
            <div class="shopping-cart">
                <div>
                    <img src="@/assets/cart-shopping.svg">
                </div>
                <div>
                    <img src="@/assets/bell.svg">
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
  header{
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0px;
    background-image: url('@/assets/table.webp');
    background-size: 100%;
    z-index: 999;
  }

  .scs-header {
    width: var(--max-width);
    height: 150px;
    display: flex;
  }

  .scs-header_logo {
    width: 300px;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .scs-header_logo > img {
    height: 110px;
  }

  .scs-header_logo > div {
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .scs-header_logo > div > img {
    width: 20px;
    margin-bottom: 5px;
  }

  .scs-header_search {
    width: calc(100% - 720px);
    height: 100%;
    display: flex;
    align-items: center;
  }

  .scs-header_search > input {
    width: calc(100% - 50px);
    font-size: 18px;
    border: 1px solid var(--green);
    border-radius: 7px 0 0 7px;
    height: 28px;
    padding: 6px;
  }

  .scs-header_search > input::placeholder{
    color: var(--placeholder);
  }
  .scs-header_search > input:focus{
    outline: 1px solid var(--green);
  }

  .scs-header_search_button {
    width: 50px;
    height: 40px;
    border: 1px solid var(--green);
    background-color: var(--green);
    border-left: none;
    border-radius: 0 7px 7px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
  }

  .scs-header_search_button > img {
    width: 20px;
  }

  .scs-header_aditional {
    width: 300px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
  }

  .shopping-cart {
    width: 120px;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .shopping-cart > div {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .shopping-cart > div > img {
    width: 20px;
  }
</style>