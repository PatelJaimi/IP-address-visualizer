<template>
    <div class="bit-value">
        <b-row>
            <b-col v-for="(value,index) in bitValue" :key="index" class="outer" >
                <b-row>
                    <b-col v-for="(i,j) in value" :key="j" class="inner" :class="[j < colorBox[index] ? `color-${index+1}` : 'color-5']"> 
                        {{ i }}
                    </b-col>
                </b-row>
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
        // Convert Decimal To Binary
        convertDecimalToBinary(x){
            let binary;
            let bin = 0;
            let rem;
            let i = 1;

            // 5/2, Remainder = 1, Quotient = 2
            // 2/2, Remainder = 0, Quotient = 1
            // 1/2, Remainder = 1, Quotient = 0
            while (x != 0) {
                rem = x % 2;     // 7/2, Remainder = 1
                bin = bin + rem * i;   
                i = i * 10;
                x = parseInt(x / 2);  //  Quotient = 3
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