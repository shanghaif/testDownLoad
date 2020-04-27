<template>
    <view class="content">
        <map class="map" id="map1" ref="map1"></map>
        <scroll-view class="scrollview" scroll-y="true"></scroll-view>

        <button type="primary" @tap="chooseImage">扫码</button>
    </view>
</template>

<script>
    module.exports = {
        onReady() {
            this.map = uni.createMapContext("map1", this);
        },
        methods: {
            chooseImage: async function () {
                uni.chooseImage({
                    count: 6, //默认9
                    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
                    sourceType: ['camera','album'], //从相册选择
                    success: function (res) {
                        console.log(JSON.stringify(res.tempFilePaths));
                    }
                });
            }
        }
    }
</script>

<style>
    .content {
        flex: 1;
        ;
    }

    .map {
        width: 750rpx;
        height: 250px;
        background-color: #f0f0f0;
    }

    .scrollview {
        flex: 1;
        padding: 10px;
    }
</style>
