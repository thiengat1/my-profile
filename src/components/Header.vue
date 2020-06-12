<template>
    <div class="header-container" id="home">
        <div class="container">
            <div class="site-title">
                <h1 class="site-name">i'm nguyen van thien</h1>
            </div>
            <div class="site-slogan">
                <h3 class="site-slogan-name">a frontend developer</h3>
            </div>
            <div class="social-link">
                <ul class="social-menu">
                    <li class="social-icon">
                            <a href="https://www.facebook.com/thien.nguyenvan.353">
                                <img src="../assets/facebook.png" width="30" height="30"/>
                                <span>Facebook</span>
                            </a>
                    </li>
                    <li class="social-icon">
                        <a href="https://www.linkedin.com/in/nguyen-van-thien-ba7b6a1aa/">
                            <img src="../assets/linkin.png" width="30" height="30"/>
                            <span>Linkedin</span>
                        </a>
                     </li>
                    <li class="social-icon">
                        <a href="https://github.com/thiengat1">
                            <img src="../assets/github2.png" width="30" height="30"/>
                            <span>Github</span>
                        </a>
                    </li>
                    <li class="social-icon">
                        <a href="https://mail.google.com/mail/u/0/#inbox">
                            <img src="../assets/gmail.png" width="30" height="30"/>
                            <span>Gmail</span>
                        </a>
                    </li>
                    <li class="social-icon">
                        <a href="https://nguyenvanthien.herokuapp.com/">
                            <img src="../assets/web2.png" width="30" height="30"/>
                            <span>Web</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
      
    </div>
</template>

<script>
    export default {
        computed:{
            socialLink(){
                return this.$store.state.socialLink
            }
        }
        
    }
</script>

<style lang="scss" scoped>
.header-container{
    height: 891px;
    background-image: url('../assets/header-bg.jpg');
      background-repeat: no-repeat;
    background-size: cover;
    padding-top: 200px;
    .container{
        width:80%;
        margin:0 auto;
    
        .site-title{
        display: flex;
        justify-content: center;
        h1{
        color: white;
        text-transform: uppercase;
        font-size: 60px;
        font-family: 'Raleway',sans-serif;
        font-weight: 100;
        text-transform: uppercase;
        text-align: center;
        line-height: 60px;
        border-bottom: 3px solid white;
        box-sizing: border-box;
        margin: 0;

            }
        }
        .site-slogan{
            margin-top: 50px;
            display: flex;
            justify-content: center;
            h3{
                color: #FFF;
                font-size:40px ;
                font-family: 'Raleway',sans-serif;
                font-weight: 100;
                text-transform: uppercase;
                text-align: center;
                line-height: 60px;
                margin: 0;
            }   
        }
        .social-link{
            margin-top: 30px;
        }
        .social-menu{
            display: flex;
            justify-content: center;
            list-style-type: none;
            .social-icon{
                width: 50px;
                height: 50px;
                border-radius: 50%;
                margin-right: 20px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border: 1px solid #ffffff;
                 a{
                     display: flex;
                     justify-content: center;
                     align-items: center;
                     width: 100%;
                     height: 100%;
                    text-decoration: none;
                }
                span{
                    opacity: 0;
                };
            }
             .social-icon:hover{
                 background-color: #ffffff;
                 height: 60px;
                 width: 60px;
                 transition: width 0.1s;
                
             }
             .social-icon a span {
                position: absolute;
                text-align: center;
                color: #fff;
                opacity: 0;
                    }
              .social-icon a:hover span {
                opacity: 1;
                overflow: visible;
                margin: -50px 0;
                transition: 0.5s;
                transition-property: opacity;
                }
        }
    }

    @media (max-width: 992px)
    {
        .site-title{
            h1{
                font-size: 35px !important;
            }
            
        }
        .site-slogan{
            margin-top: 20px !important;
            h3{
                font-size: 18px !important; 
            }
          
        }
    }
    
}

</style>