<!--
 * @Description: 个人介绍
 * @Author: Lewis
 * @Date: 2021-03-17 17:13:19
 * @LastEditTime: 2021-04-21 17:05:04
 * @LastEditors: Lewis
-->

<template>
  <div class="about-container" id="about">
    <div class="section-header">
      <h2>{{ $t("aboutMe") }}</h2>
    </div>
    <div class="about-body-container">
      <div class="row about-body">
        <div class="col-sm-12 col-md-12 col-lg-3 col-xl-3 my-image">
          <img src="../assets/myimage.jpg" width="50%" height="50%" />
        </div>
        <div class="col-sm-12 col-md-12 col-lg-5 col-xl-5 my-summary">
          <div class="summary-detail">
            <h2>{{ $t("summary") }}</h2>
            <p v-for="item in summary" :key="item.id">{{ item.content }}</p>

            <div style="display: flex;">
              <div class="my-cv english-cv">
                <a :href="`${publicPath}nguyenvanthien_profile_en.pdf`" download
                  ><img
                    src="../assets/download.png"
                    width="30"
                    height="30"
                  /><span>{{$t('myEnglishCv')}}</span></a
                >
              </div>
              <div class="my-cv chinese-cv">
                <a :href="`${publicPath}个人简历_阮文善.pdf`" download
                  ><img
                    src="../assets/download.png"
                    width="30"
                    height="30"
                  /><span>{{$t('myChineseCv')}}</span></a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-3 col-xl-3 my-contact">
          <div class="contact-detail">
            <h2>{{$t('contactInfo')}}</h2>
            <ul class="contact-list">
              <li v-for="contact in contacts" :key="contact.id">
                <img
                  :src="require(`../assets/${contact.image}.png`)"
                  width="20"
                  height="20"
                />
                <a v-if="contact.link" :href="contact.link">
                  <span>{{ contact.name }}</span>
                </a>
                <span v-else>{{ contact.name }}</span>
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
  name: "AboutMe",
  data() {
    return {
      publicPath: process.env.BASE_URL,

      contacts: [
        {
          id: 1,
          name: "Thanh Pho Vinh - Nghe An",
          image: "location",
          link: "",
        },
        {
          id: 2,
          name: "+84983839572",
          image: "phone",
          link: "",
        },
        {
          id: 3,
          name: "thiengat1@gmail.com",
          image: "mail",
          link: "https://mail.google.com/mail/u/0/#inbox",
        },
        {
          id: 4,
          name: "https://nguyenvanthien.herokuapp.com",
          image: "web",
          link: "https://nguyenvanthien.herokuapp.com/",
        },
      ],
    };
  },
  computed: {
    summary() {
      return [
        {
          id: 1,
          content: this.$t("content1"),
        },
        {
          id: 2,
          content: this.$t("content2"),
        },
        {
          id: 3,
          content: this.$t("content3"),
        },
        {
          id: 4,
          content: this.$t("content4"),
        },
      ];
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
.about-body {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 40px;
  .my-image {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    background: #ffffff;
    padding: 12px;
  }
  .my-summary {
    height: auto;
    background: #ffffff;
    padding: 40px;
    .my-cv {
      margin-top: 40px;
      width: 150px;
      height: 35px;
      background: #16a085;
      border-radius: 4px;
      color: #fff;
      text-transform: uppercase;
      border: 1px solid transparent;
      font-weight: bold;
      a {
        text-decoration: none;
        color: #fff;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }
      img {
        transition: 0.5s;
      }
    }
    .my-cv:hover {
      background: #1fb5ac;
      img {
        transition: 0.5s;
        transform: rotateX(-360deg);
      }
    }
  }
  .my-contact {
    height: auto;
    background: #ffffff;
    padding: 40px;

    .contact-list {
      list-style-type: none;
      padding: 0;
      li {
        list-style: none;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        a {
          text-decoration: none;
          color: #8c8c8c;
        }
        img {
          margin-right: 15px;
        }
      }
    }
  }
  h2 {
    font-size: 18px;
    font-weight: 400;
    text-transform: uppercase;
    color: #32323a;
    margin-top: 0;
    margin-bottom: 30px;
  }
  .chinese-cv {
    margin-left: 10px;
  }
}
</style>
