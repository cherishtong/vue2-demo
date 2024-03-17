<template>
    <div class="mydata-tip">
        <el-tooltip content="Top Left 提示文字" placement="top">
            <el-button>测试</el-button>
        </el-tooltip>
    </div>

</template>
<script>
export default {

}
</script>
<style>
/* 自定义内容的区域的颜色 */
.el-tooltip__popper {
    width: 319px;
    min-height: 180px;
    background: red !important;
    box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: none;
}

/* 改变三角形颜色 */
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
    border-bottom-color: #ffffff !important;
}

三角形朝上的时候 .el-tooltip__popper[x-placement^="top"] .popper__arrow {
    border-top-color: #ffffff !important;
}


.el-tooltip__popper.is-light[x-placement^=top] .popper__arrow::after {
    border-top-color: #0A3C84;
}

.el-tooltip__popper.is-light[x-placement^=top] .popper__arrow {
    border-top-color: #4183C9;
}
</style>