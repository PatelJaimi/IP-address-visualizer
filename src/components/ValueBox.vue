<template>
    <div class="value-box">
        <b-row>
            <b-col v-for="(i,index) in numberValues" :key="index" class="bcol">
                <input type="number" v-model="numberValues[index]" @input="changeInput($event,index)" :class="`color-${index+1}`" min='0'
                :max="index==4 ? '32' : '255'" >
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
        changeInput(e,index){
            let param = [e,index]
            this.$store.commit('changeNumber',param);
            this.$store.commit('getValue');
        },
    }
}
</script>

<style scoped>
.color-1 {
    background: #873cff;
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