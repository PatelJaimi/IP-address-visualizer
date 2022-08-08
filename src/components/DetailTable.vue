<template>
    <div>
        <div class="subDetail clearfix">
            <div class="container">
                <div class="tbldetails">
                    <div class="tblTitle d-flex justify-content-between align-items-center">
                        <h2>Subnet Details</h2>
                        <button @click="clearData()">Clear all</button>
                    </div>
                    <div class="tblnfo">
                        <table class="table">
                            <thead>
                              <tr>
                                <th scope="col">Sr No.</th>
                                <th scope="col">Subnet Address</th>
                                <th scope="col">Host Address Range</th>
                                <th scope="col">Cost</th>
                              </tr>
                            </thead>
                            <tbody v-if="tableValues.length">
                              <tr v-for="(i,index) in tableValues" :key="index">
                                <td scope="row">{{ index+1 }}</td>
                                <td>{{ i.subnet }}
                                  <input v-show="false" type="text" :value="i.subnet" :id="`tableId${index}`">
                                  <img src="../assets/img/tblcopy.png" alt="copy" @click="copyIp(index)" />
                                </td>
                                <td>{{ i.firstIP }} - {{ i.lastIP }}</td>
                                <td>{{ i.count }}</td>
                              </tr>
                            </tbody>
                            <!-- data is not available -->
                            <tbody v-else>
                              <tr colspan="4">
                                <td>Data Not Found</td>
                              </tr>
                            </tbody>
                          </table>                    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{

        }
    },
    computed:{
tableValues:{
  get(){
    return this.$store.state.subnetDetails
  },
  set(){}
}
    },
    methods:{
      clearData(){
        this.$store.commit('clearDetails');           
      },
      copyIp(id){
        id="tableId"+id
        this.$store.commit('copyText',id);           
      },
    }
}
</script>
