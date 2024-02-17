<template>
  <div @click="(e) => { e.preventDefault(); selectOpen = !selectOpen; }">
    <a-select mode="multiple" default-value="lucy" style="width: 300px" :open="true">
      <div slot="dropdownRender" slot-scope="menu">
        <v-nodes :vnodes="menu" />
        <a-divider style="margin: 4px 0;" />
        <div>
          <a-input-search placeholder="input search text" size="large" @search="addItem">
            <a-button slot="enterButton">
              添加
            </a-button>
          </a-input-search>
        </div>
      </div>
      <a-select-option v-for="item in items" :key="item" :value="item">
        {{ item }}
      </a-select-option>
    </a-select>
  </div>
</template>
<script>
let index = 0;
export default {
  components: {
    VNodes: {
      functional: true,
      render: (h, ctx) => ctx.props.vnodes,
    },
  },
  data: () => ({ items: ['jack', 'lucy'] ,
  selectOpen:false}),
  methods: {
    addItem() {
      console.log('addItem');
      this.items.push(`New item ${index++}`);
    },
  },
};
</script>
