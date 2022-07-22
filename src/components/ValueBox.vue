<template>
    <div class="value-box">
        <b-row>
            <b-col v-for="(i,index) in numberValues" :key="index" class="bcol">
                <input type="number" v-model="numberValues[index]" @input="changeInput(index)" :class="`color-${index+1}`">
                <span v-if="index < 3">.</span><span v-if="index == 3">/</span>
            </b-col>
        </b-row>
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
</style>