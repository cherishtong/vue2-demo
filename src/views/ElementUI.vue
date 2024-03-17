<template>
    <div>
        <el-tooltip class="item" effect="dark" placement="top">
            <el-popover placement="bottom" trigger="click">
                <el-button slot="reference">click 激活</el-button>
                <div class="multi-select-menu">
                    <div class="multi-select-wrap">
                        <div class="multi-select-list">
                            <el-input v-model="input" placeholder="请输入内容"></el-input>
                            <el-tree ref="tree" class="el-my-tree" check-strictly :data="data" show-checkbox
                                node-key="id" @check-change="handleCheckChange" :props="defaultProps">
                            </el-tree>
                        </div>
                        <div class="multi-select-result">
                            <div class="flex-between ">
                                <div>已选择</div>
                                <div style="color:#9ba2a9;font-size: 12px;" @click="clear">清空已选</div>
                            </div>
                            <div class="selected-list">
                                <div v-for="(n, index) in result" :key="index" class="flex-between select-tag">
                                    <span>{{ n.label }}</span>
                                    <span @click="cancel(n.id)">取消</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="foot-content ">
                        <div>
                            <el-button>确定</el-button>
                            <el-button>取消</el-button>
                        </div>
                    </div>
                </div>
            </el-popover>
        </el-tooltip>
        <br/>
        <el-tooltip class="item" effect="dark" placement="top">
            <el-popover placement="bottom" trigger="click">
                <el-button slot="reference">日期激活</el-button>
                <el-date-picker v-model="value2" type="daterange" align="right" unlink-panels range-separator="-"
                    start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions">
                </el-date-picker>
            </el-popover>
        </el-tooltip>
        <OrgPersonSingleSelect />
        <MyToolTip />
    </div>
</template>
<script>
import OrgPersonSingleSelect from "./OrgPersonSingleSelect.vue";
import MyToolTip from "./MyToolTip.vue";
export default {
    components:{OrgPersonSingleSelect,MyToolTip},
    data() {
        return {
            data: [{
                id: 1,
                label: '一级 1',
                children: [{
                    id: 2,
                    label: '二级 1-1',
                    children: [{
                        id: 3,
                        label: '三级 1-1-1',
                        children: [{
                            id: 4,
                            label: '二级 1-1',
                            children: [{
                                id: 5,
                                label: '三级 1-1-1',
                                children: [{
                                    id: 6,
                                    label: '三级 1-1-1'
                                }, {
                                    id: 7,
                                    label: '三级 1-1-2'
                                }]
                            }, {
                                id: 8,
                                label: '三级 1-1-2'
                            }]
                        }]
                    }, {
                        id: 9,
                        label: '三级 1-1-2'
                    }]
                }]
            }, {
                id: 10,
                label: '一级 2',
                children: [{
                    id: 11,
                    label: '二级 2-1'
                }, {
                    id: 12,
                    label: '二级 2-2'
                }]
            }, {
                id: 13,
                label: '一级 3',
                children: [{
                    id: 14,
                    label: '二级 3-1'
                }, {
                    id: 15,
                    label: '二级 3-2'
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            input: '',
            result: [],
            pickerOptions: {
                shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            },
            value1: '',
            value2: ''
        }
    },
    methods: {
        //节点选中状态发生变化时的回调
        handleCheckChange(data, checked, indeterminate) {
            //获取所有选中的节点 start
            let res = this.$refs.tree.getCheckedNodes()
            this.result = res
            console.log(res)
            //获取所有选中的节点 end
        },
        clear() {
            this.$nextTick(() => {
                this.$refs.tree.setCheckedKeys([]);
            })
        },
        cancel(id) {
            // // 获取所有节点的key数组
            // let allKeys = this.$refs.tree.getCheckedKeys();
            // // 移除不想取消选中的节点的key
            // let index = allKeys.indexOf(id);
            // if (index !== -1) {
            //     allKeys.splice(index, 1);
            // }
            // // 使用setCheckedKeys重置选中状态
            // this.$refs.tree.setCheckedKeys(allKeys);
            this.$refs.tree.setChecked(id, false, true)
        }

    }
}
</script>
<style>
.multi-select-menu {
    max-height: 425px;
    width: 625px;
}

.multi-select-wrap {
    display: flex;
    max-height: 368px;
}

.multi-select-list {
    flex: 1 1 0%;
    padding: 16px;
}

.multi-select-result {
    flex: 1 1 0%;
    border-left: 1px solid #e5e7ea;
    box-sizing: border-box;
    height: 368px;
    overflow: hidden;
    padding: 8px;
    padding-top: 16px;
}

.flex-between {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 8px;
}

.selected-list {
    max-height: 320px;
    overflow-y: auto;
}

.select-tag {
    line-height: 16px;
    padding: 8px;

}

.foot-content {
    background: rgb(255, 255, 255);
    border-top: 1px solid #e5e7ea;
    padding: 12px;
    text-align: right;
}

.el-popover {
    padding: 0;
}

.el-my-tree {
    margin-top: 8px;
    max-height: 304px;
    overflow-y: auto;
}

.el-tooltip__popper {
    background: grey !important;
}

.el-tooltip__popper[x-placement^=top] .popper__arrow:after {
    border-top-color: grey !important;
}

* 改变三角形颜色 */

/* 朝上 */
.el-tooltip__popper[x-placement^="bottom"] .popper__arrow:after {
    border-bottom-color: #ffffff;
}

/* 朝下 */
.el-tooltip__popper[x-placement^="top"] .popper__arrow:after {
    border-top-color: #ffffff;
}

/* 改变三角形外边框 */
/* 三角形朝下的时候 */
.el-tooltip__popper[x-placement^="bottom"] .popper__arrow {
    border-bottom-color: gray !important;
}

/* 三角形朝上的时候 */
.el-tooltip__popper[x-placement^="top"] .popper__arrow {
    border-top-color: #ffffff !important;
}
</style>