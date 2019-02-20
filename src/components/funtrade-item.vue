<template>
    <div class="row">
        <p class="model-title">{{item.title}}</p>
        <p class="model-text line-bottom">
            <strong>{{item.text}}</strong>
        </p>
        <div class="container">
            <div v-for="(child,index) in item.children" :key="index" class="col-lg-6 col-md-6 hidden-sm hidden-xs">
                <div class="th-div th-div-center">
                    <p class="th-p-title">{{child.title}}</p>
                    <p class="th-p-content">{{child.des}}</p>
                    <div v-for="(sub_child,sub_index) in child.children" :key="sub_index":class="'col-lg-4 col-md-4 hidden-sm hidden-xs'">
                        <p class="th-p-title">{{sub_child.title}}</p>
                        <p class="th-p-content">{{sub_child.des}}</p>                                              
                    </div>
                </div>
            </div>
            <div class="hidden-lg hidden-md">
                <div v-for="(child,index) in item.children" :key="index" :class="index==1?'th-div-xs':''" class="th-div th-div-center" >
                    <p class="th-p-title">{{child.title}}</p>
                    <p class="th-p-content">{{child.des}}</p>
                    <div v-for="(sub_child,sub_index) in child.children" :key="sub_index":class="'col-lg-4 col-md-4 hidden-sm hidden-xs'">
                        <p class="th-p-title">{{sub_child.title}}</p>
                        <p class="th-p-content">{{sub_child.des}}</p>                                              
                    </div>
                </div>
            </div>
            <img src="../../static/img/other/scenario_bg.png"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'item',
        props:{
            item:{
                type:Object,
                default:{}
            }
        },
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>
<style scoped>

    .model-title{
        color: #666;
        font-size: 16px;
        letter-spacing: .2em;
        margin-bottom: 15px;
    }
    .model-text{
        margin-bottom: 80px;
    }
    .th-div{
        width: 95%;
    }
    .th-div .th-p-title{
        font-weight: bolder;
        margin-top: 40px;
        font-size: 20px;
    }
    .th-div .th-p-content{
        margin-top: 15px;
        font-size: 14px;
        line-height: 26px;
        text-align: justify;
    }
    .img-highlights{
        width: 150px;
        text-align: center;
    }
    .th-div-center{
        margin-left: auto;
        margin-right: auto;
    }
    .th-div-xs{
        margin-top: 30px;
        margin-bottom: 30px;
    }
</style>
