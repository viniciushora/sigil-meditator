<template>
  <div class="container">
    <div class="card">
      <div class="title">
        <a>Sigil Meditator</a>
      </div>
      <div class="buttons-container">
        <button class="rounded-button">Carregar sigilo</button>
        <button class="rounded-button">Iniciar meditação</button>
      </div>
      <div class="options-title">Opções de animação</div>
      <div class="content-container">
        <div class="props">Sigilo:</div>
        <div class="props">Música:</div>
      </div>
      <div class="options-title">Selecione a música</div>
      <div class="buttons-container">
        <button class="rounded-button">1</button>
        <button class="rounded-button">2</button>
        <button class="rounded-button">3</button>
        <button class="rounded-button">4</button>
      </div>
    </div>
    <button class="hide-button">
      <font-awesome-icon class="icon" icon="caret-left" />
    </button>
  </div>
</template>

<script lang="ts">

export default {
  name: 'OptionsSideBar'
}
</script>
  
<style scoped>
  .container{
    display: flex;
    flex-direction: row;
  }

  .card {
    background-color: #333;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width:30%;
    max-width:30%;
    border-bottom-right-radius: 10px;
  }

  .hide-button {
    display: flex;
    background-color: #333;
    color: white;
    height: 45px;
    width: 20px;
    border-left: none;
    border-top: none;
    border-bottom-right-radius:10px;
  }

  .icon {
    margin-top: 150%;
    height:50%;
  }

  .title {
    margin-bottom: 1%;
    text-align: center;
  }
  .title a {
    color: white;
    font-size: 250%;
    font-weight: bold;
  }
  
  .buttons-container {
    display: flex;
    justify-content: center;
    margin-bottom: 3%;
  }
  
  .rounded-button {
    border-radius: 13px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #333;
    color: white;
    margin-right: 5px;
    margin-left: 5px;
  }

  .content-container {
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    margin-bottom:1%;
  }

  .props {
    color: white;
  }

  .options-title {
    font-weight: bold;
    font-size:20px;
    margin-bottom:1%;
    color: white;
  }
</style>