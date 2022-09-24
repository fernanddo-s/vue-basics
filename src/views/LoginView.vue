<template>
    <div class="box-login">
        <div class="logo">
            <h1>Login</h1>
        </div>
        <InputData label="E-mail" placeHolder="exemplo@email.com"></InputData>
        <InputData label="Senha" type="password"></InputData>
        <ButtonView value="Login" :callback="login"></ButtonView>
    </div>
</template>

<script>
import InputData from "@/components/input/InputData.vue";
import ButtonView from "@/components/button/ButtonView.vue";
export default{
    name: "LoginView",
    comments: {
        InputData
    },
    components: { InputData, ButtonView },
    methods:{
        login(){
            this.$router.push({path:"/"})
        }
    }
}
</script>

<style scoped>

    .box-login{
        width: 300px;
        margin: auto;
        margin-top: 70px;
        border: 1px solid #edd;
        padding: 30px;
        background-color: rgb(255, 255, 255);
    }

    .logo{
        text-align: center;
        color: var(--cor-primaria);
        font-size: 22px;
    }

</style>