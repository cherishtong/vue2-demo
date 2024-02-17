<template>
  <div @click="(e) => { e.preventDefault(); selectOpen = !selectOpen; }">
    <a-select v-model="selectVal" style="width: 300px" :open="selectOpen">
      <div slot="dropdownRender" slot-scope="menu">
        <!-- <v-nodes :vnodes="menu" /> -->
        <div style="padding: 1rem;">
          <a-input-search placeholder="input search text" @search="onSearch" />
          <a-tree v-model="checkedKeys"  :expanded-keys="expandedKeys" :auto-expand-parent="autoExpandParent"
            :selected-keys="selectedKeys" :tree-data="treeData" @expand="onExpand" @select="onSelect" />
        </div>
        <div>
          <a-input-search placeholder="input search text" size="large" @search="addItem">
            <a-button slot="enterButton">
              添加
            </a-button>
          </a-input-search>
        </div>
      </div>
      <!-- <a-select-option v-for="item in items" :key="item" :value="item">
        {{ item }}asda
      </a-select-option> -->
    </a-select>
  </div>
</template>
<script>
let index = 0;
const treeData = [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: [
          { title: '0-0-0-0', key: '0-0-0-0' },
          { title: '0-0-0-1', key: '0-0-0-1' },
          { title: '0-0-0-2', key: '0-0-0-2' },
        ],
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          { title: '0-0-1-0', key: '0-0-1-0' },
          { title: '0-0-1-1', key: '0-0-1-1' },
          { title: '0-0-1-2', key: '0-0-1-2' },
        ],
      },
      {
        title: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
  {
    title: '0-1',
    key: '0-1',
    children: [
      { title: '0-1-0-0', key: '0-1-0-0' },
      { title: '0-1-0-1', key: '0-1-0-1' },
      { title: '0-1-0-2', key: '0-1-0-2' },
    ],
  },
  {
    title: '0-2',
    key: '0-2',
  },
];
export default {
  components: {
    VNodes: {
      functional: true,
      render: (h, ctx) => ctx.props.vnodes,
    },
  },
  data: () => ({
    items: ['jack', 'lucy'],
    selectOpen: false,
    selectVal: ['jack'],
    expandedKeys: ['0-0-0', '0-0-1'],
    autoExpandParent: true,
    checkedKeys: ['0-0-0'],
    selectedKeys: [],
    treeData,
  }),
  methods: {
    addItem() {
      console.log('addItem');
      this.items.push(`New item ${index++}`);
    },
    onSearch(val) {
      console.log("当前搜索内容", val)
    },
    onExpand(expandedKeys) {
      console.log('onExpand', expandedKeys);
      // if not set autoExpandParent to false, if children expanded, parent can not collapse.
      // or, you can remove all expanded children keys.
      this.expandedKeys = expandedKeys;
      this.autoExpandParent = false;
    },
    onCheck(checkedKeys) {
      console.log('onCheck', checkedKeys);
      this.checkedKeys = checkedKeys;
    },
    onSelect(selectedKeys, info) {
      console.log('onSelect', info);
      this.selectedKeys = selectedKeys;
      console.log('选择结果',  this.selectedKeys);
      this.selectVal = this.selectedKeys[0]
      this.selectOpen = false
    },
  },
};
</script>
