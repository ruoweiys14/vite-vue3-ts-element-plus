<template>
    <div class="m-4">
        <p>Child options expand when clicked (default)</p>
        <el-cascader v-model="value" :options="options" size="large" style="width: 400" @change="handleChange" />
    </div>
</template>

<script lang="ts" setup>
import '@/styles/index.css';
import { arrayToTree } from '@/utils/utils';
import { ref } from 'vue';
import { data } from '../datas/product';

const value = ref([]);

// const props = {
//     expandTrigger: 'hover'
// };

const handleChange = (value) => {
    console.log(value);
};

console.log('cascade 数据 ', arrayToTree(data));
const options = arrayToTree(data);
</script>
