
const cloudHost = 'https://6a73-jslin-fwqc3-1302163217.tcb.qcloud.la/mps'

const music_config = {
  btnMusicSrc:`${cloudHost}/music_btnClick.mp3?sign=828d2d083ad409eaba6f71ecf1efb63b&t=1590893652`,
  successMusicSrc:`${cloudHost}/music_success.mp3?sign=39a06454773eba02f5cba9f4de56a644&t=1590894565`,
  failMusicSrc:`${cloudHost}/music_fail.mp3?sign=583cdf6de129be7df581900a87e5fe2d&t=1590894622`
}

// 初始化音效
const initMusit = (src) => {
  const innerAudioContext = wx.createInnerAudioContext()
  innerAudioContext.autoplay = false
  innerAudioContext.src = src
  return innerAudioContext
}

// 按钮点击声
const btnMusic = () => initMusit(music_config.btnMusicSrc)

// 成功声
const successMusic = () => initMusit(music_config.successMusicSrc)

// 失败声
const failMusic = () => initMusit(music_config.failMusicSrc)

class Music {
 constructor(){
   this.btnMusic = btnMusic()
   this.successMusic = successMusic()
   this.failMusic = failMusic()
 }
 btnMusicClick(cb){
  this.btnMusic.play()
  if(typeof cb === 'function'){
    this.btnMusic.onEnded(() => cb())
  }
 }
}

export default new Music()
