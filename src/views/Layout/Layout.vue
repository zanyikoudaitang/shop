<template>
    <div class="common-layout">
        <el-container>
            <el-header class="common-header flex-float">
                <div class="flex">
                    <img class="logo" src="@/assets/logo.png" alt="LOG">
                    <h1>商铺后台管理系统</h1>
                </div>
                <el-button type="danger" @click="logOut">退出</el-button>

            </el-header>
            <el-container>
                <el-aside class="common-aside" width="200px">
                    
                    <el-menu 
                    background-color="none" 
                    text-color="#fff" 
                    :router="true"
                    >
                        <el-sub-menu index="1">
                            <template #title>
                                <el-icon  :size="size" :color="color"><Avatar /></el-icon>
                                <span>用户管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="userList">账户列表</el-menu-item>
                            </el-menu-item-group>
                        </el-sub-menu>
                        <el-sub-menu index="2">
                            <template #title>
                                <el-icon  :size="size" :color="color"><Folder /></el-icon>
                                <span>角色管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="rolesList">角色列表</el-menu-item>
                            </el-menu-item-group>
                            
                        </el-sub-menu>
                    </el-menu>
                    
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import { useStore } from "vuex"
import { useRouter } from 'vue-router'

export default {
    name: 'myLayout',
    setup() {
        const store = useStore()
        const router = useRouter()
        const logOut = function(){
            store.commit('delUserInfo')
            // 跳转
            router.push({
                path:'/login'
            })
        }
        return {
            logOut
        }
    }
}

</script>
<style>
.el-container {
    height: 100vh;
    overflow: hidden;
}

.common-header {
    background: rgb(48, 55, 65);
    display: flex;
}

.common-aside {
    background: rgb(28, 65, 118);

}

.logo {
    width: 80px;
}
</style>

