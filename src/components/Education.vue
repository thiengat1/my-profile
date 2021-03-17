<!--
 * @Description: 
 * @Author: Lewis
 * @Date: 2021-03-17 17:13:19
 * @LastEditTime: 2021-03-17 18:09:18
 * @LastEditors: Lewis
-->
<template>
  <div class="education-detail" id="education">
    <div class="section-header">
      <h2>Education</h2>
    </div>
    <div class="row education-item">
      <div
        class="col-sm-10 col-md-10 col-lg-10 col-xl-10 education-item-detail"
      >
        <div class="education-time">
          <p>2006</p>
          <p>-</p>
          <p>2011</p>
        </div>
        <h2>BACHELOR DEGREE</h2>
        <p>da nang university of technology, viet nam</p>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Education'
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
.education-item {
  margin-top: 80px;
  display: flex;
  justify-content: center;
  .education-item-detail {
    text-align: center;
    padding: 0 30px 30px;
    background: #fff;
    h2,
    p {
      text-transform: uppercase;
    }
    h2 {
      font-size: 18px !important;
    }
    p {
      font-size: 14px !important;
    }
  }
  .education-time {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #c0a9ea;
    text-transform: uppercase;
    border-radius: 50%;
    border: 10px solid #f1f2f7;
    height: 120px;
    width: 120px;
    text-align: center;
    position: relative;
    top: -50px;
    margin: 0 auto;
    transition: 0.5s;
    p {
      margin: 0;
      font-size: 16px;
      color: #fff;
    }
  }
}
.education-item:hover {
  .education-time {
    transition: 0.5s;
    transform: rotate(-360deg);
    width: 130px;
    height: 130px;
  }
}
</style>
