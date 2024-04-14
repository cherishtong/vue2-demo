<template>
    <div class="main" @drop.prevent="dropFile($event)" @dragover.prevent>
        <label for="input">
            <input id="input" type="file" name="file" style="display: none;" @change="handleFiles">
            <span>导入EXCEL数据</span>
        </label>
        <div >
            <a-tabs  v-model:activeKey="activeKey" @change="tabsChange">
            <a-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</a-tab-pane>
            <a-tab-pane key="2" tab="Tab 2" force-render>Content of Tab Pane 2</a-tab-pane>
            <a-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</a-tab-pane>
           </a-tabs>
        </div>
      
    </div>
</template>
<script>
import { values } from 'xe-utils';

export default {
    data() {
        return {
            activeKey: '1'
        }
    },
    methods: {
        dropFile(ev) {
            console.log("当前文件", ev.dataTransfer.files[0])
        },
        dragOverHandler(event) {
            event.preventDefault();
        },
        handleFiles(event) {
            console.log(event.target.files[0])
        },
        clickTabs($event){
            console.log($event)
            $event.stopPropagation()
            return false
        },
        tabsChange(values){
            this.activeKey = '1'
            console.log(values)
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