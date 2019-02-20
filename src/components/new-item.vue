<template>
    <div class="news-item">
        <p class="new-title">
            <a target="_blank" :href="item.url">
                {{item.title}}
            </a>
        </p>
        <p class="new-time">
            {{item.date}}
        </p>
        <div class="row">
            <div class="col-lg-5 col-md-5 col-new-img">
                <a target="_blank" :href="item.url">
                    <img :src="item.img" alt="" width="90%" class="new-img">
                </a>
            </div>
            <div class="col-lg-7 col-md-7 col-news-txt">
                <a target="_blank" :href="item.url">
                    <p class="new-txt">
                        {{item.desc}}
                    </p>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'new',
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
    .new-title{
        font-size: 18px;
        min-height: 50px;
    }
    .new-time{
        color: #949494;
        font-weight: 200;
    }
    .new-txt{
        color: #000;
    }
    .new-img:hover{
        opacity: .9;
    }
</style>

