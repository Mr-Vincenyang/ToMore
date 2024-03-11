/**
 * 这里放置json 数据撑起组件内容
 */
export const diagramExampleData = {

}
export const hyper_parameter = [
    { label: 'nc', value: 80, state: false, step: 1 },
    { label: 'lr0', value: 0.01, state: false, step: 0.0001 },
    { label: 'lrf', value: 0.01, state: false, step: 0.0001 },
    { label: 'momentum', value: 0.937, state: false, step: 0.0001 },
    { label: 'weight_decay', value: 0.0005, state: false, step: 0.0001 },
    { label: 'warmup_epochs', value: 3.0, state: false, step: 0.0001 },
    { label: 'warmup_momentum', value: 0.8, state: false, step: 0.0001 },
    { label: 'warmup_bias_lr', value: 0.1, state: false, step: 0.0001 },
    { label: 'box', value: 7.5, state: false, step: 0.0001 },
    { label: 'cls', value: 0.5, state: false, step: 0.0001 },
    { label: 'dfl', value: 1.5, state: false, step: 0.0001 },
    { label: 'pose', value: 12.0, state: false, step: 0.0001 },
    { label: 'kobj', value: 1.0, state: false, step: 0.0001 },
    { label: 'label_smoothing', value: 0.0, state: false, step: 0.0001 },
    { label: 'nbs', value: 64, state: false, step: 0.0001 },
    { label: 'hsv_h', value: 0.015, state: false, step: 0.0001 },
    { label: 'hsv_s', value: 0.7, state: false, step: 0.0001 },
    { label: 'hsv_v', value: 0.4, state: false, step: 0.0001 },
    { label: 'degrees', value: 0.0, state: false, step: 0.0001 },
    { label: 'translate', value: 0.1, state: false, step: 0.0001 },
    { label: 'scale', value: 0.5, state: false, step: 0.0001 },
    { label: 'shear', value: 0.0, state: false, step: 0.0001 },
    { label: 'perspective', value: 0.0, state: false, step: 0.0001 },
    { label: 'flipud', value: 0.0, state: false, step: 0.0001 },
    { label: 'fliplr', value: 0.5, state: false, step: 0.0001 },
    { label: 'mosaic', value: 1.0, state: false, step: 0.0001 },
    { label: 'mixup', value: 0.0, state: false, step: 0.0001 },
    { label: 'copy_paste', value: 0.0, state: false, step: 0.0001 },
    {
        label: 'auto_augment', value: 'randaugment', state: false, options: [
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'randaugument', value: 'randaugument' }
        ], step: 0.0001
    },
    { label: 'erasing', value: 0.4, state: false, step: 0.0001 },
    { label: 'crop_fraction', value: 1.0, state: false, step: 0.0001 },
]


