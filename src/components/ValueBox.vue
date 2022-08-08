<template>
    <div>
        <div class="idDetails d-sm-flex d-block justify-content-center align-items-center">
            <ul class="list-unstyled m-0">
                <li v-for="(i,index) in numberValues" :key="index">
                    <input type="number" v-model="numberValues[index]" @input="changeInput($event,index)" :class="`color-${index+1}`" min='0'
                        :max="index==4 ? '32' : '255'" >
                    <span v-if="index < 3">.</span><span v-if="index == 3">/</span>
                </li>
            </ul>
            <div class="copyIcon" @click="copyIp()">
                <span class="d-sm-none d-inline-block">copy</span>
                <div class="copyimg">
                    <img src="../assets/img/copy.png" alt="copy" class="d-sm-inline-block d-none" title="Copy" />
                    <img src="../assets/img/copy-mobile.png" class="d-sm-none d-inline-block" alt="copy" title="Copy" />
                </div>                                
            </div>
            <input v-show="false" type="text" :value="copiedValue" id="myInput">
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            numberValues:this.$store.state.decimalnumber,
        }
    },
    computed:{
        copiedValue:{
            get(){
                const textForCopy = this.numberValues.join(".");
                const lastIndex = textForCopy.lastIndexOf('.');
                const replacement = '/';
                const finalText =textForCopy.substring(0, lastIndex) +replacement +textForCopy.substring(lastIndex + 1);
                return finalText
            },
            set(){}
        }
    },
    methods:{
        changeInput(e,index){
            let param = [e,index]
            this.$store.commit('changeNumber',param);
            this.$store.commit('getValue');
        },
        copyIp(){
            this.$store.commit('copyText',"myInput");           
        },
    }
}
</script>