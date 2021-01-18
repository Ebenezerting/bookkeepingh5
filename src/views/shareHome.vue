<template>
    <div class="share-bar">
        <div class="wrapper" ref="wrapper">
            <div class="share-bar-content">
                <p class="share-title">邀请1位好友=获得1000金币 =1元</p>
                <div class="share-btn">
                    马上去邀请好友
                </div>
                <div :class="{
                    'turntable-Winning-list-bar': true,
                    'none': userHistoryList.length === 0
                }">
                    <h3><span></span>已成功邀请好友<p>（{{userHistoryList.length}}人）</p><span></span></h3>
                    <div v-if="userHistoryList.length !=0">
                        <div class="turntable-Winning-list-table">
                            <van-row class="prizeHeader">
                                <van-col class="prizeLeft" span="8">
                                    <span>时间</span>
                                </van-col>
                                <van-col span="8">
                                    <span>昵称</span>
                                </van-col>
                                <van-col class="prizeRight" span="8">奖励</van-col>
                            </van-row>
                            <van-row class="turntable-Winning-list-tr" v-for="(item,index) in userHistoryList.slice(0,4)" :key="index">
                                <van-col style="text-align:left;" span="8" class="turntable-Winning-list-tr-name">
                                    <span >{{item.time}}</span>
                                </van-col>
                                <van-col span="8">
                                    <span class="prizeClass">{{item.name}}</span>
                                </van-col>
                                <van-col style="text-align:right;" span="8">{{item.gold}}</van-col>
                            </van-row>
                            <a class="table-more" @click="showModal">查看更多</a>
                        </div>
                    </div>
                    <div v-else class="share-none-bar">
                        <img src="../assets/share-none-icon.png">
                        <p>哎呀，还没有半个好友呢！要加油啦~</p>
                    </div>
                </div>
                <div class="rule-bar">
                    <h3 class="rule-title">活动规则</h3>
                    <p>1、点击分享按钮即可分享给好友进行下载。<br/>
                        2、被邀请好友下载注册后，在个人中心输入邀请码即算邀请成功。<br/>
                        3、邀请成功奖励：<br/>
                        第一步：每成功邀请一个好友既可获得500金币。每天封顶10个好友，超过后不再获得奖励。<br/>
                        第二步：被邀请好友记账满3天时，双方各得500金币。<br/>
                        4、金币每天自动按比例转化成可以提现现金。<br/>
                        5、记账精灵拥有对本活动的最终解释权；<br/>
                    </p>
                </div>
            </div>
        </div>
        <van-popup v-model="show">
            <div class="share-modal-bar">
                <img class="share-modal-close" @click="show=false" src="../assets/share-modal-close.png" alt="">
                <h3><span></span>已成功邀请好友<p>（{{userHistoryList.length}}人）</p><span></span></h3>
                <div class="turntable-Winning-list-table">
                    <van-row class="prizeHeader">
                        <van-col class="prizeLeft" span="9">
                            <span>时间</span>
                        </van-col>
                        <van-col span="7">
                            <span>昵称</span>
                        </van-col>
                        <van-col class="prizeRight" span="8">奖励</van-col>
                    </van-row>
                    <div class="wrapper2-bar">
                        <div class="wrapper2" ref="wrapper2">
                            <div style="min-height: 101%">
                                <van-row class="turntable-Winning-list-tr" v-for="(item,index) in userHistoryList" :key="index">
                                    <van-col style="text-align:left;" span="9" class="turntable-Winning-list-tr-name">
                                        <span >{{item.time}}</span>
                                    </van-col>
                                    <van-col span="7">
                                        <span class="prizeClass">{{item.name}}</span>
                                    </van-col>
                                    <van-col style="text-align:right;" span="8">{{item.gold}}</van-col>
                                </van-row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </van-popup>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import { Row, Col, Popup} from 'vant'
    import {SDKMixins} from "../mixins/SDKMixins";

    export default {
        name: 'share',
        data(){
            return {
                userHistoryList: [
                    {
                    time: '2020-12-11',
                    name: '测试人员111',
                    gold: '1000',
                },{
                    time: '2020-12-11',
                    name: '测试人员111',
                    gold: '1000',
                },{
                    time: '2020-12-11',
                    name: '测试人员111',
                    gold: '1000',
                },{
                    time: '2020-12-11',
                    name: '测试人员111',
                    gold: '1000',
                },{
                    time: '2020-12-11',
                    name: '测试人员111',
                    gold: '1000',
                },{
                    time: '2020-12-11',
                    name: '测试人员111',
                    gold: '1000',
                },{
                    time: '2020-12-11',
                    name: '测试人员111',
                    gold: '1000',
                },{
                    time: '2020-12-11',
                    name: '测试人员111',
                    gold: '1000',
                },{
                    time: '2020-12-11',
                    name: '测试人员111',
                    gold: '1000',
                },{
                    time: '2020-12-11',
                    name: '测试人员111',
                    gold: '1000',
                },{
                    time: '2020-12-11',
                    name: '测试人员111',
                    gold: '1000',
                },{
                    time: '2020-12-11',
                    name: '测试人员111',
                    gold: '1000',
                },{
                    time: '2020-12-11',
                    name: '测试人员111',
                    gold: '1000',
                },{
                    time: '2020-12-11',
                    name: '测试人员111',
                    gold: '1000',
                },{
                    time: '2020-12-11',
                    name: '测试人员111',
                    gold: '1000',
                },{
                    time: '2020-12-11',
                    name: '测试人员111',
                    gold: '1000',
                },{
                    time: '2020-12-11',
                    name: '测试人员111',
                    gold: '1000',
                },{
                    time: '2020-12-11',
                    name: '测试人员111',
                    gold: '1000',
                },{
                    time: '2020-12-11',
                    name: '测试人员111',
                    gold: '1000',
                }],
                // userHistoryList: [],
                show: false
            }
        },
        mixins:[SDKMixins],
        components: {
            'van-col': Col,
            'van-row': Row,
            'van-popup': Popup
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
            showModal(){
                let vm = this
                vm.show = true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .share-bar {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
    }
    .wrapper2-bar{
        position: absolute;
        overflow: hidden;
        z-index: 1;
        top: 172px;
        bottom: 34px;
        width:622px;
    }
    .wrapper2{
        position: absolute;
        overflow-y: scroll;
        z-index: 1;
        width: 100%;
        height: 100%;
    }
    .wrapper{
        width: 100%;
        height: 100%;
        position: absolute;
        overflow: hidden;
        z-index: 1;
        background-image: linear-gradient( #ffa64f 0%,#ff443e 800px, #ff443e 100%);
    }
    .share-bar-content{
        background: url("../assets/shate-title-img.png") no-repeat center -20px;
        min-height: 101%;
        background-size: 100%;
        padding-top: 797px;
        padding-bottom: 32px;
        .share-title{
            position: absolute;
            top: 261px;
            height: 45px;
            font-size: 32px;
            font-family: PingFangSC-Heavy, PingFang SC;
            font-weight: 800;
            color: #FFFFFF;
            line-height: 45px;
            text-align: center;
            left: 0;
            right: 0;
        }
    }
    .share-btn{
        width: 577px;
        height: 111px;
        line-height: 111px;
        background: linear-gradient(180deg, #FFF9A6 0%, #FFE267 99%);
        box-shadow: 0px 12px 0px 0px #DA0002, 0px 1px 0px 0px rgba(255, 255, 255, 0.5);
        border-radius: 56px;
        margin: 0 auto;
        font-size: 44px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #BF2E04;
        animation-duration: .8s; // 一个完整动画的持续时间
        animation-iteration-count: infinite; // 动画循环次数：无限循环
        animation-name: heart-bounce; // 调用的动画名，对应上面的 .heart-bounce
    }

    .turntable-Winning-list-bar{
        width: 686px;
        height: 696px;
        background:rgba(255,255,255,1);
        border-radius: 8px;
        margin: 96px auto 32px;
        text-align: center;
        &.none{
            height: 425px;
        }
        h3{
            font-size: 36px;
            font-weight: normal;/**500**/
            color:rgba(51,51,51,1);
            line-height: 36px;
            padding-top: 48px;
            margin-bottom: 24px;
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
        .turntable-Winning-list-table{
            width:622px;
            margin: 0 auto;
            .turntable-Winning-list-title{
                width:622px;
                height:64px;
                background:rgba(255,149,49,1);
                border-radius:4px;
                color: #fff;
                box-sizing: border-box;
                .turntable-Winning-list-title-tr{
                    display: flex;
                    align-items: center;
                    padding: 0 24px;
                    width:622px;
                    height:64px;
                    box-sizing: border-box;
                }
                .turntable-Winning-list-title-td{
                    font-size:28px;
                    font-weight: normal;/**500**/
                    &:first-child{
                        width: 120px;
                        color:rgba(255,255,255,1);
                        margin-right: 156px;
                    }
                    &:last-child{
                        margin-left: 186px;
                    }
                }
            }
            .turntable-Winning-list-tr{
                width: 622px;
                height: 88px;
                line-height: 88px;
                color:rgba(102,102,102,1);
                font-size:26px;
                font-family:PingFangSC-Regular,PingFang SC;
                box-sizing: border-box;
                padding: 0 24px;
                display: flex;
                &:nth-child(2n+1)
                {
                    background:rgba(255,236,214,1);
                }
            }
            .turntable-Winning-list-tr-name{
                span{
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                    width: 100%;
                    display: block;
                }
            }
            .turntable-Winning-list-td{
                height:88px;
                line-height:88px;
                color: #666;
                font-size:26px;
                width: 80px;
                &:first-child{
                    width: 200px;
                    text-align: left;
                    font-size:26px;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                    margin-right: 74px;
                }
                &:last-child{
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                    width: 200px;
                    margin-left: 20px;
                    text-align: right;
                    color: #333333;
                }
            }
        }
    }

    .prizeHeader {
        width:622px;
        height:64px;
        line-height:64px;
        font-size:30px;
        color:rgba(255,255,255,1);
        font-family:PingFangSC-Regular,PingFang SC;
        background:rgba(255,149,49,1);
        border-radius:4px;
        .prizeLeft {
            text-align:left;
            padding-left:24px;
        }
        .prizeRight {
            text-align:right;
            padding-right:24px;
        }
    }
    .prizeClass {
        margin-left:20px;
    }
    .table-more{
        width: 112px;
        height: 40px;
        font-size: 28px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FF1818;
        line-height: 40px;
        display: block;
        margin: 52px auto 0;
    }

    .share-none-bar{
        img{
            width: 152px;
            margin-top: 19px;
            margin-bottom: 40px;
        }
        p{
            font-size: 30px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #666666;
        }
    }

    .rule-bar{
        width: 686px;
        height: 745px;
        background: #FFFFFF;
        border-radius: 8px;
        padding: 82px 32px 0;
        margin: 72px 32px 0px;
        position: relative;
        text-align: left;
        .rule-title{
            text-align: center;
            position: absolute;
            left: 50%;
            top: -40px;
            margin-left: -131px;
            width: 262px;
            height: 80px;
            background: linear-gradient(158deg, #FFEA85 0%, #FFE36A 100%);
            border-radius: 40px;
            font-size: 36px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #BF2E04;
            line-height: 80px;
        }
        p{
            font-size: 30px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #666666;
            line-height: 56px;
        }
    }

    .share-modal-bar{
        width: 686px;
        height: 900px;
        .share-modal-close{
            position: absolute;
            width: 52px;
            height: 52px;
            right: 0;
            top: -80px;
        }
        h3{
            font-size: 36px;
            font-weight: normal;/**500**/
            color:rgba(51,51,51,1);
            line-height: 36px;
            padding-top: 48px;
            margin-bottom: 24px;
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
        .turntable-Winning-list-table{
            width:622px;
            margin: 0 auto;
            .turntable-Winning-list-title{
                width:622px;
                height:64px;
                background:rgba(255,149,49,1);
                border-radius:4px;
                color: #fff;
                box-sizing: border-box;
                .turntable-Winning-list-title-tr{
                    display: flex;
                    align-items: center;
                    padding: 0 24px;
                    width:622px;
                    height:64px;
                    box-sizing: border-box;
                }
                .turntable-Winning-list-title-td{
                    font-size:28px;
                    font-weight: normal;/**500**/
                    &:first-child{
                        width: 120px;
                        color:rgba(255,255,255,1);
                        margin-right: 156px;
                    }
                    &:last-child{
                        margin-left: 186px;
                    }
                }
            }
            .turntable-Winning-list-tr{
                width: 622px;
                height: 88px;
                line-height: 88px;
                color:rgba(102,102,102,1);
                font-size:26px;
                font-family:PingFangSC-Regular,PingFang SC;
                box-sizing: border-box;
                padding: 0 24px;
                display: flex;
                &:nth-child(2n+1)
                {
                    background:rgba(255,236,214,1);
                }
            }
            .turntable-Winning-list-tr-name{
                span{
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                    width: 100%;
                    display: block;
                }
            }
            .turntable-Winning-list-td{
                height:88px;
                line-height:88px;
                color: #666;
                font-size:26px;
                width: 80px;
                &:first-child{
                    width: 200px;
                    text-align: left;
                    font-size:26px;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                    margin-right: 74px;
                }
                &:last-child{
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                    width: 200px;
                    margin-left: 20px;
                    text-align: right;
                    color: #333333;
                }
            }
        }
    }

    @-webkit-keyframes heart-bounce {
        from {transform: scale(1); }
        20% {transform: scale(1.1); }
        35% {transform: scale(1); }
        50% {transform: scale(1.1); }
        65% {transform: scale(1); }
        80% {transform: scale(1); }
        to {transform: scale(1); }
    }
    @keyframes heart-bounce {
        from {transform: scale(1); }
        20% {transform: scale(1.1); }
        35% {transform: scale(1); }
        50% {transform: scale(1.1); }
        65% {transform: scale(1); }
        80% {transform: scale(1); }
        to {transform: scale(1); }
    }
</style>