<!--
 * @Description: 经验
 * @Author: Lewis
 * @Date: 2021-03-17 17:13:19
 * @LastEditTime: 2021-04-21 17:03:15
 * @LastEditors: Lewis
-->
<template>
  <div class="experience-container" id="experience">
    <div class="section-header">
      <h2>{{ $t("Experiences") }}</h2>
    </div>
    <div class="row experience-detail">
      <div class="col-sm-10 col-md-10 col-lg-10 col-xl-10 experience">
        <div class="row">
          <div
            class="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 name-designation"
          >
            <h3 class="designation">{{ $t("positionCurrent") }}</h3>
            <p class="name-of-org">
              {{ $t("companyCurrent") }}
            </p>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-2 col-xl-2">
            <div class="stay-time stay-time-color">
              <p>12/2018</p>
              <p>-</p>
              <p>{{ $t("present") }}</p>
            </div>
          </div>
          <div
            class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 experience-sum"
          >
            <ul>
              <li v-for="item in experience2" :key="item.id">
                <span>{{ item.title }}</span
                >{{ item.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-sm-10 col-md-10 col-lg-10 col-xl-10 experience">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-3 col-xl-3 name-designation">
            <h3 class="designation">{{ $t("position1") }}</h3>
            <p class="name-of-org">{{ $t("company1") }}</p>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-2 col-xl-2">
            <div class="stay-time">
              <p>01/2013</p>
              <p>-</p>
              <p>11/2018</p>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 experience-sum">
            <span>{{ $t("Responsibilities") }}</span>
            <ul>
              <li v-for="item in experience1" :key="item.id">
                {{ item.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Experiences",
  data() {
    return {};
  },
  computed: {
    experience1() {
      return [
        { id: 1, name: this.$t("experience1Content1") },
        { id: 2, name: this.$t("experience1Content2") },
        { id: 3, name: this.$t("experience1Content3") },
        { id: 4, name: this.$t("experience1Content4") },
        { id: 5, name: this.$t("experience1Content5") },
        { id: 6, name: this.$t("experience1Content6") },
        { id: 7, name: this.$t("experience1Content7") },
      ];
    },
    experience2() {
      return [
        {
          id: 1,
          title: this.$t("experience2Title1"),
          name: this.$t("experience2Content1"),
        },
        {
          id: 2,
          title: this.$t("experience2Title2"),
          name: this.$t("experience2Content2"),
        },
        {
          id: 3,
          title: this.$t("experience2Title3"),
          name: this.$t("experience2Content3"),
        },
        {
          id: 4,
          title: this.$t("experience2Title4"),
          name: this.$t("experience2Content4"),
        },
        {
          id: 5,
          title: this.$t("experience2Title5"),
          name: this.$t("experience2Content5"),
        },
        {
          id: 6,
          title: this.$t("experience2Title6"),
          name: this.$t("experience2Content6"),
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";

.experience-detail {
  display: flex;
  justify-content: center;

  .experience {
    height: auto;
    background: #fff;
    margin-bottom: 30px;
    padding: 30px;

    .stay-time {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #ffdf7c;
      text-transform: uppercase;
      border-radius: 50%;
      border: 10px solid #f1f2f7;
      height: 145px;
      width: 145px;
      text-align: center;
      top: -60px;
      margin: 17px auto;
      transition: 0.5s;
      p {
        margin: 0;
        font-size: 16px;
        font-weight: 400;
        color: #fff;
      }
    }
    .stay-time-color {
      background: #c0a9ea;
    }
    .name-designation {
      width: 30%;
      text-align: right;
      padding-right: 45px;
    }
    .designation {
      color: #32323a;
      margin: 0;
      margin-bottom: 15px;
      font-size: 18px;
      font-weight: 400;
      text-transform: uppercase;
    }
    .name-of-org {
      font-size: 14px;
      color: #808080;
      text-transform: uppercase;
    }
  }
}
@media (min-width: 992px) {
  .experience {
    .stay-time {
      position: relative;
      left: auto;
      top: auto;
      margin: 17px auto;
    }
  }
}
@media (max-width: 992px) {
  .name-designation {
    text-align: center !important;
    width: 100% !important;
  }
}
.experience:hover {
  .stay-time {
    transition: 0.5s;
    transform: rotate(-360deg);
    width: 155px;
    height: 155px;
  }
}
.experience-sum {
  span {
    font-weight: bold;
  }
}
</style>
