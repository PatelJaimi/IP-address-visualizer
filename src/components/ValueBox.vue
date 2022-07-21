<template>
    <div>
        <input type="number" v-model="numberValue" @input="changeNumber()" :class="className" min="0" max="12">
    </div>
</template>

<script>

export default {
    props:['numberValue','className','min','max'],
    methods:{
        changeNumber(){
            let arr=this.numberValue.split("");
            let index=0
            for(let i=0;i<arr.length;i++){
                if(arr[i]!=0){
                    index=i;
                    break;
                }
            }
            arr.splice(0, index);
            this.numberValue=arr.join("");

            if(this.className=='fifth-color'){
                if(this.numberValue >= 32){
                    this.numberValue=32;
                }
            }else{
                if(this.numberValue >= 255){
                    this.numberValue=255;
                }
            }

            this.numberValue=this.numberValue==null || this.numberValue=='' ? 0 : this.numberValue 
            this.$emit("changeNumber",this.numberValue)
        }
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
    margin: 0px 20px;
    text-align: center;
    border: none;
    outline: none;
    color: #ffffff;
    border-radius: 10px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
}
</style>