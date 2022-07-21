<template>
    <div class="main">
        <div v-for="(value,index) in bitValue" :key="index" class="ip-value">
            <div :class="[index<colorBox ? className : 'fifth-color']">{{ value }}</div>
        </div>
    </div>
</template>

<script>

export default {
    props:{
        bitValue:{
            require:true,
            default:"00000000"
        },
        className:{
            require:true,
            default:"fifth-color"
        },
        colorBox:{
            require:true,
            default:0
        }
    },
    data(){
        return{
            
        }
    }
}
</script>

<style scoped>
.main{
    display: flex;
    margin: 0px 20px;
}
.ip-value{
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    text-align: center;
    padding: 0;
}
.ip-value div{
    padding: 5px;
    font-size: 20px;
    color: #ffffff;
    margin: 0;
}

</style>