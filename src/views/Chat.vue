<template>
    <div class="chat-contain">
        <div class="chat-card">
            <div class="chat-header p-3">
                <p class="mb-0">Welcome {{userName}}</p>
            </div>
            <div class="chat-body p-3">
                <div class="message" :class="{ 'user' : msg.name === userName }" v-for="msg in messages" :key="msg.key">
                    <p class="mb-1 name">{{msg.name}}</p>
                    <div class="message-box">
                        {{msg.content}}
                    </div>
                </div>
                <p class="m-0" id="scroll"></p>
            </div>
            <div class="chat-footer p-3">
                <form action="" @submit.prevent="sendMessage">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" v-model="inputMessage" placeholder="Message" aria-label="Recipient's username" aria-describedby="button-addon2">
                        <button class="btn btn-primary" type="submit" id="button-addon2"><i class="bi bi-send"></i></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import {validateLogin as vl} from '../data/functions.js'
import {sendMessage as sm } from '../firebase/funcs'
import db from "../firebase/db.js"
import { ref, onValue } from "firebase/database"

export default {
    data() {
        return{
            inputMessage: '',
            userName: '',
            messages: [],
        }
    },
    methods: {
        checkLog(){
            if (vl()) {
                this.userName = vl();
            } else{
                this.$router.push('/');
            }
        },
        sendMessage(){
            if (this.inputMessage === '' || this.inputMessage === null) {
                return;
            }
            let message = {
                name: this.userName,
                content: this.inputMessage,
                updated_at: Date.now(),
            };
            sm(message);
            this.inputMessage = '';
        },
        sortMsg(msg){
            msg.sort(function(a, b) {
            var keyA = a.updated_at,
                keyB = b.updated_at;
            // Compare the 2 dates
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
            });
        },
        scrollView(){
            let mesg = document.getElementById("scroll");

            mesg.scrollIntoView({ behavior: 'smooth', block: 'start'});
        },
        getMessages(){
            const messagesRef = ref(db, 'messages');
            onValue(messagesRef, (snapshot) => {
                const data = snapshot.val();
                let messages = [];

                Object.keys(data).forEach(key => {
                    messages.push(
                        {
                            id: key,
                            name: data[key].name,
                            content: data[key].content,
                            updated_at: data[key].updated_at,
                        }
                    )
                })
                this.sortMsg(messages);
                this.messages = messages;
                this.scrollView();
            });
        }
    },
    mounted() {
        this.checkLog();
        // document.title = "Messages | ChatBuds"
        this.getMessages();
    },
    watch: {
        messages(){
            this.scrollView();
        }
    }
    
}
</script>

<style>

</style>