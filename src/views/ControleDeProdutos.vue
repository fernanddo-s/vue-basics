<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h2 class="titulo">Produtos</h2>
        <hr />
      </div>
    </div>

    <div class="row sub-container">
      <div class="col-sm-2">
        <ButtonView value="Adicionar"></ButtonView>
      </div>
    </div>

    <div class="row">
        <div class="col-sm-12">
            <table class="table">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Valor</th>
                        <th>Data de cadastro</th>
                        <th></th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
  </div>
</template>
  
<script>
import ButtonView from "@/components/button/ButtonView.vue";
export default {
  name: "ControleDeProdutos",
  data() {
    return {
      mensagem: "Estou na tela de Controle de produtos",
    };
  },
  components: { ButtonView },
};
</script>
  
  <style scoped>
</style>
  