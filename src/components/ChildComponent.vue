<template>
    <div class="">
        <h1>Child Component</h1>
        <input v-model="userText" type="text" placeholder="Enter text here">
        <button @click="returnValToParent">Return to parent</button>
    </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue';

let userText = ref('');

const emmit = defineEmits(['getChildVal']);

const returnValToParent = ():void => {
    emmit('getChildVal', userText.value)
}

</script>

<style scoped>

</style>