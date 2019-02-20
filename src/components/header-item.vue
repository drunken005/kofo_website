<template>
    <div>
        <nav :class="`${navbarClass} navbar navbar-default`">
            <div class=" container-fluid-fix">
                <!-- container -->
                <!-- <div class="navbar-header">
                    <router-link to="/">
                        <img :src="logoImg" class="nkn-banner-logo">
                    </router-link>
                </div> -->
                <div :class="`nav-container hidden-xs`">
                    <ul :class="`${leftNavBar} animated nav left-navigation navbar-nav navbar-left nkn-nav-menu narbar-main-pages`">
                        <li v-for="(menus,index) in pageData.leftMenus" :key="index" @click.stop="clickMenu(menus,index)">
                            <a class="dropdown-toggle" :ref="'menuItem-'+index">
                                <div>
                                    {{menus.name}}
                                    <span v-if="menus.children.length>0" class="caret"></span>
                                </div>
                                <ul v-if="menus.children.length>0" class="dropdown-menu animated bounceInDown">
                                    <li  v-for="(child,cIndex) in menus.children" :key="cIndex">
                                        <a :href="child.url" target="_blank">{{child.name}}</a>
                                    </li>
                                </ul>
                            </a>
                        </li>
                    </ul>
                    <div :class="`${navbarCenter} navbar-center`">
                        <router-link to="/">
                            <img :src="logoImg" class="nkn-banner-logo">
                        </router-link>
                    </div>
                    <ul :class="`${rightNavbar} animated nav right-navigation navbar-nav navbar-right nkn-nav-menu narbar-main-pages`">
                        <li v-for="(menus,index) in pageData.rightMenus" :key="index" @click.stop="clickMenu(menus, (pageData.leftMenus.length + index))">
                            <a v-if="pageData.rightMenus.length-1==index" :ref="'menuItem-'+(pageData.leftMenus.length + index)" class="dropdown-toggle">
                                <div>
                                    <!-- <img :src="icnoLang" class="nkn-language-switch-icon">
                                    <span>{{menus.name}}</span> -->
                                </div>
                                <ul v-if="menus.children.length>0" class="dropdown-menu animated bounceInDown">
                                    <li  v-for="(child,cIndex) in menus.children" :key="cIndex">
                                        <router-link :to="child.url">{{child.name}}</router-link>
                                    </li>
                                </ul>
                            </a>
                            <a class="dropdown-toggle" v-else :ref="'menuItem-'+(pageData.leftMenus.length + index)">
                                <div>
                                    {{menus.name}}
                                    <span v-if="menus.children.length>0" class="caret"></span>
                                </div>
                                <ul v-if="menus.children.length>0" class="dropdown-menu animated bounceInDown">
                                    <li  v-for="(child,cIndex) in menus.children" :key="cIndex">
                                        <a :href="child.url" target="_blank">{{child.name}}</a>
                                    </li>
                                </ul>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="hidden-lg hidden-md hidden-sm">
                    <ul class="nav navbar-nav navbar-right nkn-nav-menu narbar-main-pages">
                        <li class="li-bars-style" v-for="(menus,index) in pageData.menus" :key="index" v-if="pageData.menus.length-1==index">
                            <a class="dropdown-toggle xs-menu" @click.stop="clickMenu(menus,index,'xs')" :ref="'menuItem-xs'+index">
                                <div>
                                    <img :src="icnoLang" class="nkn-language-switch-icon">
                                </div>
                                <ul v-if="menus.children.length>0" class="dropdown-menu">
                                    <li  v-for="(child,cIndex) in menus.children" :key="cIndex">
                                        <router-link :to="child.url">{{child.name}}</router-link>
                                    </li>
                                </ul>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
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
            clickClientX:{
                type:Number,
                default:0
            },
            showBlue:{
                type:Boolean,
                default:false
            }
        },
        watch:{
            clickClientX(val){
                if(val){
                    this.clickBody();
                }
            }
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
                _obj.leftMenus = _obj.menus.slice(0, 3)
                _obj.rightMenus = _obj.menus.slice(3)
                console.log('obj', _obj)
                // switch(this.indexLang){
                //     case this.indexLang.indexOf('/zh')>0:
                //         _obj = zhLocale;
                //         break;
                //     case '/logo':
                //         _obj = zhLocale;
                //         break;
                //     case '/logo/jp':
                //         _obj = jpLocale;
                //         break;
                //     case '/logo/en':
                //         _obj = enLocale;
                //         break;
                //     case '/logo/kr':
                //         _obj = krLocale;
                //         break;
                // }
                return _obj
            }
        },
        data () {
            return {
                indexLang:'',
                icnoLang: '../../static/img/other/lang_icon.png',
                logoImg:'../../static/img/logo/kofo_logo.png',                
                navbarClass: '',
                leftNavBar: '',
                rightNavbar: '',
                navbarCenter: '',
                topHidePosition: 80,
                midShowPosition: 569
            }
        },
        mounted () {
            window.addEventListener('scroll', this.handleScroll)
        },
        methods:{
            clickMenu(item,index,isXs){
                let _stringName = 'menuItem-';
                if(isXs){
                    _stringName = 'menuItem-xs';
                }
                this.clickBody(_stringName+index);
                if(item.children.length>0){
                    let _dispaly = this.$refs[_stringName+index][0].lastChild.style.display;
                    this.$refs[_stringName+index][0].lastChild.style.display = _dispaly=='block' ? 'none' :'block'
                }
                else if(item.url&&item.url.indexOf('#')>=0){
                    let _name = item.url.split('#')[1];
                    this.$emit('setTopToIndex',_name);
                    this.$router.push(this.indexLang);
                }
                else{
                    this.$router.push(item.url+this.indexLang);
                }
            },
            clickBody(_menuItem){
                if(this.$refs['menuItem-0']){
                    for(let i in this.$refs){
                        if(i!=_menuItem&&i.indexOf('menuItem-')>=0&&this.$refs[i][0].lastChild.style){
                            this.$refs[i][0].lastChild.style.display = 'none';
                        }
                    }
                }
            },
            hideNav () {
                this.navbarClass ='nav-bar-hidden'
                this.leftNavBar = ""
                this.rightNavbar = ""
                this.navbarCenter = ""
                setTimeout(() => {
                    this.navbarClass += ' nav-bar-delete'
                }, 500)
            },
            showNav () {
                this.navbarClass = 'nav-bar-display'
                this.leftNavBar = "fadeInLeftBig"
                this.rightNavbar = "fadeInRightBig"
                this.navbarCenter = "flipInX"
                setTimeout(() => {
                    this.navbarClass += ' nav-bar-black-bg'
                })
            },
            handleScroll () {
                this.scrollTop = document.body.scrollTop || document.documentElement.scrollTop
                let {scrollTop, navbarClass, topHidePosition, midShowPosition} = this
                if (scrollTop < topHidePosition && ~navbarClass.indexOf('nav-bar-hidden')) {
                    this.showNav()
                }
                if (scrollTop > topHidePosition && scrollTop < midShowPosition && !~navbarClass.indexOf('nav-bar-hidden')) {
                    this.hideNav()
                }
                if (scrollTop > midShowPosition && !~navbarClass.indexOf('nav-bar-display')) {
                    this.showNav()
                    this.$nextTick(() => {
                        this.navbarClass += " navbar-default-blue"
                    })
                }
            }
        }
    }
</script>
<style lang="less">
    .index .navbar {
        transition: all linear .5s!important;
        z-index: 1000;
        .navbar-nav > li {
            height: auto;
            & > a {
                line-height: 70px;
                padding: 0 15px;
            }
        }
        &.nav-bar-black-bg {
            background: rgba(0, 0, 20, .6)!important;
        }
    }
    .index ul.navbar-nav {
        transition: all linear .5s!important;
    }
    .nav-bar-hidden {
        opacity: 0;
        background-color: transparent!important;
    }
    .nav-bar-delete {
        display: none;
    }
    .nav-bar-show {
        opacity: 1;
    }
    .nav-bar-display {
        display: block;
        background: transparent!important;
    }
    .navbar-center {
        line-height: 70px;
        animation-duration: 3s;
    }
    .index .navbar-default-blue ul.navbar-nav {
        border-bottom-width: 0;
    } 
    .navbar-bottom-style {

    }
</style>
