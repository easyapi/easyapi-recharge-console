<template>
  <div class='container'>
    <Header></Header>
    <div :class="showHeader ? 'content' : 'contents'">
      <Aside></Aside>
      <div :class="showSidebar ? 'main' : 'main-left main'">
        <div class='main-title'>
          <div class='main-title_top'>
            <b>在线充值</b>
          </div>
        </div>
        <div class='mg-tp-20'>
          <div class="main-content">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item>
                <div class="recharge-company">
                  <el-radio-group v-model="form.company">
                    <el-radio :label="1" border>
                      <img :src="sinopecUrl">
                      <img :class="form.company==1?'active':''" class="pick-img" :src="pickUrl">
                    </el-radio>
                    <el-radio :label="2" border>
                      <img :src="petroChinaUrl">
                      <img :class="form.company==2?'active':''" class="pick-img" :src="pickUrl">
                    </el-radio>
                  </el-radio-group>
                </div>
              </el-form-item>
              <el-form-item label="加油卡号">
                <el-input class="recharge-input" v-model="form.card" placeholder="请输入16位石油加油卡卡号"></el-input>
              </el-form-item>
              <el-form-item label="充值金额">
                <el-radio-group v-model="form.price">
                  <el-radio :label="200" border>
                  </el-radio>
                  <el-radio :label="300" border>
                  </el-radio>
                  <el-radio :label="500" border>
                  </el-radio>
                  <el-radio :label="1000" border>
                  </el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="接口价格">
                <span class="discounts">199.0</span>
                <span class="original">200.0元</span>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">充值支付</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Index from './index'

  export default Index
</script>
