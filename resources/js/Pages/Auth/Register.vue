<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import ValidationErrors from '@/Components/ValidationErrors.vue';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';

defineProps ({
 errors: Object
});

const form = useForm({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false,
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Register" />
        <form @submit.prevent="submit">
            <validation-errors class="mt-2"></validation-errors>
            <div>
                <InputLabel for="username" value="Username" />
                <TextInput id="username"  type="text" class="mt-1 block w-full" v-model="form.username" autofocus autocomplete="username" />
            </div>
            <InputError class="mt-2" :message="form.errors.username" />
            <div class="mt-4">
                <InputLabel for="firstname" value="First Name" />
                <TextInput id="firstname" type="text" class="mt-1 block w-full" v-model="form.firstname" autofocus autocomplete="firstname" />
            </div>
            <InputError class="mt-2" :message="form.errors.firstname" />
            <div class="mt-4">
                <InputLabel for="lastname" value="Family Name" />
                <TextInput id="lastname" type="text" class="mt-1 block w-full" v-model="form.lastname" autofocus autocomplete="lastname" />
            </div>
            <InputError class="mt-2" :message="form.errors.lastname" />
            <div class="mt-4">
                <InputLabel for="email" value="Email" />
                <TextInput id="email" type="email" class="mt-1 block w-full" v-model="form.email" autocomplete="email" />
            </div>
            <InputError class="mt-2" :message="form.errors.email" />
            <div class="mt-4">
                <InputLabel for="password" value="Password" />
                <TextInput id="password" type="password" class="mt-1 block w-full" v-model="form.password" autocomplete="new-password" />
            </div>
            <InputError class="mt-2" :message="form.errors.password" />
            <div class="mt-4">
                <InputLabel for="password_confirmation" value="Confirm Password" />
                <TextInput id="password_confirmation" type="password" class="mt-1 block w-full" v-model="form.password_confirmation" autocomplete="new-password" />
            </div>
            <InputError class="mt-2" :message="form.errors.password_confirmation" />
            <div class="flex items-center justify-end mt-4">
                <Link :href="route('login')" class="underline text-sm text-gray-600 hover:text-gray-900">
                    Already registered?
                </Link>

                <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Register
                </PrimaryButton>
            </div>
        </form>
    </GuestLayout>
</template>
