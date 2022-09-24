<template>
    <div class="box-login">
        <div class="logo">
            <h1>Login</h1>
           
        </div>
        <InputData></InputData>
    </div>
</template>

<script>
import InputData from "@/components/input/InputData.vue";
export default{
    name: "LoginView",
    comments: {
        InputData
    },
    components: { InputData }
}
</script>

<style scoped>

    .box-login{
        width: 300px;
        margin: auto;
        margin-top: 70px;
        border: 1px solid #edd;
    }

    .logo{
        text-align: center;
        color: var(--cor-primaria);
    }

</style>