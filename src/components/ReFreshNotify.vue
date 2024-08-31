<template>
    <div>
        <a-button @click="confirm">Confirm</a-button>

        <a-button type="primary" @click="showModal">Open Modal with customized footer</a-button>
        <a-modal v-model:open="open" title="版本更新提示" @ok="handleOk">
            <template #footer>
                <a-button key="back" @click="handleCancel">我知道了</a-button>
                <a-button key="submit" type="primary" :loading="loading" @click="handleOk">确认刷新</a-button>
            </template>
            <p><SketchOutlined />发现系统版本更新，请刷新页面~</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </a-modal>
    </div>
</template>
<script lang="ts" setup>
import { ref, createVNode } from 'vue';
// <SketchOutlined />
import { ExclamationCircleOutlined, SketchOutlined } from '@ant-design/icons-vue';
import { Modal } from 'ant-design-vue';

const loading = ref<boolean>(false);
const open = ref<boolean>(false);

const showModal = () => {
    open.value = true;
};

const handleOk = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
        open.value = false;
    }, 2000);
};

const handleCancel = () => {
    open.value = false;
};

const confirm = () => {
    Modal.confirm({
        title: 'Confirm',
        icon: createVNode(ExclamationCircleOutlined),
        content: '发现系统版本更新，请刷新页面~',
        okText: '确认刷新',
        cancelText: '我知道了',
    });
};
</script>