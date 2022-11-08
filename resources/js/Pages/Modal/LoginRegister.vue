<template>
    <div class="ml-4">
        <secondary-button
        type="button"
        @click="openModal"
        class="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
        Login / Register
        </secondary-button>
    </div>

    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
            <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
            >
                <div class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
            <div
            class="flex min-h-full items-center justify-center p-4 text-center"
            >
                <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
                >
                    <DialogPanel
                    class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                    >
                        <div class="mt-2">
                                <TabGroup :defaultIndex="1">
                                    <TabList class="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                                        <Tab><tab-buttons>Login</tab-buttons></Tab>
                                        <Tab><tab-buttons>Register</tab-buttons></Tab>
                                    </TabList>
                                    <TabPanels>
                                        <TabPanel><login></login></TabPanel>
                                        <TabPanel><register></register></TabPanel>
                                    </TabPanels>
                                </TabGroup>
                        </div>
                        <div class="mt-4">
                            <button
                            type="button"
                            class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            @click="closeModal"
                            >
                                Got it, thanks!
                            </button>
                        </div>
                    </DialogPanel>
                </TransitionChild>
            </div>
        </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
    import { ref } from 'vue'
    import Login from '@/Pages/Auth/Login.vue';
    import SecondaryButton from '@/Components/SecondaryButton.vue';
    import Register from '@/Pages/Auth/Register.vue'
    import {
        TabGroup,
        TabList,
        Tab,
        TabPanels,
        TabPanel,
        TransitionRoot,
        TransitionChild,
        Dialog,
        DialogPanel,
        DialogTitle,
    } from '@headlessui/vue'
import { App } from '@inertiajs/inertia-vue3';

function setIsOpen(value) {
    isOpen.value = value
}

function closeModal() {
    isOpen.value = false
}

function openModal() {
    isOpen.value = true
}

const isOpen = ref(false)
</script>
