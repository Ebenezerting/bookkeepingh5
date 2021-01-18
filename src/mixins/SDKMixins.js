import { setPlayerGame } from '../lib/cache';

export const SDKMixins = {
  data(){
    return {
      system: null,
      userData:{},
      nativeAdType: false,
      nativeAdModalButtonType: true
    }
  },
  created() {
    let vm = this
    vm.detect()
  },
  methods: {
    detect(){
      let vm = this
      let equipmentType = "";
      let agent = navigator.userAgent.toLowerCase();
      let android = agent.indexOf("android");
      let iphone = agent.indexOf("iphone");
      let ipad = agent.indexOf("ipad");
      if(android !== -1){
        equipmentType = "android";
      }
      if(iphone !== -1 || ipad !== -1){
        equipmentType = "iOS";
      }
      vm.system = equipmentType
    },
    shareWechart(){
      let vm = this
      let params = {
        funcName: 'shareWechart',
      }
      params = JSON.stringify(params)
      if(vm.system === 'iOS'){
        if(window.webkit&&window.webkit.messageHandlers){
          window.webkit.messageHandlers.gameFunc.postMessage(params);
        }
      }else if(vm.system === 'android'){
        if(window.adcdnGame){
          window.adcdnGame.gameFunc(params)
        }
      }
    }
  },
  destroyed: function() {

  }
};
