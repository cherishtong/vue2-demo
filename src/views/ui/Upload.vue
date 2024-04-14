<template>
    <div class="main" @drop.prevent="dropFile($event)" @dragover.prevent>
        <label for="input">
            <input id="input" type="file"  name="file"  style="display: none;"   @change="handleFiles">
            <span>导入EXCEL数据</span>
        </label>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        dropFile(ev) {
            console.log("当前文件", ev.dataTransfer.files[0])
        },
        dragOverHandler(event) {
            event.preventDefault();
        },
        handleFiles(event){
            console.log(event.target.files[0])
        }
    }
}
</script>
<style scoped>
.main {
    width: 300px;
    height: 300px;
    border: 1px dotted gray;
}
</style>