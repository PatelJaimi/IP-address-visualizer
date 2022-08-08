<template>
    <div>
        <!-- header -->
        <about />
        <div>
            <div class="abtIp text-center">
                <div class="container">
                    <div class="idInfo">
                        <div class="idspc">
                            <p class="mb-4">Enter IP address. In the latter case, the provided prefix length overrides the Subnet mask value.</p>
                            <value-box></value-box>
                            <div class="listidInfo">
                                <ip-detail :ipValue="this.$store.state.netmaskValue" :ipname="netmask"></ip-detail>
                                <ip-detail :ipValue="this.$store.state.countValue" :ipname="count"></ip-detail>
                                <ip-detail :ipValue="this.$store.state.firstUsableIPValue" :ipname="firstUsableIP"></ip-detail>
                                <ip-detail :ipValue="this.$store.state.lastUsableIPValue" :ipname="lastUsableIP"></ip-detail>
                            </div>   
                        </div>
                        <div class="addTablebtn">
                            <button @click="addData()">Add to table</button>
                        </div>
                    </div>                
                </div>
            </div>
        </div>
        <!-- Subnet Details Table -->
        <detail-table />
        <!-- footer -->
        <footer-compo />
    </div>
</template>

<script>
import About from '../components/About.vue'
import ValueBox from '../components/ValueBox.vue'
import IpDetail from '../components/IpDetail.vue'
import DetailTable from '../components/DetailTable.vue'
import FooterCompo from '../components/Footer.vue'

export default{
     components:{
         About,
         ValueBox,
         IpDetail,
         DetailTable,
         FooterCompo,
     },
     data(){
        return{
            //  ip details
            netmask:'Netmask',
            firstUsableIP:'From',
            lastUsableIP:'To',
            count: 'Total Count',
        }
    },
    created(){
        this.$store.commit('getValue');
        this.$store.commit('addDetail');
    },
    methods:{
        addData(){
            this.$store.commit('addDetail');           
        }
    }
}
</script>