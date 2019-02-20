<template>
    <div class="appdownload-body ">
        <div class="mb-stars"></div>
        <div class="page-bg-btm mobile"></div>
        <div class="appdownload-wrap">
            <div class="appdownload-logo">
                <img src="/static/img/download/iphonex.png" alt="phone">
                <p class="appname">KOFO app download</p>
            </div>
            <div class="appdownload-btns">
                <a class="btn item-android" id="J_android"
                   href="http://kofo-pub.oss-cn-beijing.aliyuncs.com/app/Kofo_1.0.1_internal_201902132246.apk"
                   style="margin-left: 5px;text-align: center; margin-right: 20px">
                <span class="txt" style="float: none"> <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFH0lEQVR4Xu2bTWgcZRjH/89u82VmBG0N/TCkTTNbMdaSmYOWatGDPUgRPUhPKtiKeKuKFkT0IBRpiyBeFKtIvAqivYjioYdgLcyuiY3Q3SVtTdqKDUg7EzdxO/PIpN2Y7s7OvPvOTHfBySlhno//+3uf93MmhJh/xkp9OwnZbwioMNHB/Ij1dZQUell9Bi5/BEK3k3X2Tg5XTkeJV+9LcQbzYhlFdQaELTfi8iJcGjS3WfMyee6bU9f2V3gOoN4b4XDOzFnDMrGa+SQBYB6EtbWEzDiaz1lvyog2SuoxAK+v+DLPmzn7HplYtw2AXlSPEOGN/xLKVUFD73sFQDiSH7EOdTQA46y6DhmeXSlbTzjjqNtlHc446uPE/ASYdAADTLyRAIdBVwBcIuJJJvxAsH9kV32XgFejggyDFfsQ8BI2VkGYjPDnSfS+lzURAH5VEN7EIAu5YSSSMxEAeqn/IIGOAZQVERFuww5AH1ZV652p9VgItxe3iBXA6DS6e7qVcQLtE5cgbsnMU5S1d5tbcVXcK9gyNgD3zqJvoKJ8R0S74xLnG4fx81Wy9pQ1XIsjTzwAGBmjpJ4A4ck4RIXFiLMSYgFgFJX3QPR2mPA4nzPweV6z9keNGRmAPqM+CodPEsg3FgPf0hoc4ip7Ju8T8FTgfN+CvQt+rKDZJ6NAiAaAQXpZOUOg+5uKyFwfMrdWfveeP1DuG+zhNcu/x2PPZ0zN3t42AEZZfRqMwNOem61uLgwvXvBEjs30DmWcrvNBglu2Bz9b0OyvZCFEqgC9qJ4gwt6wknbAb3k2WdBhkSHQij2ACVOzHrntAEZncXfvovJnfJsd2SYAVVwfnNIqczIRpCtgrKTuzwDHZZLG7eMyv1LI2R/LxJUGoJfUcQKek0magM+4qVkvyMSVBmCUlDxAYzJJ4/fhvKnZhkxcaQB6UZkjok0ySZPwMTVLqi1STl4D/vcAkujFdsSUroB2iE0ipy+A0XP963uqmU8J2OklZeCnpS73pektC3/URBgllZMQJBtz9Rwgor+WpwHA9gu4q3tJmQbRhlvEMF92CTsKmu1dYKJTAYjqbwrAKKpfgOC7pjLwZV6znu9kAKL6AwAoV0C0zrcUV72Y6NQKMIpi+psDCBnbtbHWsQAE9acAbhJomATDejatgJtbzjBQssuZrJ9ox9RvmdMKqCce1rOipGV7UtZPVFdaAXWnxnQIpEOgjkA6BwjupMJAyU5msn7pJCi4P0lXgXQVuPXyNF0G02WwjoBeVC4S0Ua/2ZiZL+Vz9vK7gE5dBUT1S12JAVh5BdWpAIKuxFbrbwrgwbIy0OXiF79L0X967NFfh/CX56wXVZsI/bLrdpx+zFjI5yzFiymqvymA5fI+f8cGrmY/IcYu728mTFCX87K5+e/LNUejqJ4C4aE4GyIdi3HazFkrWkT0BwIQETJWUl/MAJ+J2CZt4wIHCpolpUX+zRAjo5fVCQIeTrqBQfEZOJUfsXaB4MrokAcAYMfZvk3ZTPb7wI+kZFQJ+jD4N8d19kxuq1wUdGkwiwTAizZSQs+dUA4Q02sgxPrfHE0bxZhh4g+uwT5e1rAk23jPLzIA2Y1UM9Fhy6vsdwDN8qUAopSPn2/UHozq32p70gpolViYfdQejOofpq/+eVoBrRILs4/ag1H9w/SlFVBHIPYh0Op5vL5Hovq3vwICPrHxO483bKQi+rcdQKvn8XrBUf3bDsAT0Mp53HczJXAf0WpDm9n/C5PSIW7/sizoAAAAAElFTkSuQmCC"
                        width=40 height=40 class="app-logo"/> Android</span>
                </a>
                <a class="btn item-android" id="J_ios" onclick="alertS();"
                   style="text-align: center;background-color: gray">
                <span class="txt" style="float: none"> <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEkUlEQVR4Xu1bXVLUQBCe3sALUCWewPUNmKkSTwCcQDyBcALxBOAJxBO4nMDlBOIJXKtmgDeXEwhVCS+QtNVVCRXXJNMT4u7M6r7u1Ez3N9/0f0AE8Ov3+6tLS0tbvV5vUwgBWuujrsSGrjb6G/usra31oyg6BIBdIcRqfsZXrfV2V+d5C4BS6lAIUXXT8w0A0X15efkLABDd//hlWfbx/Pz8YC4ZYFOelEbEfWPMYC4BkFJ+q7v5QuE4jp+Ox+PruQNgY2PjuNfrvbUo1un7p7O8MIJKKbLqXxi3uqO1PmOsYy/xAgAp5QAA3jRJjYjfjTGVhpGtbcXCmQNAvn5hYeGHTQlEfGmMGdnWuf4/cwCklAcA8MFy+51a/vJZPgAwBIBXdQB07fYmz5k5AEopMmpbFQDcCCF2uzZ6PgKAZaEQ8UoIcZwkyaBLf1/HMF8YQPKdIeK4yyiPYxA7BYAs+uLi4rPi4Lu7u6vLy8sxR5CqNVLKTQCg51Fkgg/LsiwbZVn2/TH7PzoQymN3MmDbEynrb/og4ggABnEcn3BoTYERIn4CgL4NPGINsQcATtrYi9YMcBFyQokhIg6TJDktg1ECk9xi24CHntE7l3jBGQASdGVl5RNZaNvt2P6n2wOAMSL2Obdt26/438V1OgGwvr6+G0URKf/Hm+QKN611iDgwxuzbzmMDIKXcAwBSPqTfe1v9kAVAbo2/haR5IWuapq8vLi6GreOAPFkh5b2n/aSSiHiaJMlek+dpZACnROUxK6z0t8YBSimqylJ1NqgfIp4YY/Y4QtcygJuncw6Z5hqivTGG7aJrAeBUaaapGPOsmziO+5xos9ivFgCl1M/QDJ9LANQIQKBu70Zr7eypKhkQovFr2zGqBEBK2VimYr7HqS6zBTxOgRCnQzNV7RiHte0Y1T2B38pUjPNnvkRrzQrrJwX9D0DV1Sml/jNg5px2FOCffwJCiFaN07mxAZ3GASHagLyn8Nzx5VTPBzS0q1z3n+r6znKBEENhQroNCyptQF79/TzV6+vosLwvcMzdrhKAUIshhdIuwxRNBRFqWjz0+biI+rCOnkKapjucvmEtAMypLR/0rZPhGhF3bG2ypooQd3LLaxBo3FZr/dEpHS4WSymDfQZlhfMe5H5V97gxhQzVHdbcduWQZSMAoXuDCSAqcwVrESHQ8vgkCWpHbK0AOIyx+mwMazNFKwCkVai5QR4eN7bJWAAE2icg/W/u7+83mwIiFgC0U6CBkbVDzAYgnw2iiawnPj/2Uj5wZYyxTpmxAaCNQ8oSuY0SJwAIhEC6RlbqF0xxBiCfGqHBxBc+PgWX4QiS3xmAnAU0wkpT3r7ZA+dviloB4CMI9ElNkiTbLsMRrRlQyha9YAKN2Kdpus0pgEw+29YMKIMghKB2ulP1iG5MCEHp9ihN01EURVTAILdFdQgavmbtR/2A29vbI9ebb20EqwxfbhiPGV9+nWZZNmgaXCz2z10ufSJb+TUJIp5x92oy1o9mQHlzCpkRkUZqd/MbpM9eRjQdnqbpsA1F85T8IaBBxGtbmcvFO/0C8G5AX4YfS3AAAAAASUVORK5CYII="
                        width=40 height=40 class="app-logo"/> Ios</span>
                </a>
            </div>
            <p style="text-align: center;color: white; width: 60%;margin: 0 auto"></p>
            <div class="open-in-browser"></div>
        </div>

        <div class="wxtip" id="JweixinTip">
            <span class="wxtip-icon"></span>
            <p class="wxtip-txt">Click right <br/>choose open in browser</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "download",
        methods: {
            alertS() {
                alert('Coming soon！');
            },
            weixinTip(ele) {
                var ua = navigator.userAgent;
                var isWeixin = !!/MicroMessenger/i.test(ua);
                if (isWeixin) {
                    ele.onclick = function (e) {
                        window.event ? window.event.returnValue = false : e.preventDefault();
                        document.getElementById('JweixinTip').style.display = 'block';
                    }
                    document.getElementById('JweixinTip').onclick = function () {
                        this.style.display = 'none';
                    }
                }
            }
        },
        mounted() {
            var btn1 = document.getElementById('J_android');//下载一
            this.weixinTip(btn1);
            var btn2 = document.getElementById('J_ios'); //下载二
            this.weixinTip(btn2);
        }
    }
</script>

<style scoped>
    @import "app_files/app.css";
    @import "app_files/main.css";
</style>