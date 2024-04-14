<template>
    <a-select
      ref="select"
      v-model="myV"
      @change="handleChange"
      style="width: 100%;"
      class="my-select"
      :getPopupContainer="getPopupContainer"
    >
    <template #suffixIcon>
        <a-icon type="caret-down" />
    </template>
      <a-select-option value="1">Jack</a-select-option>
      <a-select-option value="2">Lucy</a-select-option>
      <a-select-option value="3">Disabled</a-select-option>
      <a-select-option value="4">yiminghe</a-select-option>
    </a-select>
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
        handleChange(val){
              console.log("当前变化",val)
              this.$emit('input',val)
        },
        getPopupContainer(triggerNode){
            return triggerNode.parentNode
        }
      }
  }
  </script>
  <style scoped>
    .my-select >>> .ant-select-selection{
        border: none;
    }
    .my-select >>> .ant-select-focused .ant-select-selection,   .my-select >>>  .ant-select-selection:focus,   .my-select >>> .ant-select-selection:active {
        border: none !important; 
        box-shadow: none !important;
    }

    .my-select >>> .ant-select-selection{
        border: none !important;
        box-shadow: none !important;
    }
    .my-select >>> .ant-select-arrow{
        top:11px !important;
    }
  </style>