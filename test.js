
const JSONFromService = { "edges": [{ "src_node_id": 1, "src_output_idx": 0, "dst_node_id": 2, "dst_input_idx": 0, "id": 10, "edgesText":"我是边1" }], "nodes": [{ "pos_x": 323.50000000000034, "pos_y": 117.00000000000011, "name": "服务端拿取的数据", "iconClassName": "el-icon-collection-tag", "form": { "details": "服务端拿取的数据", "createTime": "1" }, "id": 1, "in_ports": [0], "out_ports": [0],"arg":{"n":1, "channel":1, "kernel_size":1, "stride":1, "padding":0},"pos":"head" }, { "pos_x": 198.75000000000023, "pos_y": 271.0000000000002, "name": "普通节点", "iconClassName": "el-icon-collection-tag", "form": { "details": "普通节点", "createTime": "2" }, "id": 2, "in_ports": [0], "out_ports": [0], "arg":{"n":2,"channel":2, "kernel_size":2, "stride":2, "padding":0, "bias":0},"pos":"head" }] }
const JSONData = {
    "edges":[
        {
            "src_node_id": 6, "src_output_idx": 0, "dst_node_id": 5, "dst_input_idx": 0, "id": 10, "edgesText":"我是边1"
        },{
            "src_node_id": 5, "src_output_idx": 1, "dst_node_id": 3, "dst_input_idx": 0, "id": 10, "edgesText":"我是边1"
        },{
            "src_node_id": 5, "src_output_idx": 0, "dst_node_id": 7, "dst_input_idx": 0, "id": 10, "edgesText":"我是边1"
        },{
            "src_node_id": 7, "src_output_idx": 0, "dst_node_id": 4, "dst_input_idx": 0, "id": 10, "edgesText":"我是边1"
        },{
            "src_node_id": 4, "src_output_idx": 0, "dst_node_id": 2, "dst_input_idx": 0, "id": 10, "edgesText":"我是边1"
        },{
            "src_node_id": 3, "src_output_idx": 0, "dst_node_id": 2, "dst_input_idx": 1, "id": 10, "edgesText":"我是边1"
        },{
            "src_node_id": 2, "src_output_idx": 0, "dst_node_id": 1, "dst_input_idx": 0, "id": 10, "edgesText":"我是边1"
        },
    ],
    "nodes":[
        { "pos_x": 320, "pos_y": 120, "name": "Conv", "iconClassName": "el-icon-collection-tag",
            "form": { "details": "服务端拿取的数据", "createTime": "1" }, "id": 6, "in_ports": [0], "out_ports": [0],
            "arg":{"n":1, "channel":1, "kernel_size":1, "stride":1, "padding":0},"pos":"backbone"
        },
        { "pos_x": 350, "pos_y": 150, "name": "BottleNeck", "iconClassName": "el-icon-collection-tag",
            "form": { "details": "服务端拿取的数据", "createTime": "1" }, "id": 5, "in_ports": [0], "out_ports": [0,1],
            "arg":{"n":1, "channel":1, "kernel_size":1, "stride":1, "padding":0},"pos":"backbone"
        },
        { "pos_x": 380, "pos_y": 180, "name": "Conv", "iconClassName": "el-icon-collection-tag",
            "form": { "details": "服务端拿取的数据", "createTime": "1" }, "id": 3, "in_ports": [0], "out_ports": [0],
            "arg":{"n":1, "channel":1, "kernel_size":1, "stride":1, "padding":0},"pos":"backbone"
        },
        { "pos_x": 410, "pos_y": 210, "name": "BottleNeck", "iconClassName": "el-icon-collection-tag",
            "form": { "details": "服务端拿取的数据", "createTime": "1" }, "id": 7, "in_ports": [0], "out_ports": [0],
            "arg":{"n":1, "channel":1, "kernel_size":1, "stride":1, "padding":0},"pos":"backbone"
        },
        { "pos_x": 440, "pos_y": 240, "name": "BottleNeck", "iconClassName": "el-icon-collection-tag",
            "form": { "details": "服务端拿取的数据", "createTime": "1" }, "id": 4, "in_ports": [0], "out_ports": [0],
            "arg":{"n":1, "channel":1, "kernel_size":1, "stride":1, "padding":0},"pos":"backbone"
        },
        { "pos_x": 470, "pos_y": 270, "name": "Concat", "iconClassName": "el-icon-collection-tag",
            "form": { "details": "服务端拿取的数据", "createTime": "1" }, "id": 2, "in_ports": [0,1], "out_ports": [0],
            "arg":{"n":1, "channel":1, "kernel_size":1, "stride":1, "padding":0},"pos":"head"
        },
        { "pos_x": 500, "pos_y": 300, "name": "Detect", "iconClassName": "el-icon-collection-tag",
            "form": { "details": "服务端拿取的数据", "createTime": "1" }, "id": 1, "in_ports": [0], "out_ports": [0],
            "arg":{"n":1, "channel":1, "kernel_size":1, "stride":1, "padding":0},"pos":"head"
        }
    ]
}
let cnt= 0;
const num = JSONData.nodes.length
let head=Array(JSONData.nodes.length+10).fill(0);
let len = head.length
let next=Array(2*len).fill(0);
let to = Array(2*len).fill(0);
let ru = Array(len).fill(0);
let cu = Array(len).fill(0);
// let ruNum = Array(len).fill([]);
let ruNum = Array.from(Array(len), () => new Array(0))
// let ruNum = Array(len);
// for (let i = 0; i < len; i++) {
//     ruNum[i] = [];
// }
let dp = Array(len).fill(0);
let rfa = Array(len).fill(0);
let index = [];
let check = Array(num+1).fill(false);
let result = {
    head:[],
    backbone:[]
}
function dfs(fa, root) {
    if (dp[fa]+1 <= dp[root]) {
        return;
    }
    dp[root] = dp[fa]+1;
    rfa[root] = fa;
    for (let i = head[root];i;i = next[i]) {
        let o = to[i];
        dfs(root, o);
    }
    return
}
function exportYaml() {
    //创建图，并记录出入度
    let start,end;
    const edges = JSON.parse(JSON.stringify(JSONData.edges)),
        nodes = JSON.parse(JSON.stringify(JSONData.nodes));
    for (let i = 0; i < edges.length; i++) {
        let edge = edges[i];
        let x = edge.src_node_id, y = edge.dst_node_id;
        to[++cnt] = y;
        next[cnt] = head[x];
        head[x] = cnt;
        ru[y] += 1;
        if (!ruNum[y]) ruNum[y] = []; // 如果 ruNum[y] 为 undefined，则初始化为一个空数组
        ruNum[y].unshift(x);
        cu[x] += 1;
    }

    for (let i = 1; i <= num; i++) {
        if (ru[i] == 0) start = i;
        if (cu[i] == 0) end = i;
    }
    //计算最长路
    dfs(0, start);
    //获取层数索引
    let i = end;
    index.unshift(i);
    check[i] = true;
    while(rfa[i]) {
        index.unshift(rfa[i]);
        check[rfa[i]] = true;
        i = rfa[i];
    }
    while (!check.slice(1, num + 1).every(value => value===true)) {
        for (let i = 1; i <= num; i++) {
            if (!check[i]) {
                let idx = index.indexOf(rfa[i]);
                if (idx !== -1) {
                    index.splice(idx+1,0,i);
                    check[i] = true;
                } else {
                    continue;
                }
            }
        }
    }
    for (let i = num-1; i>=0; i--) {
        const foundNode = nodes.find(node => node.id === index[i]);
        let temp = [];
        for (let j = 0; j < ruNum[index[i]].length; j++) {
            if (i-1 < 0) continue;
            if (ruNum[index[i]][j] == index[i-1]) {
                temp.unshift(-1);
            } else {
                temp.push(index.indexOf(ruNum[index[i]][j]));
            }
        }
        if (i == 0) {
            temp = -1;
        }
        if (foundNode.pos === "head"){
            result.head.unshift([temp.length==1?temp[0]:temp,foundNode.arg.n,foundNode.name, Object.keys(foundNode.arg).filter(key => key !== 'n').map(key => foundNode.arg[key])])
        } else {
            result.backbone.unshift([temp.length==1?temp[0]:temp,foundNode.arg.n,foundNode.name, Object.keys(foundNode.arg).filter(key => key !== 'n').map(key => foundNode.arg[key])])
        }
    }
    console.log(result);
}
exportYaml()