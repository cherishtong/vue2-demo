<template>
  <a-input class="input" v-model="myV" placeholder="Basic usage" @change="valChange" />
</template>
<script>
export default {
    props:['value'],
    data(){
        return {
            myV:this.value
        }
    },
    methods:{
        valChange(val){
            this.$emit('input',this.myV)
        }
    }
}
</script>
<style scoped>
.input{
    border: none ;
}
.input:hover,.input:focus{
    box-shadow: none !important;
    border: none !important;
}
</style>