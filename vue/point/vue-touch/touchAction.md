<div class="middle"
              @touchstart.prevent='middleTouchStart'
              @touchmove.prevent='middleTouchMove'
              @touchend='middleTouchEnd'
        >
</div>

```javascript
 created() {
      this.touch = {}
    },
     middleTouchStart(e) {
        this.touch.initiated = true
        const touch = e.touches[0]
        this.touch.startX = touch.pageX
        this.touch.startY = touch.pageY
      },
      middleTouchMove(e) {
        if(!this.touch.initiated) {
          return
        }
        const touch = e.touches[0]
        const deltaX = touch.pageX - this.touch.startX
        const deltaY = touch.pageY - this.touch.startY
        //支持横向滚动
        if(Math.abs(deltaY) > Math.abs(deltaX)) {
          return
        }
        const left = this.currentShow === 'cd' ? 0 : -window.innerWidth
        const offsetWidth = Math.min(0, Math.max(-window.innerWidth,left+deltaX))
        this.touch.percent = Math.abs(offsetWidth / window.innerWidth)
        this.$refs.lyricList.$el.style[transform] = `translate3d(${offsetWidth}px,0,0)`
        this.$refs.lyricList.$el.style[transitionDuration] = 0

        this.$refs.middleL.style.opacity = 1 - this.touch.percent
        this.$refs.middleL.style[transitionDuration] = 0
      },
      middleTouchEnd(e) {
        let offsetWidth
        let opacity
        //从右向左滑
        if(this.currentShow === 'cd') {
          if(this.touch.percent > 0.1) {
            offsetWidth = -window.innerWidth
            opacity = 0
            this.currentShow = 'lyric'
          }else{
            offsetWidth = 0
            opacity = 1
          }
        }else{
          //从左向右滑
          if(this.touch.percent<0.9) {
            offsetWidth = 0
            this.currentShow = 'cd'
            opacity = 1
          }else{
            offsetWidth = - window.innerWidth
            opacity = 0
          }
        }
        const time = 300
         this.$refs.lyricList.$el.style[transform] = `translate3d(${offsetWidth}px,0,0)`
         //添加过渡时间
         this.$refs.lyricList.$el.style[transitionDuration] = `${time}ms`
        this.$refs.middleL.style.opacity= opacity
        this.$refs.middleL.style[transitionDuration] = `${time}ms`
      },
```  

<div class="list-shortcut" @touchstart='onShortcutTouchStart' @touchmove.stop.prevent='onShortcutTouchMove'>
</div>

``` javascript
export default {
  created(){
    this.touch = {}
  },
  methods:{
  onShortcutTouchStart(e) {
      let anchorIndex = getData(e.target,'index')
      let firstTouch = e.touches[0]
      this.touch.y1 = firstTouch.pageY
      this.touch.anchorIndex = anchorIndex
       this._scrollTo(anchorIndex)
    },
    onShortcutTouchMove(e) {
      let firstTouch = e.touches[0]
      this.touch.y2 = firstTouch.pageY
      let dalta = (this.touch.y2 - this.touch.y1) /ANCHOR_HEIGHT | 0
      let anchorIndex = parseInt(this.touch.anchorIndex) + dalta
      this._scrollTo(anchorIndex)
    },
    refresh() {
      this.$refs.listview.refresh()
    },
    scroll(pos) {
      this.scrollY = pos.y
    },
    _scrollTo(index) {
      if(!index && index !==0) {
        return
      }
      if(index<0) {
        index = 0
      }else if(index>this.listHeight.length -2) {
        index = this.listHeight.length
      }
      this.scrollY = -this.listHeight[index]
      this.$refs.listview.scrollToElement(this.$refs.listGroup[index],0)
      //参数0是动画的时间长度
    },
    _calculateHeight() {
      this.listHeight = []
      const list = this.$refs.listGroup
      let height = 0
      this.listHeight.push(height)
      for(let i=0; i< list.length; i++) {
        let item = list[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    },
  }
}
```  

<div class="progress-btn-wrapper" ref="progressBtn"
           @touchstart.prevent="progressTouchStart"
           @touchmove.prevent="progressTouchMove"
           @touchend="progressTouchEnd"
      >
</div>  

```javascript
export default {
     created() {
      this.touch = {}
    },
    methods: {
      progressTouchStart(e) {
        this.touch.initiated = true
        this.touch.startX = e.touches[0].pageX
        this.touch.left = this.$refs.progress.clientWidth
      },
      progressTouchMove(e) {
        if (!this.touch.initiated) {
          return
        }
        const deltaX = e.touches[0].pageX - this.touch.startX
        const offsetWidth = Math.min(this.$refs.progressBar.clientWidth - progressBtnWidth, Math.max(0, this.touch.left + deltaX))
        this._offset(offsetWidth)
      },
      progressTouchEnd() {
        this.touch.initiated = false
        this._triggerPercent()
      },
      progressClick(e) {
        const rect = this.$refs.progressBar.getBoundingClientRect()
        const offsetWidth = e.pageX - rect.left
        this._offset(offsetWidth)
        // 这里当我们点击 progressBtn 的时候，e.offsetX 获取不对
        // this._offset(e.offsetX)
        this._triggerPercent()
      },
      _triggerPercent() {
        const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
        const percent = this.$refs.progress.clientWidth / barWidth
        this.$emit('percentChange', percent)
      },
      _offset(offsetWidth) {
        this.$refs.progress.style.width = `${offsetWidth}px`
        this.$refs.progressBtn.style[transform] = `translate3d(${offsetWidth}px,0,0)`
      }
    },
     watch: {
      percent(newPercent) {
        if (newPercent >= 0 && !this.touch.initiated) {
          const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
          const offsetWidth = newPercent * barWidth
          this._offset(offsetWidth)
        }
      }
    }
  }
}
```  
