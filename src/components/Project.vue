<!--
 * @Description: 转案
 * @Author: Lewis
 * @Date: 2021-04-21 15:32:52
 * @LastEditTime: 2021-04-26 14:43:30
 * @LastEditors: Lewis
-->
<template>
  <div class="project-container" id="project">
    <div class="section-header">
      <h2>{{ $t("project") }}</h2>
    </div>
    <div>
      <div class="row project-detail">
        <div
          class="col-sm-10 col-md-10 col-lg-10 col-xl-10 project-detail--width"
        >
          <div
            class="col-sm-12 col-md-12 col-lg-3 col-xl-3 project"
            v-for="project in projectOptions"
            :key="project.id"
          >
            <h2>{{ project.title }}</h2>
    
       
            <li class="text-style">{{ $t("projectAddress") }}:
              <a @click="openLink(project.address)">{{ project.address }}</a>
            </li>
            <li class="text-style">{{ $t("technology") }}:
              <span>{{ project.technology }}</span>
            </li>
            <li class="text-style">{{ $t("projectDescription") }}:
              <span>{{project.description}}</span>
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  computed: {
    projectOptions() {
      return [
        {
          id: 1,
          title: this.$t("projectTitle1"),
          address: "http://nvthienvuemovie.herokuapp.com/",
          description: this.$t("projectDescription1"),
          technology: "Vue Js 3",
        },
        {
          id: 1,
          title: this.$t("projectTitle2"),
          address: "http://nvthienchatapp.herokuapp.com/",
          description: this.$t("projectDescription2"),
          technology:  "Vue Js 3, Firebase",
        },
        {
          id: 1,
          title: this.$t("projectTitle3"),
          address: "http://tomcuabauca.herokuapp.com/",
          description: this.$t("projectDescription3"),
          technology:  "Vue Js 2",
        },
      ];
    },
  },
  methods:{
    openLink(link){
      window.open(link)

    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
.project-detail {
  display: flex;
  justify-content: space-evenly;
  &--width {
    padding: 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .project {
    height: auto;
    background: #fff;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    h2 {
      font-size: 18px;
      font-weight: bold;
      text-transform: uppercase;
      text-align: center;
      margin-top: 0;
      color: #32323a;
    }
    .text-style{
      font-weight: 400;
      span{
          font-weight: normal;
      }
    }
    li a{
      color: blue;
      cursor: pointer;
      &:hover{
        color: blueviolet;
      }
    }
   
  }
}
.project-container {
  margin-bottom: 30px;
}
</style>
