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
    text-align: center;
    padding: 20px;
    margin-bottom: 20px;
    justify-content: center;
    border-radius: 10px;
    box-shadow: inset 3px 3px 3px -1px rgba(10, 99, 169, 0.16), inset -3px -3px 3px -1px rgba(255, 255, 255, 0.70)
}
.main .ip-name{
    text-transform: uppercase;
    font-weight: 500;
    font-size: 20px;
    color: #8a8282;
}
</style>