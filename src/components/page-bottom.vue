<template>
    <div class="row footer">
        <div class="community-area-lg-md-sm row hidden-xs">
            <div v-for="(item,index) in pageData.footerList.concatList" :key="index" class="col-lg-2 col-md-2 col-sm-2" :class="index==0?'col-lg-offset-1 col-md-offset-1 col-sm-offset-1':''">
                <div class="p-footer-col-name">{{item.title}}</div>
                <ul class="footer-ul">
                    <li class="" v-for="(child,cIndex) in item.list" :key="cIndex">
                        <a :href="child.link" target="_blank" :class="child.icon=='fa-wechat'?'wechat-div':''">
                            <i class="fa" :class="child.icon"></i>
                            <span>{{child.name}}</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 nkn-contact-container">
                <div class="p-footer-col-name">{{pageData.footerList.mailInfo.title}}</div>
                <ul class="footer-ul">
                    <li class="">
                        <a :href="'mailto:'+pageData.footerList.mailInfo.address" class="mail-to">
                            <i class="fa fa-envelope"></i>
                            <span>{{pageData.footerList.mailInfo.address}}</span>
                        </a>
                    </li>
                    <li class="">
                        <div class="email-address">
                            <input :placeholder="pageData.footerList.mailInfo.mailPlaceholder" class="form-control input-email">
                            <button class="btn btn-default btn-email">{{pageData.footerList.mailInfo.dingyue}}</button>
                        </div>
                        <p class="email-desc">
                            {{pageData.footerList.mailInfo.dyMsg}}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="community-area-xs row hidden-lg hidden-md hidden-sm visible-xs-12">
            <div class="row row-footer-further hidden-lg hidden-md hidden-sm visible-xs-12">
                <div class="xm-bottom-link">
                    <a v-for="(item,index) in pageData.footerList.xmList" :key="index" class="rff-icon"
                        :href="item.link" target="_blank">
                        <span class="fa" :class="item.icon"></span>
                        <span>{{item.name||''}}</span>
                    </a>
                </div>
                <p>{{pageData.footerList.mailInfo.title}}</p>
                <a :href="'mailto:'+pageData.footerList.mailInfo.address" class="mail-to">
                    <span>{{pageData.footerList.mailInfo.address}}</span>
                </a>
                <div class="email-address">
                    <input :placeholder="pageData.footerList.mailInfo.mailPlaceholder" class="form-control input-email">
                        <button class="btn btn-default btn-email">{{pageData.footerList.mailInfo.dingyue}}</button>
                </div>
                <p class="email-desc">
                    {{pageData.footerList.mailInfo.dyMsg}}
                </p>
            </div>
        </div>
        <div class="copyright">
            Copyright &copy; 2017-2018 KOFO    |    All rights reserved
        </div>
    </div>
</template>
<script>
    import enLocale from '../lang/en'
    import zhLocale from '../lang/zh'
    import jpLocale from '../lang/jp'
    import krLocale from '../lang/kr'
    export default {
        name: 'nav',
        props:{
            
        },
        computed: {
            pageData () {
                this.indexLang = this.$route.path;
                let _obj = {};
                if(this.indexLang.indexOf('/zh')>=0){
                    this.indexLang = '/zh';
                    _obj = zhLocale;
                }
                else if(this.indexLang.indexOf('/jp')>=0){
                    this.indexLang = '/jp';
                    _obj = jpLocale;
                }
                else if(this.indexLang.indexOf('/en')>=0){
                    this.indexLang = '/en';
                    _obj = enLocale;
                }
                else if(this.indexLang.indexOf('/kr')>=0){
                    this.indexLang = '/kr';
                    _obj = krLocale;
                }
                else {
                    this.indexLang = '/en';
                    _obj = enLocale;
                }
                return _obj
            }
        },
        data () {
            return {
                
            }
        },
        methods:{
            
        }
    }
</script>
