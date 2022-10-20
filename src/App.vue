<template>
    <el-config-provider :size="size" :z-index="zIndex" :locale="locale">
        <RouterView />
    </el-config-provider>
</template>;
<script lang="ts">
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';

// element-plus 默认的日期组件时英文，需要全局配置为中文
export default defineComponent({
    components: {
        ElConfigProvider
    },
    setup() {
        return {
            zIndex: 3000,
            size: 'small',
            locale: zhCn
        }
    }
})


</script>;
