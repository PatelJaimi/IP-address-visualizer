<template>
    <div>
        <about />
        <div class="ip">
            <value-box 
                :className='"first-color"'
                :numberValue="decimalnumber1" 
                @changeNumber="(value)=>{
                    decimalnumber1=value
                    getValue()
                }"
                :min="0"
                :max="32"
            ></value-box>
            <span>.</span>
            <value-box 
                :className='"second-color"'
                :numberValue="decimalnumber2"
                @changeNumber="(value)=>{
                    decimalnumber2=value
                    getValue()
                }"
            ></value-box>
            <span>.</span>
            <value-box 
                :className='"third-color"'
                :numberValue="decimalnumber3"
                @changeNumber="(value)=>{
                    decimalnumber3=value
                    getValue()
                }"
            ></value-box>
            <span>.</span>
            <value-box 
                :className='"fourth-color"'
                :numberValue="decimalnumber4"
                @changeNumber="(value)=>{
                    decimalnumber4=value
                    getValue()
                }"
            ></value-box>
            <span>/</span>
            <value-box 
                :className='"fifth-color"'
                :numberValue="bitValue"
                @changeNumber="(value)=>{
                    bitValue=value
                    getValue()
                }"
            ></value-box>
        </div>
        <div class="bit">
            <bit-value :bitValue="decimalToBinary1" :className='"first-color"' :colorBox="colorBox1"></bit-value>
            <bit-value :bitValue="decimalToBinary2" :className='"second-color"' :colorBox="colorBox2"></bit-value>
            <bit-value :bitValue="decimalToBinary3" :className='"third-color"' :colorBox="colorBox3"></bit-value>
            <bit-value :bitValue="decimalToBinary4" :className='"fourth-color"' :colorBox="colorBox4"></bit-value>
        </div>
        <div class="ip-details">
            <ip-detail :ipValue="netmaskValue" :ipname="netmask"></ip-detail>
            <ip-detail :ipValue="firstUsableIPValue" :ipname="firstUsableIP"></ip-detail>
            <ip-detail :ipValue="lastUsableIPValue" :ipname="lastUsableIP"></ip-detail>
            <ip-detail :ipValue="countValue" :ipname="count"></ip-detail>
        </div>
        <footer-compo />
    </div>
</template>

<script>
import About from '../components/About.vue'
import ValueBox from '../components/ValueBox.vue'
import BitValue from '../components/BitValue.vue'
import IpDetail from '../components/IpDetail.vue'
import FooterCompo from '../components/Footer.vue'

export default{
     components:{
         About,
         ValueBox,
         BitValue,
         IpDetail,
         FooterCompo,
     },
     data(){
        return{
            decimalnumber1:10,
            decimalnumber2:88,
            decimalnumber3:135,
            decimalnumber4:144,
            bitValue:28,

            // bit value
            decimalToBinary1:null,
            decimalToBinary2:null,
            decimalToBinary3:null,
            decimalToBinary4:null,

            //  ip details
            netmask:'Netmask',
            firstUsableIP:'First Usable IP',
            lastUsableIP:'Last Usable IP',
            count: 'Count',
            netmaskValue:null,
            firstUsableIPValue:null,
            lastUsableIPValue:null,
            countValue: null,

            colorBox1:8,
            colorBox2:8,
            colorBox3:8,
            colorBox4:8,
        }
    },
    created(){
        this.getValue();
    },
    methods:{
        getValue(){
            var Netmask = require('netmask').Netmask

            var ip4Value=this.decimalnumber1+"."+this.decimalnumber2+"."+this.decimalnumber3+"."+this.decimalnumber4+"/"+this.bitValue;
            var block = new Netmask(ip4Value);

            this.netmaskValue=block.mask;
            this.firstUsableIPValue=block.first;
            this.lastUsableIPValue=block.last;
            this.countValue= block.size;

            this.decimalToBinary1=this.convertDecimalToBinary(this.decimalnumber1);
            this.decimalToBinary2=this.convertDecimalToBinary(this.decimalnumber2);
            this.decimalToBinary3=this.convertDecimalToBinary(this.decimalnumber3);
            this.decimalToBinary4=this.convertDecimalToBinary(this.decimalnumber4);

            if(this.bitValue < 9){
                this.colorBox1=this.bitValue;
                this.colorBox2=0;     
                this.colorBox3=0;      
                this.colorBox4=0;
            }else if(this.bitValue < 17 && this.bitValue > 8){
                this.colorBox1=8;
                this.colorBox2=this.bitValue-8;     
                this.colorBox3=0;      
                this.colorBox4=0;
            }else if(this.bitValue < 25 && this.bitValue > 16){
                this.colorBox1=8;
                this.colorBox2=8;     
                this.colorBox3=this.bitValue-16;      
                this.colorBox4=0;
            }else if(this.bitValue < 33 && this.bitValue > 24){
                this.colorBox1=8;
                this.colorBox2=8;     
                this.colorBox3=8;      
                this.colorBox4=this.bitValue-24;
            }
        },
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
    },
}
</script>

<style scoped>
.ip{
    margin: 50px;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
}
span{
    font-size: 50px;
    font-weight: 900;
}
.bit{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 50px;
}
.bit div{
    margin: 10px;
}
.ip-details{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 50px;
}
</style>