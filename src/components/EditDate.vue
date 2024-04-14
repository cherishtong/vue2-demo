<template>
    <a-date-picker class="date edit-date" v-model="myV" @change="onChange"  :getCalendarContainer="getPopupContainer" />
</template>
<script>
export default {
    props: ['value'],
    data() {
        return {
            myV: this.value
        }
    },
    methods: {
        onChange(val) {
            console.log('111111',val)
            this.$emit('input', this.myV.format('YYYY-MM-DD'))
        },
        getPopupContainer(triggerNode){
            return triggerNode.parentNode
        }
    }
}
</script>
<style scoped>
.date >>> .ant-calendar-picker {
    border: none;
}
.date >>> .ant-input{
    border: none;
}
.date >>> .ant-input:focus{
    border: none;
    box-shadow: none;
}
</style>