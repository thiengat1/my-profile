<template>
  <div>
    <input type="checkbox" id="check" />

    <div class="sidebar">
      <label for="check">
        <div id="sidebars-button">
          <img src="../assets/menu-bars.png" width="40" height="40" />
        </div>
      </label>
      <div class="sidebar-header">
        <img src="../assets/medium.png" width="38" height="30" />
        <a href=""><h2>ThienNV</h2></a>
      </div>
      <div class="sidebar-menu"> 
        <a class="menu-item" :href="menu.link" v-for="menu in menuList" :key="menu.id"
          ><img :src="require(`../assets/${menu.image}${menu.image==='about'?'.jpg':'.png'}`)" width="20" height="20" /><span
            >{{menu.name}}</span
          ></a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Navbar',
  data(){
    return{
        menuList: [
        {
          id: 1,
          name: "Home",
          image: "home",
          link: "#home",
        },
        {
          id: 2,
          name: "About",
          image: "about",
          link: "#about",
        },
        {
          id: 3,
          name: "Skill",
          image: "skill",
          link: "#skill",
        },
        {
          id: 4,
          name: "Experience",
          image: "experience",
          link: "#experience",
        },
         {
          id: 5,
          name: "Education",
          image: "education",
          link: "#education",
        },
      ],
    }
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  background: #2f323a;
  position: fixed;
  left: -220px;
  width: 220px;
  height: 100%;
  z-index: 1;
  transition: 0.5s;
  .sidebar-menu {
    a {
      color: #fff;
      display: block;
      width: 100%;
      line-height: 60px;
      text-decoration: none;
      padding-left: 30px;
      box-sizing: border-box;
      border-bottom: 1px solid #3c3c44;
      transition: 0.5s;
      transition-property: background;
      span {
        text-transform: uppercase;
        font-size: 14px;
      }
    }
    a:hover {
      background: #19b3d3;
    }
  }
  h2 {
    font-size: 22px !important;
    margin: 0;
  }

  .sidebar-header {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    h2 {
      font-weight: bold;
      text-transform: uppercase;
      margin-left: 10px;
      color: #fff;
    }
    img {
      margin-left: 5px;
    }
    a {
      text-decoration: none;
    }
  }
}
#check:checked ~ .sidebar {
  left: 0;
  transition: 0.5s;
  #sidebars-button {
    top: 6px;
    left: 160px;
    border: 0;
    transition: 0.5s;
  }
}
label #sidebars-button {
  z-index: 1;
  position: fixed;
  cursor: pointer;
  left: 0px;
  top: 100px;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transition: 0.5s;
}
#sidebars-button {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2f323a;
}
#check {
  display: none;
}
.menu-item {
  display: flex;
  img {
    margin-right: 20px;
    margin-bottom: 5px;
  }
}
</style>
