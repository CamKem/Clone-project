<style>
    .tab-btn {
        padding: 6px 10px;
        background: #ffffff;
        cursor: pointer;
        margin-bottom: 1rem;
        border: 2px solid #cccccc;
        outline: none;
    }

    .active {
        border-bottom: 3px solid green;
        background: whitesmoke;
    }

    .tab {
        border: 1px solid #ccc;
        padding: 10px;
    }
</style>

<template>
        <!--<PrimaryButton v-on:click="showModal = true">Login / Register</PrimaryButton>-->
        <SecondaryButton @click="show1()">Login / Register</SecondaryButton>
        <Modal name="m2" v-model:visible="modalVisible" @onVisible="onVisible2" @onUnVisible="onUnVisible" :okButton="{onclick: okfn,loading: true}">
            <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="LoginRegModal">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <h4 class="modal-title" id="myModalLabel">Login / Register</h4>
                        </div>
                        <div class="modal-body">
                            <ul class="nav nav-tabs">
                                <li role="presentation" class="active"><a href="#tab1" aria-controls="home" role="tab" data-toggle="tab">Login</a></li>
                                <li role="presentation"><a href="#tab2" aria-controls="profile" role="tab" data-toggle="tab">Register</a></li>
                            </ul>
                            <!-- Tab panes -->
                            <div class="tab-content">
                                <div role="tabpanel" class="tab-pane active" id="tab1">
                                    -<Login></Login>
                                </div>
                                <div role="tabpanel" class="tab-pane" id="tab2">
                                    <Register></Register>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </modal>
</template>

<script>
    import Login from 'resources/js/Pages/Auth/Login.vue';
    import Register from 'resources/js/Pages/Auth/Register.vue';
    import SecondaryButton from '@/Components/SecondaryButton.vue';
    import { reactive, ref, onUnmounted } from 'vue';
    import { useModal, Modal } from './components/useModal';
    // import { useModal, Modal } from 'usemodal-vue3';

    const handle = ref();

    const setModal = useModal({
        m2: 1
    });

    let modalVisible = reactive({});
    modalVisible = setModal('m2', true);

    let modalShow = ref(false);

    function show2() {
        modalVisible = setModal('m2', true);
    }

    function okfn() {
        setTimeout(() => {
            modalVisible = setModal('m2', false);
        }, 1000)
    }

    function cancelfn() {
        setTimeout(() => {
            modalShow.value = false;
        }, 1000)
    }

    function onVisible() {
        console.log('onVisible')
    }

    function onUnVisible() {
        console.log('onUnVisible', )
    }
    onUnmounted(() => {
    })
</script>
