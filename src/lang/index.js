/*
 * @Description: 语言
 * @Author: Lewis
 * @Date: 2021-04-21 00:14:40
 * @LastEditTime: 2021-04-21 10:52:16
 * @LastEditors: Lewis
 */
import en from './en.js'
import zh from './zh.js'
import VueI18n from 'vue-i18n'
import Vue from 'vue'
import store from '@/store'

Vue.use(VueI18n)
export default new VueI18n({
    locale:store.getters.language||'zh',
    messages:{
        en:en,
        zh:zh
    }
})

