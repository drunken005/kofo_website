<template>
    <div class="index" @click="clickBody">
        <div class="image-banner-outer">
            <banner-bg/>
        </div>
        <!-- top video -->
        <!-- <div class="video-banner-outer">
            <video autoplay="autoplay" loop="loop" muted="muted" playsinline="" poster="/static/img/NKN-animation-cover.jpg" class="video-banner" width="100%">
                <source :src="pageData.topVideo.mp4" type="video/mp4"> 
                <source :src="pageData.topVideo.ogg" type="video/ogg">
            </video>
        </div> -->
        <!-- nav -->
        <navs-item @setTopToIndex="setTopToIndex" :clickClientX="eClientX"></navs-item>
        <!-- content -->
        <div class="container-fluid">
            <!-- banner -->
            <div class="row row-banner">
                <div class="container">
                    <div class="row row-banner-slogan hidden-xs">
                        <p>
                            {{pageData.bannerInfo.desc1}}
                        </p>
                        <p>
                            {{pageData.bannerInfo.desc2}}
                        </p>
                    </div>
                    <div class="row row-banner-slogan-xs hidden-lg hidden-md hidden-sm">
                        <p>
                            {{pageData.bannerInfo.desc1}}
                        </p>
                        <p>
                            {{pageData.bannerInfo.desc2}}
                        </p>
                    </div>
                    <div class="row hidden-xs" style="text-align: center">
                        <a target="_blank" :href="pageData.bannerInfo.itemUrl" class="a-btn-hover btn-about2 btn-left">
                            {{pageData.bannerInfo.itemCode}}
                        </a>
                        <a target="_blank" :href="pageData.bannerInfo.codeUrl" class="a-btn-hover btn-github2 lg-btn-github2 btn-left">
                            {{pageData.bannerInfo.codeName}}
                        </a>
                    </div>
                    <div class="row hidden-lg hidden-md hidden-sm">
                        <div class="col-lg-6 col-md-6 col-sm-6 col-banner-xs-">
                            <a target="_blank" :href="pageData.bannerInfo.itemUrl" class="a-btn-hover btn-about2 btn-center">
                                {{pageData.bannerInfo.itemCode}}
                            </a> 
                            <a target="_blank" :href="pageData.bannerInfo.codeUrl" class="a-btn-hover btn-github2 lg-btn-github2 btn-left">
                                {{pageData.bannerInfo.codeName}}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <intro-item v-for="(item,index) in pageData.itemList.slice(0, 2)" :key="index" 
                        :class="Number.isInteger(index/2)?'row-ca-introduction':'row-sys-highlight'"
                        :item="item"/>
            <advantage-item v-for="(item,index) in pageData.itemList.slice(2, 3)" :key="index" 
                        :class="'row-ca-introduction'"
                        :item="item"/>
            <funtrade-item v-for="(item,index) in pageData.itemList.slice(3, 4)" :key="index" 
                        :class="'row-sys-highlight'"
                        :item="item"/>
            <advantage-item v-for="(item,index) in pageData.itemList.slice(4)" :key="index" 
                        :class="Number.isInteger(index/2)?'row-ca-introduction':'row-sys-highlight'"
                        :item="item">
            </advantage-item>
            <!-- new -->
            <!-- <div class="row row-ca-introduction" ref="new">
                <div class="container">
                    <p class="line-bottom">
                        <strong>{{ pageData.news.title}}</strong>
                    </p>
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div class="news-area">
                                <new-item v-for="(item,index) in pageData.news.left" :key="index" :item="item"></new-item>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div class="news-area">
                                <new-item v-for="(item,index) in pageData.news.right" :key="index" :item="item"></new-item>
                            </div>
                        </div>
                    </div>
                    <div class="row video-row">
                        <div class="video-arrow video-arrow-left video-arrow-display">
                            <img :src="iconArrowRight" v-if="leftShow" @click="leftClick">
                        </div>
                        <div class="video-arrow video-arrow-right video-arrow-display">
                            <img :src="iconArrowLeft" v-if="rightShow" @click="rightClick">
                        </div>
                        <div v-for="(item,index) in pageData.videoList" :key="index" 
                             :class="(index+1)>=pageIndex&&(index+1)<pageIndex+3?'block':'none'"
                            class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-video-cell">
                            <videos-item :item="item" :itemIndex="index"></videos-item>
                        </div>
                    </div>
                </div>
            </div> -->
            <!-- team -->
            <!-- <div class="row row-sys-highlight" ref="team">
                <div class="container">
                    <p class="line-bottom">
                        <strong>{{pageData.teamList.title}}</strong>
                    </p>
                    <div class="row">
                        <div v-for="(team,index) in pageData.teamList.list" :key="index" class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div class="div-team-item">
                                <div class="team-front">
                                    <img :src="team.headIcon" class="img-team-avatar">
                                    <div class="row row-team-name">
                                        {{team.name}}
                                    </div>
                                    <div class="row row-team-tit">
                                        <p>
                                            {{team.jobTitle}}
                                        </p>
                                        <p v-if="team.otherTitle">
                                            {{team.otherTitle}}
                                        </p>
                                    </div>
                                </div>
                                <div class="team-back">
                                    <div class="row row-team-desc">
                                        <p>{{team.oldJob}}</p>
                                        <p>{{team.functions}}</p>
                                    </div>
                                    <div class="row row-team-link">
                                        <a target="_blank" :href="team.inCode" v-if="team.inCode">
                                            <i class="fa fa-in">in</i>
                                        </a>
                                        <a target="_blank" :href="team.githubCode" v-if="team.githubCode">
                                            <i class="fa fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row row-team-advisor">
                        <div class="row">
                            <div class="col-lg-3 col-md-4 col-sm-6 hidden-xs">
                                <img :src="pageData.teamList.important.img" class="img-team-advisor">
                            </div>
                            <div class=" hidden-lg hidden-md hidden-sm col-xs-12 img-team-advisor-xs">
                                <img :src="pageData.teamList.important.img" class="img-team-advisor">
                            </div>
                            <div class="col-lg-9 col-md-8 col-sm-6 col-xs-12 advisor-name-tit">
                                <p class="p-team-advisor-tit">{{pageData.teamList.important.title}}</p>
                                <div class="p-team-advisor-line"></div>
                                <img src="/static/img/bottomBg.png" class="hidden-xs lg-md-sm-advisor-bg">
                                <img src="/static/img/bottomBg.png" class="hidden-lg hidden-md hidden-sm xs-advisor-bg">
                                <a href="" target="_blank" class="a-advisor-name">
                                    <p class="p-team-advisor-name fs-family">{{pageData.teamList.important.name}}</p>
                                </a>
                                <div class="cryptography-turing-award">
                                    <div class="row">
                                        <div class="col-lg-1 col-md-1 col-sm-1 col-xs-2">
                                            <img :src="iconCryptography" class="img-cryptography">
                                        </div>
                                        <div class="col-lg-11 col-md-11 col-sm-11 col-xs-10">
                                            <p class="p-team-advisor-introduction fs-family">
                                                {{pageData.teamList.important.honor1}}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-1 col-md-1 col-sm-1 col-xs-2">
                                            <img :src="iconTuring" class="img-cryptography">
                                        </div>
                                        <div class="col-lg-11 col-md-11 col-sm-11 col-xs-10">
                                            <p class="p-team-advisor-introduction fs-family">
                                                {{pageData.teamList.important.honor2}}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row advisor-introduction-area">
                            <p class="fs24">{{pageData.teamList.important.otherHonor.title}}</p>
                            <p v-for="(item,index) in pageData.teamList.important.otherHonor.list" :key="index">
                                {{item}}
                            </p>
                        </div>
                    </div>
                </div>
            </div> -->
            <!-- 路线 -->
            <div class="row row-ca-introduction">
                <div class="container">
                    <p class="line-bottom">
                        <strong>{{pageData.lineList.title}}</strong>
                    </p>
                    <img src="../../static/img/other/roadmap.png"/>
                    <!-- <div class="nkn-road-map-row row-line-bigdiv">
                        <div class="row-line-div" v-for="(pItem,index) in pageData.lineList.list" :key="index">
                            <div class="row row-line-inner">
                                <div class="headline-left">
                                    <div class="road-map-item-headline">
                                        {{pItem.name}}
                                    </div>
                                </div>
                            </div>
                            <div class="row row-line-inner" v-for="(item,cIndex) in pItem.list" :key="cIndex">
                                <div class="item-point-outer">
                                    <div class="item-point-inner"></div>
                                </div>
                                <div class="headline-left">
                                    {{item.date}}
                                </div>
                                <div class="headline-right">
                                    <p class="hr-title">{{item.title}}</p>
                                    <p>
                                        {{item.desc}}
                                    </p>
                                </div>
                            </div> 
                        </div>
                    </div> -->
                </div>
            </div>
            <!-- 合作伙伴 -->
            <div class="row row-sys-highlight">
                <div class="container">
                    <p class="line-bottom">
                        <strong>{{pageData.partners.title}}</strong>
                    </p>
                    <div class="row row-partners">
                        <div v-for="(item,index) in pageData.partners.list" :key="index" class="col-lg-4 col-md-4 col-sm-12 col-xs-12 partners-item">
                            <img :src="item.img" width="200">
                        </div>
                    </div>
                </div>
            </div>
            <!-- buttom bg -->
            <!-- <div class="row bottom-bg">
                <div class="div-img-logo">
                    <img src="/static/img/other/logokofo.png" width="122px">
                </div>
                <div class="contact-free-the-bits">
                    <span></span>
                    <span class="black-content">KOFO: make the blockchain world flatter.</span>
                </div>
            </div> -->
            <page-bottom></page-bottom>
        </div>
        <!-- fixed -->
        <div class="navbar-fixed-bottom" v-if="showFixed">
            <div class="row">
                <div class="col-xs-offset-1 col-xs-10 col-sm-offset-1 col-sm-10 col-md-offset-1 col-md-8 col-lg-offset-1 col-lg-8">
                    <div class="warning-left">
                        <img :src="iconWarn" class="warning-icon">
                        <div class="warning-text">
                            <div v-html="pageData.fixedInfo.msg"></div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-offset-1 col-xs-10 col-sm-offset-1 col-sm-10 col-md-offset-0 col-md-2 col-lg-offset-0 col-lg-2">
                    <div class="warning-bottom" @click="showFixed=false">
                        <span>{{pageData.fixedInfo.btnName}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
    import indexItem from '../components/index-item'
    import introItem from '../components/intro-item'
    import advantageItem from '../components/advantage-item'
    import funtradeItem from '../components/funtrade-item'
    import videosItem from '../components/video-item'
    import newItem from '../components/new-item'
    import navsItem from '../components/header-item'
    import pageBottom from '../components/page-bottom'
    import bannerBg from '../components/banner-bg'
    import enLocale from '../lang/en'
    import zhLocale from '../lang/zh'
    import jpLocale from '../lang/jp'
    import krLocale from '../lang/kr'
    export default {
        components: {
            indexItem,
            advantageItem,
            funtradeItem,
            newItem,
            videosItem,
            navsItem,
            pageBottom,
            bannerBg,
            introItem
        },
        data(){
            return {
                indexLang:'',
                eClientX:0,
                showFixed:false,
                videosCount:0,
                rightShow:false,
                leftShow:false,
                pageIndex:1,
                iconWarn:'',
                iconTuring:'',
                iconNav:'',
                iconArrowLeft:'',
                iconArrowRight:'',
            }
        },
        computed: {
            pageData () {
                this.indexLang = this.$route.path;
                let _obj = {};
                switch(this.indexLang){
                    case '/zh':
                        _obj = zhLocale;
                        break;
                    case '/':
                        _obj = enLocale;
                        break;
                    case '/jp':
                        _obj = jpLocale;
                        break;
                    case '/en':
                        _obj = enLocale;
                        break;
                    case '/kr':
                        _obj = krLocale;
                        break;
                }
                return _obj
            }
        },
        mounted(){
            this.videosCount = 3;
            if(this.pageData.videoList.length>3){
                this.rightShow = true;
            }
        },
        methods:{
            setTopToIndex(_name){
                if(_name){
                    window.scroll(0, this.$refs[_name].offsetTop);
                }
            },
            clickBody(_menuItem){
                this.eClientX = _menuItem.clientX;
            },
            rightClick(){
                this.pageIndex +=1;
                this.leftShow = true;
                if(this.pageIndex+3>this.pageData.videoList.length){
                    this.rightShow = false;
                }
            },
            leftClick(){
                this.leftShow = true;
                this.pageIndex -=1;
                if(this.pageIndex<=1){
                    this.pageIndex = 1;
                    this.leftShow = false;
                }
                if(this.pageData.videoList.length>3){
                    this.rightShow = true;
                }
            }
        }
    }
</script>
<style lang="less">

div.row-banner-slogan {
    p {
        font-size: 18px;
    }
    p:first-child {
        font-size: 34px;
    }
}

.div-team-item {
    position: relative;
    perspective: 600px;
    -webkit-perspective: 600px;
    transition: all .4s ease-in-out;
    .team-front {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 900;
        width: 100%;
        height: 100%;
        padding-top: 25px;
        transform: rotateX(0);
        transform-style: preserve-3d;
        backface-visibility: hidden;
        transition: all .4s ease-in-out;
        box-shadow: 0 0 3px 0 #d6dbee;
    }
    .team-back {
        .team-front;
        padding-top: 10%;
        z-index: 800;
        background: #e8e8e8;
        transform: rotateY(-179deg);
        box-shadow: none;
    }
    &:hover {
        .team-back {
            z-index: 1000;
            transform: rotateX(0);
        }
        .team-front {
            transform: rotateY(179deg);
        }
    }
}

</style>


