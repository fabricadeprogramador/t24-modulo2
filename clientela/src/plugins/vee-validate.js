import Vue from 'vue'
import { ValidationProvider, localize } from 'vee-validate/dist/vee-validate.full'
import pt_BR from 'vee-validate/dist/locale/pt_BR.json'

Vue.component('ValidationProvider', ValidationProvider);

localize('pt_BR', pt_BR)