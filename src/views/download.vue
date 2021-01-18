<template>
    <div class="download-bar">
        <div class="wrapper" ref="wrapper">
            <div class="download-bar-content">
                <img class="download-title" src="../assets/download-title.png" alt="">
                <div class="download-content">
                    <div class="download-avatar">
                        <img src="../assets/download-app-icon.png" alt="">
                        <p class="user-name">陈陈陈陈陈</p>
                        <p class="user-detail">和我一起养成记账的好习惯吧！</p>
                    </div>
                    <div class="detail-bar">
                        <div>
                            <p>100</p>
                            <p>记账总天数</p>
                        </div>
                        <div>
                            <p>100</p>
                            <p>记账总笔数</p>
                        </div>
                    </div>
                    <div class="line"></div>
                    <div class="share-code-bar">
                        <h3><span></span>我的邀请码<span></span></h3>
                        <p class="code-box">SKLDF1234</p>
                        <van-button class="copy-btn" color="#FF463F" type="primary"
                                    v-clipboard:copy="'SKLDF1234'"
                                    v-clipboard:success="onCopySuccess"
                                    v-clipboard:error="onCopyError">复制</van-button>
                        <div class="line2"></div>
                        <p class="code-detail">下载记账精灵app，填写我邀请码，还可以获得500金币奖励哦！</p>
                    </div>
                </div>
                <div class="download-btn-bar">
                    <h3>下载应用</h3>
                    <img src="../assets/download-app-icon.png" alt="">
                    <van-button class="btn" color="#FF463F" type="primary" @click="show = true">点击下载记账精灵</van-button>
                </div>
            </div>
        </div>
        <van-overlay :show="show" @click="show = false">
            <img class="open-download" src="../assets/open-download.png" alt="">
        </van-overlay>
    </div>
</template>

<script>
    import BScroll from "better-scroll";
    import { Button, Toast, Overlay } from 'vant';

    export default {
        name: "download",
        data(){
            return {
                show: false
            }
        },
        components:{
            'van-button': Button,
            'van-overlay': Overlay
        },
        mounted() {
            this.$nextTick(() => {
                //$refs绑定元素
                if (!this.scroll) {
                    this.scroll = new BScroll(this.$refs.wrapper, {
                        //开启点击事件 默认为false
                        click: true
                    })
                } else if (!this.$refs.wrapper) {
                    return
                } else {
                    this.scroll.refresh()
                }
            })
        },
        methods:{
            onCopySuccess(e){
                Toast.success('已复制到剪切板');
            },
            onCopyError(e){
                let vm = this
            },
        }
    }
</script>

<style scoped lang="scss">
    .download-bar {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
    }

    .wrapper {
        width: 100%;
        height: 100%;
        position: absolute;
        overflow: hidden;
        z-index: 1;
        background-image: linear-gradient(#ff6951 0%, #ff6951 21.333333rem, #ff4a41 50%, #ff4a41 100%);
    }

    .download-bar-content {
        background: url("../assets/download-bg.png") no-repeat center top;
        min-height: 101%;
        background-size: 100%;
        padding-bottom: 32px;

        .download-title {
            width: 402px;
            margin-top: 74px;
            margin-bottom: 82px;
        }

        .download-content {
            width: 694px;
            height: 832px;
            background: url("../assets/download-app-content.png") no-repeat;
            background-size: 100%;
            margin: 0 auto 30px;
        }

        .download-btn-bar {
            width: 694px;
            height: 462px;
            background: url("../assets/download-app-bar.png") no-repeat;
            background-size: 100%;
            margin: 0 auto 47px;
        }
    }

    .download-avatar {
        width: 100%;

        img {
            width: 90px;
            height: 90px;
            background: #D8D8D8;
            border: 5px solid #FFFFFF;
            border-radius: 50%;
            margin-top: -50px;
            margin-bottom: 12px;
        }

        p.user-name {
            font-size: 24px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #969AA6;
            line-height: 1;
            margin-bottom: 14px;
        }

        p.user-detail {
            font-size: 28px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #121728;
            line-height: 1;
            margin-bottom: 44px;
        }
    }

    .detail-bar {
        display: flex;
        justify-content: space-between;

        > div {
            width: 50%;
            text-align: center;
            line-height: 1;

            p:first-child {
                font-size: 50px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #121728;
                line-height: 1;
                margin-bottom: 13px;
            }

            p:last-child {
                line-height: 1;
                font-size: 26px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #969AA6;
                margin-bottom: 44px;
            }
        }
    }

    .line {
        width: 658px;
        margin: 0 auto;
        border-top: 1px dashed #979797;
    }
    .line2 {
        width: 600px;
        margin: 0 auto 25px;
        border-top: 1px solid #E5E5E5;
    }

    .share-code-bar {
        h3{
            font-size: 36px;
            font-weight: normal;/**500**/
            color:rgba(51,51,51,1);
            line-height: 36px;
            padding-top: 69px;
            margin-bottom: 51px;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            span{
                width: 66px;
                height: 30px;
                display: inline-block;
                position: relative;
                &::after{
                    content: "";
                    display: inline-block;
                    width:8px;
                    height:28px;
                    background:linear-gradient(180deg,rgba(255, 210, 110, 1) 0%,rgba(248, 120, 39, 1) 100%);
                    transform: rotate(45deg);
                    border-radius: 24px;
                    position: absolute;
                    left: 10px;
                }
                &::before{
                    content: "";
                    display: inline-block;
                    width:8px;
                    height:20px;
                    background:linear-gradient(180deg,rgba(106, 102, 241, 1) 0%,rgba(147, 138, 244, 1) 100%);
                    transform: rotate(45deg);
                    border-radius: 24px;
                }
                &:last-child{
                    margin-left: 12px;
                }
            }
            p{
                width: 152px;
                height: 36px;
                font-size: 36px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #F8812E;
                line-height: 36px;
            }
        }
        .code-box{
            height: 52px;
            font-size: 50px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #121728;
            line-height: 52px;
            margin-bottom: 49px;
        }
        .copy-btn{
            width: 432px;
            height: 80px;
            background: #FF463F;
            border-radius: 6px;
            font-size: 30px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #FFFFFF;
            text-align: center;
            line-height: 80px;
            display: block;
            margin: 0 auto 42px;
            transition: .5s background-color;
            &:hover,&:active{
                background: #c12924;
                transition: .5s background-color;
            }
        }
        .code-detail{
            width: 600px;
            height: 84px;
            font-size: 28px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #475163;
            line-height: 42px;
            margin: 0 auto;
            text-align: left;
        }
    }

    .download-btn-bar{
        h3{
            height: 51px;
            font-size: 34px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #D53608;
            line-height: 30px;
            padding-top: 21px;
            margin-bottom: 61px;
        }
        img{
            width: 120px;
            margin: 0 auto 47px;
            display: block;

        }
        .btn{
            width: 432px;
            height: 80px;
            /*background: #FF463F;*/
            border-radius: 6px;
            font-size: 30px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #FFFFFF;
            text-align: center;
            line-height: 80px;
            display: block;
            margin: 0 auto 42px;
            transition: .5s background-color;
        }
    }
    .open-download{
        width: 100%;
    }
</style>