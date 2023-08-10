<script setup>
import { useWallpaperStore } from '../stores/wallpaper'
import useWallpaper from '../composables/useWallpaper'

const wallpaperStore = useWallpaperStore()
const { updateWallpaperCacheLocation } = useWallpaper()
</script>

<template>
  <div class="p-2">
    <span class="font-bold text-zinc-500 text-sm">Wallpaper Cache Location</span>
    <div class="flex gap-2 mb-2">
      <el-input
        v-model="wallpaperStore.wallpaperCacheLocation"
        placeholder="select wallpaper cache location"
        size="small"
        disabled
      />
      <el-button
        class="bg-zinc-900 duration-300 text-zinc-200 hover:bg-zinc-800"
        @click="updateWallpaperCacheLocation"
        >Select</el-button
      >
    </div>
    <span class="font-bold text-zinc-500 text-sm">Wallpaper Resolution</span>
    <div class="flex flex-col">
      <el-select
        v-model="wallpaperStore.currentSelectedResolutionIndex"
        size="small"
        placeholder="Select"
      >
        <el-option
          v-for="item in wallpaperStore.screenResolution"
          :key="item.resolution"
          :label="item.resolution"
          :value="item.index"
        />
      </el-select>
      <div class="mt-2 text-sm text-gray-400">
        <p>
          <span class="text-red-400 font-bold">须知1：</span
          >当您安装本软件后，如果您不设置壁纸的缓存文件夹，我将为你存到本软件的安装文件夹处；如果您设置了缓存文件夹，但是您手动删除或移动了该文件夹，本软件将弹窗报错，请到本页面进行重新选择缓存文件夹方可继续正常使用。
        </p>
        <p>
          <span class="text-red-400 font-bold">须知2：</span
          >更改后的分辨率配置对已经请求过的数据默认不生效，对即将请求的数据生效，数据API每次请求返回30条，且请求完毕后会不断追加到已经请求的数据缓存中，为了您的使用体验，在你每次启动本应用前，我都会清空已经缓存的壁纸数据但会保留您的软件参数配置数据，同时调用接口重新生成新的随机壁纸数据。
        </p>
        <p>
          <span class="text-red-400 font-bold">代码维护: </span
          >本软件免费使用，如您遇到让您感到困惑的BUG或者想增添新的功能，请随时联系我通过邮箱1099129793@qq.com，我承诺在1小时内紧急修复，由于第三方包的原因，本软件暂支持Windows10、Windows11及MacOS。不要担心，本软件长期维护，作者在以后会用C++自行造wallpaper和状态栏透明的npm轮子。软件现已加入1s防抖处理，国外的服务器响应速度会慢一点，请耐心等待。
        </p>
      </div>
    </div>
  </div>
</template>
