<template>
    <div>
        <MainLayout>
            <template #main>
                <div class="flex flex-col w-full max-w-xl p-8 mx-auto mt-16 bg-white border rounded-lg">
                    <h2 class="mb-1 text-lg font-medium text-gray-900 title-font">Feedback</h2>
                    <p class="mb-5 leading-relaxed text-gray-600">Si tienes algún comentario o sugerencia, no dudes en
                        contactarnos.</p>

                    <div class="mb-4">
                        <label for="email" class="text-sm leading-7 text-gray-600">Email</label>
                        <input v-model="email" type="email" id="email" name="email"
                            class="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                            required />
                    </div>

                    <div class="mb-4">
                        <label for="message" class="text-sm leading-7 text-gray-600">Mensaje</label>
                        <textarea v-model="message" id="message" name="message"
                            class="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"></textarea>
                    </div>

                    <button @click="handleSubmit"
                        class="px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded hover:bg-indigo-600 focus:outline-none">Enviar</button>

                    <p class="mt-3 text-xs text-gray-500">Nunca te enviaremos spam</p>

                    <!-- Popup -->
                    <div v-if="showPopup"
                        class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                        <div class="w-11/12 max-w-lg p-6 mx-auto bg-white rounded-lg">
                            <h3 class="text-xl font-semibold text-gray-800">¡Gracias por tu feedback!</h3>
                            <p class="mt-2 text-gray-600">Hemos recibido tu mensaje. Nos pondremos en contacto contigo
                                pronto.</p>
                            <button @click="closePopup"
                                class="px-4 py-2 mt-4 text-white bg-indigo-500 rounded hover:bg-indigo-600 focus:outline-none">Cerrar</button>
                        </div>
                    </div>
                </div>
            </template>
        </MainLayout>
    </div>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { ref } from 'vue';

const email = ref('');
const message = ref('');
const showPopup = ref(false);

function handleSubmit() {
    if (email.value && message.value) {
        showPopup.value = true;
    } else {
        alert("Por favor, completa todos los campos.");
    }
}

function closePopup() {
    showPopup.value = false;
}
</script>

<style scoped>
.fixed {
    position: fixed;
}

.inset-0 {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
</style>