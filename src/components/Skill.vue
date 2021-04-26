<!--
 * @Description: 技术
 * @Author: Lewis
 * @Date: 2021-03-17 17:13:19
 * @LastEditTime: 2021-04-26 10:58:41
 * @LastEditors: Lewis
-->
<template>
  <div class="skill-container" id="skill">
    <div class="section-header">
      <h2>{{ $t("skills") }}</h2>
    </div>
    <div>
      <div class="row skill-detail">
        <div class="col-sm-10 col-md-10 col-lg-10 col-xl-10 skill-detail-width">
          <div class="col-sm-12 col-md-12 col-lg-3 col-xl-3 skill">
            <h2>{{ $t("programing") }}</h2>
            <ul>
              <li v-for="item in program" :key="item.id">{{ item.name }}</li>
            </ul>
            <h2>{{ $t("frameworks") }}</h2>
            <ul>
              <li v-for="item in frameWork" :key="item.id">{{ item.name }}</li>
            </ul>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-3 col-xl-3 skill">
            <h2>{{ $t("database") }}</h2>
            <ul>
              <li v-for="item in database" :key="item.id">{{ item.name }}</li>
            </ul>
            <h2>{{ $t("versionControl") }}</h2>
            <ul>
              <li v-for="item in versionControl" :key="item.id">
                {{ item.name }}
              </li>
            </ul>
            <h2>{{ $t("ide") }}</h2>
            <ul>
              <li v-for="item in ide" :key="item.id">{{ item.name }}</li>
            </ul>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-3 col-xl-3 skill">
            <h2>{{ $t("language") }}</h2>
            <ul>
              <li v-for="item in foriegnLanguage" :key="item.id">
                {{ item.name }}
              </li>
            </ul>
            <h2>{{ $t("knowledge") }}</h2>
            <ul>
              <li v-for="item in knowledge" :key="item.id">{{ item.name }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skill",
  data() {
    return {
      program: [
        { id: 1, name: "JavaScript" },
        { id: 2, name: "HTML, CSS" },
        { id: 3, name: "PHP" },
        { id: 4, name: "C#. NET" },
      ],
      frameWork: [
        { id: 1, name: "Vue Js/ React Js/ NodeJS" },
        { id: 2, name: "jQuery / Bootstrap / LayUI" },
        { id: 3, name: "PHP-Yii2" },
        { id: 4, name: "Express JS" },
        { id: 5, name: "React Native" },
      ],
      database: [
        { id: 1, name: "MySQL" },
        { id: 2, name: "MongoDB" },
        { id: 3, name: "Oracle" },
      ],
      versionControl: [
        { id: 1, name: "Git (Github)" },
        { id: 2, name: "SVN (TortoiseSVN)" },
        { id: 3, name: "Team Foundation Server" },
      ],
      ide: [
        { id: 1, name: "phpStorm" },
        { id: 2, name: "Visual Code" },
        { id: 3, name: "Microsoft Visual Studio" },
      ],
    };
  },
  computed: {
    knowledge() {
      return [
        { id: 1, name: this.$t("knowledge1") },
        { id: 2, name: this.$t("knowledge2") },
        { id: 3, name: this.$t("knowledge3") },
        { id: 4, name: this.$t("knowledge4") },
        { id: 5, name: this.$t("knowledge5") },
        { id: 6, name: this.$t("knowledge6") },
      ];
    },
    foriegnLanguage() {
      return [
        { id: 1, name: this.$t("chineseLanguage") },
        { id: 2, name: this.$t("englishLanguage") },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
.skill-detail {
  display: flex;
  justify-content: space-evenly;
  .skill-detail-width {
    display: flex;
    justify-content: space-between;
    padding: 0;
    flex-wrap: wrap;
    .skill {
      height: auto;
      background: #fff;
      padding: 30px;
      h2 {
        font-size: 18px;
        font-weight: normal;
        text-transform: uppercase;
        margin-top: 0;
        color: #32323a;
      }
    }
  }
}
.skill-container {
  margin-bottom: 30px;
}
</style>
