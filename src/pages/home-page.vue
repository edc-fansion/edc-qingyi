<template>
  <div class="home-content" style="height: 100vh;">
    <div style="display: flex;flex-direction: column;color: white; align-items: center; height: 100%;" >
      <div style="margin-top: 200px;cursor:pointer;" @click="navigateHome">
        <img src="../assets/images/avatar.jpg" style="height: 100px;width: 100px;border-radius: 100%;border: 1px solid white;">
      </div>
      <div style="font-size: 30px;font-weight: 500;margin-top: 10px;">
        青衣茯苓
      </div>
      <div style="color: #CCCCCC;font-size: 20px;font-weight: 300;margin-top: 20px;margin-bottom: 20px;">
        个人技术博客
      </div>
      <div style="height: 1px;background-color: #5B5F71;width: 300px;margin-bottom: 20px;"></div>
      <div style="font-size: 16px;">
        您好！我是青衣，目前是一名前端开发者！
      </div>
      <div style="height: 1px;background-color: #5B5F71;width: 100px;margin-top: 20px; margin-bottom: 20px;"></div>
      <div>
        主要记录一些个人在开发中遇到的问题以及对编程技术的学习，欢迎了解更多！
      </div>
      <div style="display: flex;margin-top: 50px;">
        <div style="width: 60px;height: 30px;cursor:pointer; border: 1px solid white; border-radius: 15px;line-height: 30px;text-align: center;margin-right: 10px;">
          博客
        </div>
        <div style="width: 60px;height: 30px;cursor:pointer; border: 1px solid white; border-radius: 15px;line-height: 30px;text-align: center;">
          <a href="https://github.com/edc-fansion" title="个人代码" target="_blank" style="text-decoration: none;color: white;">
            Git
          </a>
        </div>
      </div>
      <div style="margin-top: 60px;display: flex;align-items: center;" >
        <a href="mailto:edc_qingyi@163.com" target="_blank" title="Contact me" style="margin-right: 30px; text-decoration: none;color: white;">
          <span class="icon iconfont icon-youxiang01" style="cursor:pointer; font-size: 30px;"></span>
        </a>
        <a href="https://github.com/edc-fansion" title="青衣茯苓的Github" target="_blank" style="text-decoration: none;color: white;">
          <span class="icon iconfont icon-githublogo" style="cursor:pointer; font-size: 30px;"></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home",
    data () {
      return {
        
      }
    },
    methods:{
      navigateHome(){
        console.log("查看主页")
      },
    },
  }
</script>

<style>
  html, body {
    background-image: url(../assets/images/blog.jpg);
    background-repeat: no-repeat;
    background-size: cover;
  }
  * {
    padding: 0px 0px;
    margin: 0px 0px;
  }
</style>
