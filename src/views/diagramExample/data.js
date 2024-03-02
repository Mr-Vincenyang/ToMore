/**
 * 这里放置json 数据撑起组件内容
 */
export const diagramExampleData = {

}
export const hyper_parameter=[
        {label:'nc', value:80, state:false, step:1},
        {label:'lr0', value:0.01, state:false, step:0.0001},
        {label:'lrf', value:0.01, state:false, step:0.0001},
        {label:'momentum', value:0.937, state:false, step:0.0001},
        {label:'weight_decay', value:0.0005, state:false, step:0.0001},
        {label:'warmup_epochs', value:3.0, state:false, step:0.0001},
        {label:'warmup_momentum', value:0.8, state:false, step:0.0001},
        {label:'warmup_bias_lr', value:0.1, state:false, step:0.0001},
        {label:'box', value:7.5, state:false, step:0.0001},
        {label:'cls', value:0.5, state:false, step:0.0001},
        {label:'dfl', value:1.5, state:false, step:0.0001},
        {label:'pose', value:12.0, state:false, step:0.0001},
        {label:'kobj', value:1.0, state:false, step:0.0001},
        {label:'label_smoothing', value:0.0, state:false, step:0.0001},
        {label:'nbs', value:64, state:false, step:0.0001},
        {label:'hsv_h', value:0.015, state:false, step:0.0001},
        {label:'hsv_s', value:0.7, state:false, step:0.0001},
        {label:'hsv_v', value:0.4, state:false, step:0.0001},
        {label:'degrees', value:0.0, state:false, step:0.0001},
        {label:'translate', value:0.1, state:false, step:0.0001},
        {label:'scale', value:0.5, state:false, step:0.0001},
        {label:'shear', value:0.0, state:false, step:0.0001},
        {label:'perspective', value:0.0, state:false, step:0.0001},
        {label:'flipud', value:0.0, state:false, step:0.0001},
        {label:'fliplr', value:0.5, state:false, step:0.0001},
        {label:'mosaic', value:1.0, state:false, step:0.0001},
        {label:'mixup', value:0.0, state:false, step:0.0001},
        {label:'copy_paste', value:0.0, state:false, step:0.0001},
        {label:'auto_augment', value:'randaugment', state:false,options:[
                { label: 'Option 1', value: 'option1' },
                { label: 'Option 2', value: 'option2' },
                { label: 'randaugument', value: 'randaugument'}
            ], step:0.0001},
        {label:'erasing', value:0.4, state:false, step:0.0001},
        {label:'crop_fraction', value:1.0, state:false, step:0.0001},
    ]
