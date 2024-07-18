<template>
    <div>
        <el-button @click="click1">点击</el-button>
        <div ref="ripple" v-ripple class="button" @click="ceshi">I have different color</div>
        <div ref="graph" class="main"></div>
    </div>

</template>
<script>

import { Graph } from '@antv/x6'
const data = {
    nodes: [
        {
            id: 'node1',
            shape: 'rect',
            x: 40,
            y: 40,
            width: 100,
            height: 40,
            label: 'hello',
            attrs: {
                // body 是选择器名称，选中的是 rect 元素
                body: {
                    stroke: '#8f8f8f',
                    strokeWidth: 1,
                    fill: '#fff',
                    rx: 6,
                    ry: 6,
                },
            },
        },
        {
            id: 'node2',
            shape: 'rect',
            x: 160,
            y: 180,
            width: 100,
            height: 40,
            label: 'world',
            attrs: {
                body: {
                    stroke: '#8f8f8f',
                    strokeWidth: 1,
                    fill: '#fff',
                    rx: 6,
                    ry: 6,
                },
            },
        },
        {
            id: 'node3',
            shape: 'rect',
            x: 180,
            y: 280,
            width: 100,
            height: 40,
            label: 'Three',
            attrs: {
                body: {
                    stroke: '#8f8f8f',
                    strokeWidth: 1,
                    fill: '#fff',
                    rx: 6,
                    ry: 6,
                },
            },
        },
    ],
    edges: [
        {
            shape: 'edge',
            source: 'node1',
            target: 'node2',
            label: 'x6',
            attrs: {
                // line 是选择器名称，选中的边的 path 元素
                line: {
                    stroke: '#8f8f8f',
                    strokeWidth: 1,
                },
            },
        },
        {
            shape: 'edge',
            source: 'node2',
            target: 'node3',
            label: 'x6',
            attrs: {
                // line 是选择器名称，选中的边的 path 元素
                line: {
                    stroke: '#8f8f8f',
                    strokeWidth: 1,
                },
            },
        },
    ],
}
export default {
    data() {
        return {

        }
    },
    mounted() {
        const graph = new Graph({
            container: this.$refs.graph,
            // 设置画布背景颜色
            background: {
                color: '#F2F7FA',
            },
        })
        graph.on('node:mouseenter', ({ e, node, view }) => {
            const run = (pre) => {
                const succ = graph.getPredecessors(pre, { distance: 1 })
                if (succ) {
                    succ.forEach((n) => {
                        let edges = graph.getIncomingEdges(n);
                        if (edges && edges.length > 0) {
                            edges[0].attr('line', { stroke: '#cf1322', strokeWidth: 4, strokeDasharray: '0' })

                        }
                        console.log('n-id', n.id)
                        run(n)
                    })
                }
            }

            let edges = graph.getIncomingEdges(node);
            if (edges && edges.length > 0) {
                edges[0].attr('line', { stroke: '#cf1322', strokeWidth: 4, strokeDasharray: '0' })

            }
            run(node)
            // graph.centerCell(node)
        })
        graph.on('node:mouseleave', ({ e, node, view }) => {
            // console.log("当前节点", node)
            // let edges = graph.getIncomingEdges(node);
            // if (edges && edges.length > 0) {
            //     edges[0].attr('line', { stroke: '#8f8f8f', strokeWidth: 1, })
            // }
            // console.log("当前边", edges);

            // console.log(graph.getPredecessors(node, {
            //     deep: true,
            //     distance: 1
            // }))
            // graph.centerCell(node)
            const run = (pre) => {
                const succ = graph.getPredecessors(pre, { distance: 1 })
                if (succ) {
                    succ.forEach((n) => {
                        let edges = graph.getIncomingEdges(n);
                        if (edges && edges.length > 0) {
                            edges[0].attr('line', { stroke: '#8f8f8f', strokeWidth: 1, })

                        }
                        console.log('n-id', n.id)
                        run(n)
                    })
                }
            }

            let edges = graph.getIncomingEdges(node);
            if (edges && edges.length > 0) {
                edges[0].attr('line', { stroke: '#8f8f8f', strokeWidth: 1 })

            }
            run(node)
        })
        graph.fromJSON(data) // 渲染元素
        graph.centerContent() // 居中显示
    },
    methods: {
        click1() {
            let ele = this.$refs.ripple;
          
            let x = Math.ceil(ele.offsetLeft+ele.offsetWidth/2);
            let y = Math.ceil(ele.offsetTop+ele.offsetHeight/2);
            console.log(x,y)
            // 创建一个鼠标按下事件
            var mouseDownEvent = new MouseEvent('mousedown', {
                'bubbles': true,
                'cancelable': false,
                'clientX':x,
                'clientY': y
            });
            var mouseUpEvent = new MouseEvent('mouseup', {
                'bubbles': true,
                'cancelable': true,
                'clientX':x,
                'clientY': y
            });

            ele.dispatchEvent(mouseDownEvent)
            setTimeout(()=>{
                console.log(333333333)
                ele.dispatchEvent(mouseUpEvent)
            },100)
        },
        ceshi() {
            console.log(2)
        }
    }
}
</script>
<style lang="css" scoped>
.button {
    width: 200px;
    height: 100px;
    border: 1px solid gray;
}

.main {
    width: 400px;
    height: 400px;
}
</style>
