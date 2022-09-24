<template>
    <div>
        <label for="">{{ label }}</label><br>
        <input :type="type" :placeHolder="placeHolder">
    </div>
</template>
<script>
export default {
    name:"InputData",
    props:{
        label:{type: String, require},
        placeHolder:{type: String},
        type:{type:String, default: 'text'}
    },
    data(){
        return{

        }
    }
}
</script>
<style>
    input{
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #dddd; 
        outline: none;
        border-radius: 4px;
        box-sizing: border-box;
    }
</style>