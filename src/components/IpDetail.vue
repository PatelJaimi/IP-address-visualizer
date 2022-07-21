<template>
    <div class="main">
        <span class="ip-value">{{ ipValue }}</span>
        <span class="ip-name">{{ ipname }}</span>
    </div>
</template>

<script>
export default {
    props:{
       ipValue:{
           require:true
       },
       ipname:{
           require:true
       } 
    }
}
</script>
<style scoped>
.main{
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 10px 20px;
    justify-content: center;
}
span{
    text-align: center;
}
.main .ip-name{
    text-transform: uppercase;
    font-weight: 500;
    font-size: 20px;
    color: #8a8282;
}
</style>