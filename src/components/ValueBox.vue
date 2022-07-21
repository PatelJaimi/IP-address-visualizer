<template>
    <div>
        <b-container>
            <b-row>
                <b-col v-for="(i,index) in numberValues" :key="index" class="bcol">
                    <input type="number" v-model="numberValues[index]" @input="changeInput(index)" :class="`color-${index+1}`">
                    <span v-if="index < 3">.</span>
                    <span v-if="index == 3">/</span>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>

export default {
    data(){
        return{
            numberValues:this.$store.state.decimalnumber,
        }
    },
    methods:{
        changeInput(index){
            this.$store.commit('changeNumber',index);
            this.$store.commit('getValue');
        },
    }
}
</script>

<style scoped>
input{
    width: 150px;
    height: 70px;
    font-size: 50px;
    font-weight: 900;
    padding: 10px 20px;
    text-align: center;
    border: none;
    outline: none;
    color: #ffffff;
    background: #aaa;
    border-radius: 10px;
    box-shadow: 3px 3px 3px -1px rgba(10, 99, 169, 0.16), -3px -3px 3px -1px rgba(255, 255, 255, 0.70)
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
}
.color-1 {
    background: #e600ee;
}

.color-2 {
    background: #fd006a;
}

.color-3 {
    background: #75c907;
}

.color-4 {
    background: #a9ca03;
}

.color-5 {
    background: #bbbbbb;
}
span{
    margin-left: 25px;
    font-size: 55px;
    font-weight: 900;
}
.bcol{
    display: flex;
    flex-direction: row;
}
</style>