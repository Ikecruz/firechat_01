<template>
    <div class="login-container">
        <div class="login-contain">
            <div class="login-card bg-white">
                <div class="login-header p-3 text-center">
                    <p class="m-0">CHAT BUDS</p>
                </div>
                <div class="login-body p-3">
                    <p class="mb-3">Enter Username to chat with Mates</p>

                    <form action="" @submit.prevent="login">
                        <div class="form-group">
                            <label class="form-label">Username</label>
                            <div class="input-group mb-1">
                                <span class="input-group-text"><i class="bi bi-person-fill"></i></span>
                                <input type="text" class="form-control" v-model="userName" placeholder="Username">
                            </div>
                            <p class="mb-3 err">{{ err || '' }}</p>
                        </div>
                        
                        <div class="mb-3">
                            <button type="submit" class="btn btn-primary w-100">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="labels-contain">
            <p class="mb-1">Made with ❤️ and <a href="https://vuejs.org" class="link" target="_blank">VUE JS</a></p>
            <p class="mb-1">DEVCRUZ © 2021 Copyright | Ikedinobi Onyeka</p>
        </div>
    </div>
</template>

<script>
import {startSession as ss} from '../data/functions.js';

export default {
    data() {
        return{
            err: null,
            userName: '',
        }
    },
    methods: {
        login(){
            this.err = null;
            if (this.userName === '' || this.userName === null) {
                this.err = "User name shouldn't be empty";
                return;
            }
            
            if (ss(this.userName)) {
                this.$router.push('/chat');
            }
        }
    },
    mounted() {
        // document.title = "Login | ChatBuds";
    }
}
</script>

<style>

</style>