<template>
    <div class="main">
        <b-container>
            <b-row>
                <b-col v-for="(value,index) in bitValue" :key="index" class="outer" >
                    <b-row>
                        <b-col v-for="(i,j) in value" :key="j" class="inner" :class="[j < colorBox[index] ? `color-${index+1}` : 'color-5']"> 
                            {{ i }}
                        </b-col>
                    </b-row>
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
    computed:{
        bitValue:{
            get(){
                let arr =[]
                this.numberValues.forEach(el => {
                    arr.push(this.convertDecimalToBinary(el))
                });
                arr.pop();
                return arr;
            },
            set(){}
        },
        colorBox:{
            get(){
                return this.$store.state.colorBox;
            },
            set(){}
        }
    },
    methods:{
        convertDecimalToBinary(x){
            let binary;
            let bin = 0;
            let rem;
            let i = 1;
            while (x != 0) {
                rem = x % 2;
                bin = bin + rem * i;
                i = i * 10;
                x = parseInt(x / 2);
            }

            binary = bin+"";
            while (binary.length < 8){
                binary = "0" + binary;
            }
           return(binary);
        },
    }
}
</script>

<style scoped>
.main{
    margin: 50px;
}
.outer{
    margin: 15px;
    box-shadow: 10px 10px 10px -1px rgba(10, 99, 169, 0.3), -10px -10px 10px -1px rgba(255, 255, 255, 1);
    text-align: center;
}
.inner{
    padding: 5px;
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    background: #aaa;
    border: 1px solid #fff;

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
</style>