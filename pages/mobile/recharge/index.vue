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
              <el-form-item label="手机号码">
                <el-input class="recharge-input" v-model="form.card" placeholder="请输入手机号码"></el-input>
              </el-form-item>
              <el-form-item label="运营商">
                <span>中国移动</span>
              </el-form-item>
              <el-form-item label="充值金额">
                <el-radio-group v-model="form.price">
                  <div class="recharge-radio flex-r">
                    <el-radio :label="20" border>
                      20元
                    </el-radio>
                    <el-radio :label="30" border>
                      30元
                    </el-radio>
                    <el-radio :label="50" border>
                      50元
                    </el-radio>
                    <el-radio :label="100" border>
                      100元
                    </el-radio>
                    <el-radio :label="200" border>
                      200元
                    </el-radio>
                    <el-radio :label="300" border>
                      300元
                    </el-radio>
                  </div>
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
