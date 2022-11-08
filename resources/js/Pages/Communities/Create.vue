<template>
    <Head title="Create Community" />
    <authenticated-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Create Community
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <form @submit.prevent="submit">
                            <validation-errors class="mt-2"></validation-errors>
                            <div>
                                <InputLabel for="name" value="Community Name" />
                                <TextInput id="name"  type="text" class="mt-1 block w-full" v-model="form.name" autofocus autocomplete="name" />
                            </div>
                            <InputError class="mt-2" :message="form.errors.name" />
                            <div class="mt-4">
                                <InputLabel for="short_description" value="Short Description" />
                                <TextInput id="short_description"  type="text" class="mt-1 block w-full" v-model="form.short_description" autocomplete="description" />
                            </div>
                            <InputError class="mt-2" :message="form.errors.short_description" />
                            <div class="mt-4">
                                <InputLabel for="long_description" value="Long Description" />
                                <TextInput id="long_description"  type="text" class="mt-1 block w-full" v-model="form.long_description" autocomplete="long_description" />
                                <!--<text-box id="long_description" rows="5" class="mt-1 block w-full" v-model="form.long_description" autofocus autocomplete="description" />-->
                            </div>
                            <InputError class="mt-2" :message="form.errors.long_description" />
                            <div class="mt-4">
                                <InputLabel for="slug" value="Slug" />
                                <TextInput id="slug"  type="text" class="mt-1 block w-full" v-model="form.slug" autocomplete="slug" />
                            </div>
                            <InputError class="mt-2" :message="form.errors.slug" />
                            <div class="flex justify-end mt-4">
                                <PrimaryButton class="ml-4 w-96" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                    Create
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </authenticated-layout>
</template>

<script setup>
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
    import InputError from '@/Components/InputError.vue';
    import InputLabel from '@/Components/InputLabel.vue';
    import PrimaryButton from '@/Components/PrimaryButton.vue';
    import TextInput from '@/Components/TextInput.vue';
    import ValidationErrors from '@/Components/ValidationErrors.vue';
    import TextBox from '@/Components/TextBox.vue';
    import { Head, useForm } from '@inertiajs/inertia-vue3';

defineProps ({
    errors: Object
})


const form = useForm({
    name: '',
    short_description: '',
    long_description: '',
    slug: '',
});

const submit = () => {
    form.post(route('communities.store'), {
        //onFinish: () => form.reset('name', 'short_description', 'long_description', 'slug'),
    });
};

</script>
