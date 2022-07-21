import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        decimalnumber: ['10', '88', '135', '144', '28'],
        netmaskValue: null,
        firstUsableIPValue: null,
        lastUsableIPValue: null,
        countValue: null,
        colorBox: [],
    },
    mutations: {
        increment(state) {
            state.count++
        },
        changeDecimalnumber(state, value) {
            state.decimalnumber1 = value;
        },
        getValue(state) {
            // Detail Value of ip
            var Netmask = require('netmask').Netmask
            let decimalnumber1 = state.decimalnumber[0]
            let decimalnumber2 = state.decimalnumber[1]
            let decimalnumber3 = state.decimalnumber[2]
            let decimalnumber4 = state.decimalnumber[3]
            let bitValue = state.decimalnumber[4]

            var ip4Value = decimalnumber1 + "." + decimalnumber2 + "." + decimalnumber3 + "." + decimalnumber4 + "/" + bitValue;
            var block = new Netmask(ip4Value);

            state.netmaskValue = block.mask;
            state.firstUsableIPValue = block.first;
            state.lastUsableIPValue = block.last;
            state.countValue = block.size;

            // color change according to divider
            if (state.decimalnumber[4] < 9) {
                state.colorBox = [state.decimalnumber[4], 0, 0, 0];
            } else if (state.decimalnumber[4] < 17 && state.decimalnumber[4] > 8) {
                state.colorBox = [8, state.decimalnumber[4] - 8, 0, 0];
            } else if (state.decimalnumber[4] < 25 && state.decimalnumber[4] > 16) {
                state.colorBox = [8, 8, state.decimalnumber[4] - 16, 0];
            } else if (state.decimalnumber[4] < 33 && state.decimalnumber[4] > 24) {
                state.colorBox = [8, 8, 8, state.decimalnumber[4] - 24];
            }
        },
        changeNumber(state, i) {
            let arr = state.decimalnumber[i].split("");
            let index = 0
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] != 0) {
                    index = i;
                    break;
                }
            }
            arr.splice(0, index);
            state.decimalnumber[i] = arr.join("");

            if (i == 4) {
                if (state.decimalnumber[i] >= 32) {
                    state.decimalnumber[i] = 32;
                    // "Value must be between 0 to 32"
                }
            } else {
                if (state.decimalnumber[i] >= 255) {
                    state.decimalnumber[i] = 255;
                    // "Value must be between 0 to 255"
                }
            }

            state.decimalnumber[i] = state.decimalnumber[i] == null || state.decimalnumber[i] == '' ? 0 : state.decimalnumber[i]
        }
    }
})