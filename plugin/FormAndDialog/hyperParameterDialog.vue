<template>
    <g>
        <foreignObject height="100%" width="100%">
            <body xmlns="http://www.w3.org/1999/xhtml" >
                <el-button type="success" @click="openDialog" style="position: absolute;right: 10px">导出</el-button>
                <el-dialog  title="参数设置"
                            v-model="hyperParameterForm"
                            width="35%">
                    <div style="display: flex;justify-content: space-between;padding:10px;">
                        <div style="width:100px; text-align:center; font-size: 15px; margin-top: 3px">超参数：</div>
                        <el-autocomplete v-model="state" :fetch-suggestions="querySearchAsync" placeholder="Please input" @select="hyperParameterSelect"/>
                        <el-form>
                            <template v-for="param in hyperParameterTemp" :key="param.label">
                                <el-form-item v-if="state === param.label">
                                    <template v-if="typeof param.value === 'boolean' || typeof param.value === 'string'">
                                        <el-select v-model="param.value" class="mx-4" style="width: 170px">
                                            <el-option v-for="option in param.options" :key="option.value" :label="option.label" :value="option.value" />
                                        </el-select>
                                    </template>
                                    <template v-else>
                                        <el-input-number v-model="param.value" class="mx-4" :min="0" controls-position="right" :step="param.step"/>
                                    </template>
                                </el-form-item>
                            </template>
                        </el-form>
                    </div>
                    <template #footer>
                        <div class="dialog-footer">
                            <el-button type="info" @click="closeDialog">取消</el-button>
                            <el-button type="success" @click="exportYaml">
                                导出
                            </el-button>
                        </div>
                    </template>
                </el-dialog>
            </body>
        </foreignObject>
    </g>

</template>
<script>
export default {
    props: {
        hyperParameter: {
            type: Object
        },
    },
    data() {
        return {
            hyperParameterTemp:null,
            hyperParameterForm:false,
            state:'',
        }
    },
    methods:{
        openDialog(){
            this.hyperParameterTemp = JSON.parse(JSON.stringify(this.hyperParameter));
            this.hyperParameterForm = true;
        },
        closeDialog(){
            this.hyperParameterForm = false;
        },
        hyperParameterSelect(item){
            this.currentSelect=item.label;
        },
        querySearchAsync(queryString,cb) {
            let restaurants = this.hyperParameter;
            let results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;
            results = results.map(item => ({ ...item, value: item.label }));
            cb(results);
        },
        createStateFilter(queryString) {
            return (state) => {
                // console.log(state.label)
                return (state.label.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        exportYaml() {
            this.hyperParameterForm = false
            Object.assign(this.hyperParameter, JSON.parse(JSON.stringify(this.hyperParameterTemp)));
            this.$emit("exportYaml");
        }
    }
}
</script>
<style>

</style>