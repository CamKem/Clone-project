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
        background: #fcfcf;
    }

    .tab {
        border: 1px solid #ccc;
        padding: 10px;
    }
</style>

<script>
import LoginVue from './Auth/Login.vue'
import RegisterVue from './Auth/Register.vue'
export default { components: { LoginVue, RegisterVue } }
</script>

<template>
    <div>
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="LoginRegisterModal">
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
                                <LoginVue></LoginVue>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="tab2">
                                <RegisterVue></RegisterVue>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

