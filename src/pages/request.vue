<template>
    <h2> 这里是request请求页面 </h2>
    <br />
    <Cascader></Cascader>
    <br /><br />

    <el-button type="primary" @click="requestRes()">获取平台列表</el-button>
    <el-select v-model="value" multiple placeholder="Select" style="width: 240px">
        <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id" />
    </el-select>
    <br /><br />
    <router-link to="/">点击跳转至首页</router-link>
</template>
<script lang="ts" setup>
import { defineComponent, ref } from 'vue';
import request from '@/utils/axios';
import Cascader from '@/components/Cascader.vue';

interface ListItem {
    id: number;
    name: string;
}

const value = ref([]);
const options = ref<ListItem[]>([]);
const loading = ref(false);

const requestRes = async () => {
    loading.value = true;
    const { data } = await request({
        url: '/api/dict/search/platform-list',
        method: 'get'
    });

    options.value = data;
    console.log('options', options);
    loading.value = false;
};
</script>
