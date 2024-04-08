<template>
    <el-popover placement="bottom" width="433" trigger="manual" v-model="visible">
        <div class="layout-box">
            <div class="layout-box-content">
                <div class="data-list-box">
                    <div class="search">
                        <el-input placeholder="姓名、手机号、工号" prefix-icon="el-icon-search" v-model="condition">
                        </el-input>
                    </div>
                    <div class="virtual-list">
                        <div class="first-name">
                            <i class="el-icon-share"
                                style="font-size: 32px;border-radius: 50%;background: blue;color: aliceblue;margin-right: 8px;"></i>
                            <el-breadcrumb class="nav" separator="/">
                                <el-breadcrumb-item v-for="(n, index) in navList" :key="index">
                                    <span :class="getCurNav(index)" @click="clickNav(index)">{{ n.instName }}</span>
                                </el-breadcrumb-item>
                            </el-breadcrumb>
                        </div>
                        <div class="second-name" v-for="item in list.children" :key="item.instId">
                            <div style="display: flex;align-items: center;"> <i class="el-icon-share"
                                    style="font-size: 32px;border-radius: 50%;background: blue;color: aliceblue;margin-right: 8px;"></i>
                                <div class="first-title">{{ item.instName }}</div>
                            </div>
                            <div class="children-ck"
                                :style="{ cursor: item.hasSub ? 'pointer' : 'not-allowed', color: item.hasSub ? 'inhert' : '#dadee2' }">
                                <span @click="nextSub(item)">下级</span>
                            </div>
                        </div>
                        <div class="second-name"
                            style="flex-direction: column;justify-content: flex-start;align-items:self-start;"
                            v-for="item in list.staffList" :key="item.staffId">
                            <div style="display: flex;align-items: center;"> <i class="el-icon-share"
                                    style="font-size: 32px;border-radius: 50%;background: blue;color: aliceblue;margin-right: 8px;"></i>
                                <div class="first-title" style="margin-right:8px">{{ item.staffName }}</div>
                                <div class="first-title">{{ item.staffPhone }}</div>
                            </div>
                            <div>
                                <div class="first-title" style="margin-top:8px">工号：{{ item.staffCode }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="layout-box-footer"></div>
        </div>
        <el-button slot="reference" @click="visible = !visible">手动激活</el-button>
    </el-popover>
</template>
<script>
export default {
    name: 'OrgPersonSingleSelect',
    data() {
        return {
            data: 'zhaotong',
            visible: false,
            condition: '',
            navList: [],
            list: {
                instName: '小浦集团',
                instId: '1',
                hasSub: true,
                children: [
                    {
                        instName: "科技部",
                        instId: '2',
                        hasSub: true,
                        children: [
                            {
                                instName: "2财务部",
                                instId: '33',
                                hasSub: false
                            },
                            {
                                instName: "2董事会",
                                instId: '44',
                                hasSub: false
                            },
                        ]
                    },
                    {
                        instName: "财务部",
                        instId: '3',
                        hasSub: false
                    },
                    {
                        instName: "董事会",
                        instId: '4',
                        hasSub: false
                    },
                    {
                        instName: "科技部1",
                        instId: '6',
                        hasSub: false
                    },
                    {
                        instName: "财务部2",
                        instId: '7',
                        hasSub: false
                    },
                    {
                        instName: "董事会3",
                        instId: '8',
                        hasSub: false
                    }
                ],
                staffList: [
                    {
                        staffId: '1',
                        staffName: '赵潼1',
                        staffPhone: '16621307094',
                        staffCode: '1120112101'
                    },
                    {
                        staffId: '2',
                        staffName: '赵潼2',
                        staffPhone: '16621307094',
                        staffCode: '1120112101'
                    },
                    {
                        staffId: '3',
                        staffName: '赵潼3',
                        staffPhone: '16621307094',
                        staffCode: '1120112101'
                    },
                    {
                        staffId: '4',
                        staffName: '赵潼4',
                        staffPhone: '16621307094',
                        staffCode: '1120112101'
                    },

                ]

            }
        }
    },
    methods: {
        getCurNav(index) {
            if (index != this.navList.length - 1) {
                return 'link-item '
            } else {
                return ''
            }
        },
        clickNav(index) {
            this.navList.splice(index + 1);
        },
        nextSub(val) {
            this.navList.push({
                instName: val.instName,
                instId: val.instId,
            })

        }
    },
    mounted() {
        this.navList = [{
            instName: '小浦集团',
            instId: '1',
        }]
    }
}
</script>
<style scoped>
.layout-box {}

.layout-box-content {
    box-sizing: border-box;
    display: flex;
    padding: 16px 0 0
}

.layout-box-footer {
    box-shadow: 0 -1px 8px 0 rgba(0, 0, 0, .06);
    box-sizing: border-box;
    display: flex;
}

.data-list-box {
    width: 100%;
    height: 335px;
}

.virtual-list {
    max-height: 280px;
    overflow: auto;
    position: relative;
    padding: 0 16px;
}

.search {
    width: 100%;
    border-bottom: 1px solid #f2f3f4;
    padding: 0 16px 16px 16px;

}

.first-name {
    display: flex;
    align-items: center;
    padding: 8px 0;
}

.second-name {
    display: flex;
    align-items: center;
    padding: 8px 0 8px 8px;
    justify-content: space-between;
}

.second-name:hover {
    background: #f6f8fa;
}

.first-title {
    cursor: pointer;
    display: flex;
    font-size: 14px;
    justify-content: flex-start;
    line-height: 20px;
}

.children-ck {
    border-radius: 2px;
    box-sizing: border-box;
    font-size: 14px;
    height: 32px;
    line-height: 32px;
    margin-right: 4px;
    text-align: center;
    width: 36px;
    cursor: pointer;
}

.children-ck:hover {
    background: rgb(232, 244, 252);
    color: #168DDD;
}

.person {

    display: flex;
}

.link-item {
    cursor: pointer;

}

.link-item {
    color: #168DDD;
}



.nav>>>.el-breadcrumb__separator {
    margin: 0 1px !important;
}

.nav>>>.el-breadcrumb__item {
    float: none;
}
</style>