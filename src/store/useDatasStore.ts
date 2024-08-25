import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

//Option Store
/*
export const useDatasStore = defineStore('datas', {
    state: () => ({
        datas: [""],
    }),
    getters: {
        dataCount() : number {
            return this.datas.length;
        },
    },
    actions: {
        addData(data: string) {
            this.datas.push(data);
        },
        removeData(data: string) {
            this.datas.filter((d) => d !== data);
        },
    },
    }
)*/


// Setup Store
export const useDatasStore = defineStore('datas', () => {
    const datas = ref<string[]>([])
    const dataCount = computed(() => datas.value.length)

    function addData(data: string){
        datas.value.push(data)
        console.log("Data Added, taille de la liste :", datas.value.length, "elements.")
    }

    function removeData(data: string){
        datas.value.filter((d) => d !== data)
    }

    function clearData(){
        datas.value = []
        console.log("Data Cleared, taille de la liste :", datas.value.length, "elements.")
    }

    function displayDatas(){
        console.log("Datas :")
        for (let i = 0; i < datas.value.length; i++) {
            console.log(datas.value[i])
        }
    }

    function getDatas(){
        return datas.value
    }

    return {
        datas,
        dataCount,
        addData,
        removeData,
        clearData,
        displayDatas,
        getDatas
    }
})