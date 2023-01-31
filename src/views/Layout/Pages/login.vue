<template>
    <div class="login">
        <div class='form_wrap'>
            <el-form ref="formRef" :model="loginData" label-width="100px" class="demo-dynamic">
                <el-form-item prop="username" label="用户名" :rules="[
                    {
                        required: true,
                        message: '请输入用户名！！！',
                        trigger: 'blur',
                    },
                ]">
                    <el-input v-model="loginData.username" />
                </el-form-item>
                <el-form-item prop="password" label="密码" :rules="[
                    {
                        required: true,
                        message: '密码不能为空！！！',
                        trigger: 'blur',
                    },
                ]">
                    <el-input type="password" v-model="loginData.password" />
                </el-form-item>
                <el-button type="primary" @click="handleInfo">登录</el-button>
            </el-form>

        </div>
    </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import { useStore } from "vuex"
import { useRouter } from 'vue-router'
export default {
    name: 'myLogin',
    setup() {
        const store = useStore()
        const router = useRouter()
        const data = reactive({
            loginData: {
                username: '',
                password: '',
            }


        })

        const handleInfo = function () {
            
            store.commit('setUserInfo',data.loginData)

            // 跳转
            router.push({
                path:'/userList'
            })

        }



        return {
            ...toRefs(data),
            handleInfo
        }
    }
}
</script>
<style scoped lang="scss">
.login {
    width: 100%;
    height: 100vh;
    background-color: rgb(70, 96, 229);

    .form_wrap {

        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        padding: 60px;
    }
}
</style>