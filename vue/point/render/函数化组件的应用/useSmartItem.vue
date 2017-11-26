<template>
    <div>
        <smart-item :data='data'></smart-item>
        <button @click="change('img')">切换为图片组件</button>
        <button @click="change('video')">切换为视频组件</button>
        <button @click="change('text')">切换为纯文本组件</button>
    </div>
</template>

<script>
    import SmartItem from './smartItem';
    export default{
        data() {
            return{
                data:{}
              }
            },
        methods:{
            change(type) {
                if(type==='img') {
                    this.data = {
                        type: 'img',
                        url: 'https://raw.githubusercontent.com/iview/iview/master/assets/logo.png'
                    }
                }else if(type === 'video' ) {
                    this.data = {
                        type: 'video',
                        url: 'http:vjs.zencdn.net/v/oceans.mp4'
                    }
                }else if(type==='text'){
                    this.data = {
                        type: 'text',
                        content: 'this is plain text.'
                    }
                }
            }
        },
        created(){
            this.change('img');
        },
        components: {
         SmartItem
            }
    }
</script>