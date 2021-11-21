<template>
    {{userName}}
</template>

<script>
import {validateLogin as vl} from '../data/functions.js'

export default {
    data() {
        return{
            userName: ''
        }
    },
    methods: {
        checkLog(){
            if (vl()) {
                this.userName = atob(vl());
            } else{
                console.log(vl())
                this.$router.push('/');
            }
        }
    },
    mounted() {
        this.checkLog();
    }
}
</script>

<style>

</style>