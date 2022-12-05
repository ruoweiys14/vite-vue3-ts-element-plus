<template>
    <p>记录数组转树的方法，并展示在级联组件中</p>
    <el-cascader v-model="value" :options="options" size="large" style="width: 400" @change="handleChange" />
    <p>记录树转数组的方法</p>
    <div>
        <el-select v-model="selectValue" class="m-2" placeholder="Select">
            <el-option v-for="item in arrayList" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
    </div>
</template>

<script lang="ts" setup>
import '@/styles/index.css';
import { arrayToTree, trackPath, treeToArray } from '@/utils/utils';
import { ref } from 'vue';
import { data } from '../datas/product';

const selectValue = ref([]);
const value = ref([]);

// const props = {
//     expandTrigger: 'hover'
// };

const handleChange = (value) => {
    console.log(value);
};
const options = arrayToTree(data);
console.log('cascade 数据 ', options);
const pathTree = trackPath(options);
console.log('给树形 options 加个父节点路径', pathTree);
const arrayList = treeToArray(pathTree);
console.log('将带父节点路径的 tree 数字化', arrayList);
</script>