export const JSONFromService = {"edges":[{"src_node_id":6,"src_output_idx":0,"dst_node_id":5,"dst_input_idx":0,"id":1,"edgesText":"我是边1"},{"src_node_id":5,"src_output_idx":1,"dst_node_id":3,"dst_input_idx":0,"id":2,"edgesText":"我是边1"},{"src_node_id":5,"src_output_idx":0,"dst_node_id":7,"dst_input_idx":0,"id":3,"edgesText":"我是边1"},{"src_node_id":7,"src_output_idx":0,"dst_node_id":4,"dst_input_idx":0,"id":4,"edgesText":"我是边1"},{"src_node_id":4,"src_output_idx":0,"dst_node_id":2,"dst_input_idx":0,"id":5,"edgesText":"我是边1"},{"src_node_id":3,"src_output_idx":0,"dst_node_id":2,"dst_input_idx":1,"id":6,"edgesText":"我是边1"},{"src_node_id":2,"src_output_idx":0,"dst_node_id":1,"dst_input_idx":0,"id":7,"edgesText":"我是边1"}],"nodes":[{"pos_x":255.3047619047619,"pos_y":-23.361901128859763,"name":"Conv","iconClassName":"el-icon-collection-tag","form":{"details":"服务端拿取的数据","createTime":"1"},"id":6,"in_ports":[0],"out_ports":[0],"arg":{"n":1,"channel":1,"kernel_size":1,"stride":1,"padding":0},"pos":"backbone"},{"pos_x":100,"pos_y":100,"name":"BottleNeck","iconClassName":"el-icon-collection-tag","form":{"details":"服务端拿取的数据","createTime":"1"},"id":5,"in_ports":[0],"out_ports":[0,1],"arg":{"n":1,"channel":1,"kernel_size":1,"stride":1,"padding":0},"pos":"backbone"},{"pos_x":431.32307692307745,"pos_y":240.24615971491914,"name":"Conv","iconClassName":"el-icon-collection-tag","form":{"details":"服务端拿取的数据","createTime":"1"},"id":3,"in_ports":[0],"out_ports":[0],"arg":{"n":1,"channel":1,"kernel_size":1,"stride":1,"padding":0},"pos":"backbone"},{"pos_x":225.447619047619,"pos_y":178.87619410923554,"name":"BottleNeck","iconClassName":"el-icon-collection-tag","form":{"details":"服务端拿取的数据","createTime":"1"},"id":7,"in_ports":[0],"out_ports":[0],"arg":{"n":1,"channel":1,"kernel_size":1,"stride":1,"padding":0},"pos":"backbone"},{"pos_x":224.59047619047612,"pos_y":287.78095601399747,"name":"BottleNeck","iconClassName":"el-icon-collection-tag","form":{"details":"服务端拿取的数据","createTime":"1"},"id":4,"in_ports":[0],"out_ports":[0],"arg":{"n":1,"channel":1,"kernel_size":1,"stride":1,"padding":0},"pos":"backbone"},{"pos_x":254.78095238095233,"pos_y":418.4000036330452,"name":"Concat","iconClassName":"el-icon-collection-tag","form":{"details":"服务端拿取的数据","createTime":"1"},"id":2,"in_ports":[0,1],"out_ports":[0],"arg":{"n":1,"channel":1,"kernel_size":1,"stride":1,"padding":0},"pos":"head"},{"pos_x":254.49523809523805,"pos_y":540.3047655378072,"name":"Detect","iconClassName":"el-icon-collection-tag","form":{"details":"服务端拿取的数据","createTime":"1"},"id":1,"in_ports":[0],"out_ports":[0],"arg":{"n":1,"channel":1,"kernel_size":1,"stride":1,"padding":0},"pos":"head"}]}
// export const JSONFromService = { "edges": [{ "src_node_id": 100, "src_output_idx": 0, "dst_node_id": 101, "dst_input_idx": 0, "id": 10, "edgesText":"我是边1" }], "nodes": [{ "pos_x": 323.50000000000034, "pos_y": 117.00000000000011, "name": "服务端拿取的数据", "iconClassName": "el-icon-collection-tag", "form": { "details": "服务端拿取的数据", "createTime": "1" }, "id": 100, "in_ports": [0], "out_ports": [0],"arg":{"n":1, "channel":1, "kernel_size":1, "stride":1, "padding":0},"pos":"head" }, { "pos_x": 198.75000000000023, "pos_y": 271.0000000000002, "name": "普通节点", "iconClassName": "el-icon-collection-tag", "form": { "details": "普通节点", "createTime": "2" }, "id": 101, "in_ports": [0], "out_ports": [0], "arg":{"n":2,"channel":2, "kernel_size":2, "stride":2, "padding":0, "bias":0},"pos":"head" }] }
// {
//     edges:[
//         {
//             "src_node_id": "源节点id",
//             "src_output_idx": "源节点出口索引",
//             "dst_node_id": "目的地节点id",
//             "dst_input_idx": "目的地节点出口索引",
//             "id": "边id"
//         }，
//         ...
//     ],
//     "nodes": [
//         {
//             "pos_x": 323.50000000000034,//x坐标
//             "pos_y": 117.00000000000011, //y坐标
//             "name": "服务端拿取的数据", //节点名称
//             "iconClassName": "el-icon-collection-tag", //图标类型名称
//             "form":
//             {
//                  //后续可作为模型参数
//                  "details": "普通节点的内容balabala",  //节点详细描述
//                  "createTime": "Wed Apr 29 2020"    //创建时间
//             },
//             "id": 100, //节点id
//             "in_ports": [0], //入口数组
//             "out_ports": [0], //出口数组
//             "arg":   //参数（按顺序排列）
//             {
//                  "n":1,
//                  "channel":1,
//                  "kernel_size":1,
//                  "stride":1,
//                  "padding":0
//              },
//              "pos":"head" //模块类型
//         }
//
// }
export const nodesBasic = [{
    name: 'Conv',
    iconClassName: 'el-icon-collection-tag',
    form: { details: '普通节点的内容balabala', createTime: '' },
    arg: {
        "n":1,
        "stride":1,
        "kernel_size":3,
        "padding":2
    },
    pos:null
}, {
    name: 'C2f',
    iconClassName: 'el-icon-loading',
    form: { details: '动态节点的内容balabala', createTime: '' },
    arg: {
        "n":3,
        "stride":1,
        "kernel_size":1
    },
    pos:null
}, {
    name: 'SPPF',
    form: { details: '自定义节点的内容balabala', createTime: '' },
    iconClassName: 'el-icon-magic-stick',
    nodeStyle: {
        "border": "2px solid orange",
        "border-radius": 0,
        "height": "30px"
    },
    iconStyle: {
        "background": "orange"
    },
    arg: {
        "n":1,
        "stride":1,
        "kernel_size":1
    },
    pos:null
}, {
    name: 'Concat',
    form: { details: '节点内容自由编辑', createTime: '' },
    arg: {
        "n":1,
        "stride":2,
        "kernel_size":1
    },
    pos:null
},{
    name: 'Detect',
    form: { details: '节点内容自由编辑', createTime: '' },
    arg: {
        "n":null,
        "stride":2,
        "kernel_size":1
    },
    pos:null
}]
// let cnt= 0;
// let head=Array(yourJSONDataFillThere.nodes.length+10).fill(0);
// let next = Array(2*head.length).fill(0);
// let to = Array(2*head.length).fill(0);
// let ru = Array(head.length).fill(0);
// let cu = Array(head.length).fill(0);
// let ruNum = Array(head.length).fill([]);
// let dp = Array(head.length).fill(0);
// let rfa = Array(head.length).fill(0);
// let index = Array(head.length).fill(0);
// let check = Array(head.length).fill(false);
// let result = {
//     head:[],
//     backbone:[]
// }
// function dfs(fa, root) {
//     if (dp[fa]+1 <= dp[root]) {
//         return;
//     }
//     dp[root] += 1;
//     rfa[root] = fa;
//     for (let i = head[root];i;i = next[i]) {
//         let o = to[i];
//         dfs(root, o);
//     }
//     return
// }
// function exportYaml() {
//     //创建图，并记录出入度
//     let start,end;
//     const edges = JSON.parse(JSON.stringify(yourJSONDataFillThere.edges));
//     const nodes = JSON.parse(JSON.stringify(yourJSONDataFillThere.nodes));
//     for (let i = 0; i < edges.length; i++) {
//         let edge = edges[i];
//         let x = edge.src_node_id, y = edge.dst_node_id;
//         to[++cnt] = y;
//         next[cnt] = head[x];
//         head[x] = cnt;
//         ru[y]++;
//         ruNum[y].unshift(x);
//         cu[x]++;
//     }
//     const num = yourJSONDataFillThere.nodes.length
//     for (let i = 1; i <= num; i++) {
//         if (ru[i] == 0) end = i;
//         if (cu[i] == 0) start = i;
//     }
//     //计算最长路
//     dfs(0, start);
//     //获取层数索引
//     let i = end;
//     index.unshift(i);
//     check[i] = true;
//     while(rfa[i]) {
//         index.unshift(rfa[i]);
//         i = rfa[i];
//         check[rfa[i]] = true;
//     }
//     while (!index.every(value => value===true)) {
//         for (let i = 1; i <= num; i++) {
//             if (!check[i]) {
//                 let idx = index.indexOf(rfa[i]);
//                 if (idx !== -1) {
//                     index.splice(idx+1,0,i);
//                     check[i] = true;
//                 } else {
//                     continue;
//                 }
//             }
//         }
//     }
//     for (let i = index.length-1; i>=0; i--) {
//         const foundNode = nodes.find(node => node.id === index[i]);
//         let temp = [];
//         for (let j = 0; j < ruNum[index[i]].length; j++) {
//             if (i-1 >= 0 && ruNum[index[i]][j] == index[i-1]) {
//                 temp.unshift(-1);
//             } else {
//                 temp.push(index.indexOf(index[i-1]));
//             }
//         }
//         if (i == 0 || temp.length == 1) {
//             temp = -1;
//         }
//         if (foundNode.pos === "head"){
//             result.head.unshift([temp,foundNode.arg.n,foundNode.name, Object.keys(foundNode.arg).filter(key => key !== 'n').map(key => foundNode.arg[key])])
//         } else {
//             result.backbone.unshift([temp,foundNode.arg.n,foundNode.name, Object.keys(foundNode.arg).filter(key => key !== 'n').map(key => foundNode.arg[key])])
//         }
//     }
//     console.log(result);
// }
// {
//      bottleNet:[
//          [-1, "CONV", 1, [64, 3, 2]],
//          [-1, "CONV", 2, [128, 3, 2]],
//          [[-1,1], "ConV“， 1， [128]],
//      ],
//      head:[
//        [-1, "CONV", 1, [64, 3, 2]],
//        [-1, "CONV", 2, [128, 3, 2]],
//        [[-1,1], "Detect“， 1， [128]],
//      ]
//
//}