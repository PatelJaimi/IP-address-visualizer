<template>
    <div>
        <about />
        <div>
            <value-box></value-box>
            <bit-value></bit-value>
            <b-container>
                <b-row>
                    <b-col><ip-detail :ipValue="this.$store.state.netmaskValue" :ipname="netmask"></ip-detail></b-col>
                    <b-col><ip-detail :ipValue="this.$store.state.firstUsableIPValue" :ipname="firstUsableIP"></ip-detail></b-col>
                    <b-col><ip-detail :ipValue="this.$store.state.lastUsableIPValue" :ipname="lastUsableIP"></ip-detail></b-col>
                    <b-col><ip-detail :ipValue="this.$store.state.countValue" :ipname="count"></ip-detail></b-col>
                </b-row>
            </b-container>
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
            //  ip details
            netmask:'Netmask',
            firstUsableIP:'First Usable IP',
            lastUsableIP:'Last Usable IP',
            count: 'Count',
        }
    },
    created(){
        this.$store.commit('getValue');
    },
}
</script>