export const JSONFromService ={"edges":[{"src_node_id":1,"src_output_idx":0,"dst_node_id":2,"dst_input_idx":0,"id":10},{"src_node_id":2,"src_output_idx":0,"dst_node_id":3,"dst_input_idx":0,"id":11},{"src_node_id":3,"src_output_idx":0,"dst_node_id":4,"dst_input_idx":0,"id":12},{"src_node_id":4,"src_output_idx":0,"dst_node_id":5,"dst_input_idx":0,"id":13},{"src_node_id":5,"src_output_idx":0,"dst_node_id":6,"dst_input_idx":0,"id":14},{"src_node_id":6,"src_output_idx":0,"dst_node_id":7,"dst_input_idx":0,"id":15},{"src_node_id":7,"src_output_idx":0,"dst_node_id":8,"dst_input_idx":0,"id":16},{"src_node_id":8,"src_output_idx":0,"dst_node_id":9,"dst_input_idx":0,"id":17},{"src_node_id":9,"src_output_idx":0,"dst_node_id":10,"dst_input_idx":0,"id":18},{"src_node_id":10,"src_output_idx":0,"dst_node_id":11,"dst_input_idx":0,"id":19},{"src_node_id":11,"src_output_idx":0,"dst_node_id":12,"dst_input_idx":0,"id":20},{"src_node_id":7,"src_output_idx":1,"dst_node_id":12,"dst_input_idx":1,"id":21},{"src_node_id":12,"src_output_idx":0,"dst_node_id":13,"dst_input_idx":0,"id":22},{"src_node_id":13,"src_output_idx":0,"dst_node_id":14,"dst_input_idx":0,"id":23},{"src_node_id":14,"src_output_idx":0,"dst_node_id":15,"dst_input_idx":0,"id":24},{"src_node_id":5,"src_output_idx":1,"dst_node_id":15,"dst_input_idx":1,"id":25},{"src_node_id":15,"src_output_idx":0,"dst_node_id":16,"dst_input_idx":0,"id":26},{"src_node_id":16,"src_output_idx":0,"dst_node_id":17,"dst_input_idx":0,"id":27},{"src_node_id":17,"src_output_idx":0,"dst_node_id":18,"dst_input_idx":1,"id":28},{"src_node_id":13,"src_output_idx":1,"dst_node_id":18,"dst_input_idx":0,"id":29},{"src_node_id":18,"src_output_idx":0,"dst_node_id":19,"dst_input_idx":0,"id":30},{"src_node_id":19,"src_output_idx":0,"dst_node_id":20,"dst_input_idx":0,"id":31}],"nodes":[{"pos_x":60.98823529411757,"pos_y":-183.56285885081573,"name":"Conv","iconClassName":"el-icon-collection-tag","form":{"details":"普通节点的内容balabala","createTime":"Mon Mar 11 2024"},"arg":{"n":1,"stride":1,"kernel_size":3,"padding":2},"pos":null,"id":1,"in_ports":[0],"out_ports":[0]},{"pos_x":61.16470588235288,"pos_y":-109.85697649787456,"name":"Conv","iconClassName":"el-icon-collection-tag","form":{"details":"普通节点的内容balabala","createTime":"Mon Mar 11 2024"},"arg":{"n":1,"stride":1,"kernel_size":3,"padding":2},"pos":null,"id":2,"in_ports":[0],"out_ports":[0]},{"pos_x":59.10588235294111,"pos_y":-34.62168238022748,"name":"C2f","iconClassName":"el-icon-loading","form":{"details":"动态节点的内容balabala","createTime":"Mon Mar 11 2024"},"arg":{"n":3,"stride":1,"kernel_size":1},"nodeStyle":{"border":"2px solid pink","border-radius":0,"height":"30px"},"iconStyle":{"background":"pink"},"pos":null,"id":3,"in_ports":[0],"out_ports":[0]},{"pos_x":58.16470588235288,"pos_y":39.73125879624312,"name":"Conv","iconClassName":"el-icon-collection-tag","form":{"details":"普通节点的内容balabala","createTime":"Mon Mar 11 2024"},"arg":{"n":1,"stride":1,"kernel_size":3,"padding":2},"pos":null,"id":4,"in_ports":[0],"out_ports":[0]},{"pos_x":58.34117647058818,"pos_y":115.84890585506665,"name":"C2f","iconClassName":"el-icon-loading","form":{"details":"动态节点的内容balabala","createTime":"Mon Mar 11 2024"},"arg":{"n":3,"stride":1,"kernel_size":1},"nodeStyle":{"border":"2px solid pink","border-radius":0,"height":"30px"},"iconStyle":{"background":"pink"},"pos":null,"id":5,"in_ports":[0],"out_ports":[0,1]},{"pos_x":29.39999999999995,"pos_y":198.39063330756298,"name":"Conv","iconClassName":"el-icon-collection-tag","form":{"details":"普通节点的内容balabala","createTime":"Mon Mar 11 2024"},"arg":{"n":1,"stride":1,"kernel_size":3,"padding":2},"pos":null,"id":6,"in_ports":[0],"out_ports":[0]},{"pos_x":29.84444444444439,"pos_y":274.27952219645186,"name":"C2f","iconClassName":"el-icon-loading","form":{"details":"动态节点的内容balabala","createTime":"Mon Mar 11 2024"},"arg":{"n":3,"stride":1,"kernel_size":1},"nodeStyle":{"border":"2px solid pink","border-radius":0,"height":"30px"},"iconStyle":{"background":"pink"},"pos":null,"id":7,"in_ports":[0],"out_ports":[0,1]},{"pos_x":-1.2666666666669641,"pos_y":399.2859499613447,"name":"Conv","iconClassName":"el-icon-collection-tag","form":{"details":"普通节点的内容balabala","createTime":"Mon Mar 11 2024"},"arg":{"n":1,"stride":1,"kernel_size":3,"padding":2},"pos":null,"id":8,"in_ports":[0],"out_ports":[0]},{"pos_x":-2.266666666666964,"pos_y":477.95261662801147,"name":"C2f","iconClassName":"el-icon-loading","form":{"details":"动态节点的内容balabala","createTime":"Mon Mar 11 2024"},"arg":{"n":3,"stride":1,"kernel_size":1},"nodeStyle":{"border":"2px solid pink","border-radius":0,"height":"30px"},"iconStyle":{"background":"pink"},"pos":null,"id":9,"in_ports":[0],"out_ports":[0]},{"pos_x":-0.9333333333336213,"pos_y":549.2859499613448,"name":"SPPF","form":{"details":"自定义节点的内容balabala","createTime":"Mon Mar 11 2024"},"iconClassName":"el-icon-magic-stick","nodeStyle":{"border":"2px solid orange","border-radius":0,"height":"30px"},"iconStyle":{"background":"orange"},"arg":{"n":1,"stride":1,"kernel_size":1},"pos":null,"id":10,"in_ports":[0],"out_ports":[0]},{"pos_x":-1.600000000000307,"pos_y":626.6192832946782,"name":"nn.Upsample","form":{"details":"节点内容自由编辑","createTime":"Mon Mar 11 2024"},"arg":{"n":null,"stride":2,"kernel_size":1},"nodeStyle":{"border":"2px solid green","border-radius":0,"height":"30px"},"iconStyle":{"background":"green"},"pos":null,"id":11,"in_ports":[0],"out_ports":[0]},{"pos_x":245.66666666666646,"pos_y":475.8888888888896,"name":"Concat","form":{"details":"节点内容自由编辑","createTime":"Mon Mar 11 2024"},"arg":{"n":1,"stride":2,"kernel_size":1},"nodeStyle":{"border":"2px solid yellow","border-radius":0,"height":"30px"},"iconStyle":{"background":"yellow"},"pos":null,"id":12,"in_ports":[0,1],"out_ports":[0]},{"pos_x":245.4920634920632,"pos_y":548.1111111111122,"name":"C2f","iconClassName":"el-icon-loading","form":{"details":"动态节点的内容balabala","createTime":"Mon Mar 11 2024"},"arg":{"n":3,"stride":1,"kernel_size":1},"nodeStyle":{"border":"2px solid pink","border-radius":0,"height":"30px"},"iconStyle":{"background":"pink"},"pos":null,"id":13,"in_ports":[0],"out_ports":[0,1]},{"pos_x":237.99999999999972,"pos_y":626.5555555555565,"name":"nn.Upsample","form":{"details":"节点内容自由编辑","createTime":"Mon Mar 11 2024"},"arg":{"n":null,"stride":2,"kernel_size":1},"nodeStyle":{"border":"2px solid green","border-radius":0,"height":"30px"},"iconStyle":{"background":"green"},"pos":null,"id":14,"in_ports":[0],"out_ports":[0]},{"pos_x":481.1111111111111,"pos_y":395.11111111111177,"name":"Concat","form":{"details":"节点内容自由编辑","createTime":"Mon Mar 11 2024"},"arg":{"n":1,"stride":2,"kernel_size":1},"nodeStyle":{"border":"2px solid yellow","border-radius":0,"height":"30px"},"iconStyle":{"background":"yellow"},"pos":null,"id":15,"in_ports":[0,1],"out_ports":[0]},{"pos_x":479.2539682539682,"pos_y":468.25396825396945,"name":"C2f","iconClassName":"el-icon-loading","form":{"details":"动态节点的内容balabala","createTime":"Mon Mar 11 2024"},"arg":{"n":3,"stride":1,"kernel_size":1},"nodeStyle":{"border":"2px solid pink","border-radius":0,"height":"30px"},"iconStyle":{"background":"pink"},"pos":null,"id":16,"in_ports":[0],"out_ports":[0]},{"pos_x":478.3968253968253,"pos_y":544.1111111111115,"name":"Conv","iconClassName":"el-icon-collection-tag","form":{"details":"普通节点的内容balabala","createTime":"Mon Mar 11 2024"},"arg":{"n":1,"stride":1,"kernel_size":3,"padding":2},"pos":null,"id":17,"in_ports":[0],"out_ports":[0]},{"pos_x":477.08903318903344,"pos_y":628.389040124847,"name":"Concat","form":{"details":"节点内容自由编辑","createTime":"Mon Mar 11 2024"},"arg":{"n":1,"stride":2,"kernel_size":1},"nodeStyle":{"border":"2px solid yellow","border-radius":0,"height":"30px"},"iconStyle":{"background":"yellow"},"pos":null,"id":18,"in_ports":[0,1],"out_ports":[0]},{"pos_x":477.4526695526697,"pos_y":714.570858306668,"name":"C2f","iconClassName":"el-icon-loading","form":{"details":"动态节点的内容balabala","createTime":"Mon Mar 11 2024"},"arg":{"n":3,"stride":1,"kernel_size":1},"nodeStyle":{"border":"2px solid pink","border-radius":0,"height":"30px"},"iconStyle":{"background":"pink"},"pos":null,"id":19,"in_ports":[0],"out_ports":[0]},{"pos_x":475.63448773448795,"pos_y":800.6617673975779,"name":"Detect","form":{"details":"节点内容自由编辑","createTime":"Mon Mar 11 2024"},"arg":{"n":null,"stride":2,"kernel_size":1},"pos":null,"id":20,"in_ports":[0],"out_ports":[0]}]}
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
        "n": 1,
        "stride": 1,
        "kernel_size": 3,
        "padding": 2
    },
    pos: null
}, {
    name: 'C2f',
    iconClassName: 'el-icon-loading',
    form: { details: '动态节点的内容balabala', createTime: '' },
    arg: {
        "n": 3,
        "isRestful":true,
        "stride": 1,
        "kernel_size": 1
    },nodeStyle: {
        "border": "2px solid pink",
        "border-radius": 0,
        "height": "30px"
    },
    iconStyle: {
        "background": "pink"
    },
    pos: null
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
        "n": 1,
        "stride": 1,
        "kernel_size": 1
    },
    pos: null
}, {
    name: 'Concat',
    form: { details: '节点内容自由编辑', createTime: '' },
    arg: {
        "n": 1,
        "stride": 2,
        "kernel_size": 1
    },
    nodeStyle: {
        "border": "2px solid yellow",
        "border-radius": 0,
        "height": "30px"
    },
    iconStyle: {
        "background": "yellow"
    },
    pos: null
}, {
    name: 'Detect',
    form: { details: '节点内容自由编辑', createTime: '' },
    arg: {
        "nc": 80
    },
    pos: null
},{
    name: 'BottleNeck',
    form: { details: '节点内容自由编辑', createTime: '' },
    arg: {
        "n": null,
        "stride": 2,
        "kernel_size": 1
    },
    nodeStyle: {
        "border": "2px solid red",
        "border-radius": 0,
        "height": "30px"
    },
    iconStyle: {
        "background": "red"
    },
    pos: null
},{
    name: 'nn.Upsample',
    form: { details: '节点内容自由编辑', createTime: '' },
    arg: {
        "n": "None",
        "stride": 2,
        "kernel_size": 'nearest'
    },
    nodeStyle: {
        "border": "2px solid green",
        "border-radius": 0,
        "height": "30px"
    },
    iconStyle: {
        "background": "green"
    },
    pos: null
}
]
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