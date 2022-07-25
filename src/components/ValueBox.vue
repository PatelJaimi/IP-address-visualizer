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
    background: #b384ff;
}

.color-2 {
    background: #ff7fb4;
}

.color-3 {
    background: #7a87ff;
}

.color-4 {
    background: #10db7d;
}

.color-5 {
    background: #bbbbbb;
}
</style>