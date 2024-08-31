<template>
    <div class="login-container">
        <a-form :model="formState" name="normal_login" class="login-form" @finish="onFinish"
            @finishFailed="onFinishFailed">
            <a-form-item label="用户名称" name="username" :rules="[{ required: true, message: '请输入用户名!' }]">
                <a-input v-model:value="formState.username">
                    <template #prefix>
                        <UserOutlined class="site-form-item-icon" />
                    </template>
                </a-input>
            </a-form-item>

            <a-form-item label="用户密码" name="password" :rules="[{ required: true, message: '请输入密码!' }]">
                <a-input-password v-model:value="formState.password">
                    <template #prefix>
                        <LockOutlined class="site-form-item-icon" />
                    </template>
                </a-input-password>
            </a-form-item>

            <a-form-item>
                <a-form-item name="remember" no-style>
                    <a-checkbox v-model:checked="formState.remember">记住密码</a-checkbox>
                </a-form-item>
                <a class="login-form-forgot" href="">忘记密码</a>
            </a-form-item>

            <a-form-item>
                <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
                    登录
                </a-button>
                或者
                <a href="">注册</a>
            </a-form-item>
        </a-form>
    </div>
</template>

<script lang="ts" setup>
import { reactive, computed } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { useRouter } from 'vue-router';

const router = useRouter();

interface FormState {
    username: string;
    password: string;
    remember: boolean;
}
const formState = reactive<FormState>({
    username: 'admin',
    password: 'admin',
    remember: true,
});
const onFinish = (values: any) => {
    // values 就是输入的 formState
    console.log('values:', values);
    if (values.username === 'admin' && values.password === 'admin') {
        message.success('登录成功');
        // 登录成功后跳转到首页
        // window.location.href = '/home';
        // 或者使用路由跳转
        router.push('/home');
        // router.push('/SoftList');
    } else {
        message.error('用户名或密码错误');
    }

};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    message.error(errorInfo);
};
const disabled = computed(() => {
    return !(formState.username && formState.password);
});

</script>

<style scoped>
.login-form {
    max-width: 300px;
}

.login-form-forgot {
    float: center;
}

.login-form-button {
    width: 100%;
}


.login-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
}
</style>
