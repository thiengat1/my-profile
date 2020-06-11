<template>
    <div class="experience-container" id="experience">
         <div class="section-header">
            <h2>Experiences</h2>
        </div>
        <div class="row experience-detail">
            <div class="col-sm-10 col-md-10 col-lg-10 col-xl-10 experience">
                <div class="row">
                     <div class="col-sm-12 col-md-12 col-lg-3 col-xl-3 name-designation">
                         <h3 class="designation">frontend developer</h3>
                         <p class="name-of-org">somi company (philippines)</p>
                     </div>
                     <div class="col-sm-12 col-md-12 col-lg-2 col-xl-2">
                         <div class="stay-time stay-time-color">
                            <p>12/2018</p>
                            <p>-</p>
                            <p>present</p>
                         </div>
                         
                     </div>
                      <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 experience-sum">
                         <ul>
                             <li v-for="item in experience2" :key="item.id"><span>{{item.title}}</span>{{item.name}}</li>
                         </ul>
                     </div>
                 </div>
            </div>
             <div class="col-sm-10 col-md-10 col-lg-10 col-xl-10 experience">
                 <div class="row">
                     <div class="col-sm-12 col-md-12 col-lg-3 col-xl-3 name-designation">
                         <h3 class="designation">it engineer</h3>
                         <p class="name-of-org">formosa ha tinh steel company</p>
                     </div>
                     <div class="col-sm-12 col-md-12 col-lg-2 col-xl-2">
                         <div class="stay-time">
                            <p>01/2013</p>
                            <p>-</p>
                            <p>11/2018</p>
                         </div>
                         
                     </div>
                      <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 experience-sum">
                          <span>Responsiblities:</span>
                         <ul>
                             <li v-for="item in experience1" :key="item.id">{{item.name}}</li>
                         </ul>
                     </div>
                 </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                experience1:[
                    {id:1,name:'Manage and troubleshoot Long Product System application. Use C#/C++ to develop  local applications to support other steel making departments. '},
                    {id:2,name:'Coordinate with other departments and other relevant people to know the process  and customize the system to support operations.'},
                    {id:3,name:'Troubleshoot any issues related to application.. '},
                    {id:4,name:'Create or modify reports in Chinese and English in accordance with user  requirements. '},
                    {id:5,name:'Analyze application to fix bugs and improve application to support business. '},
                    {id:6,name:'Test and implement new features or new requests for Production management system. '},
                    {id:7,name:'Be in charge of training new members of IT Department about Steel making and  programming knowledge. '},
                   
                ],
                 experience2:[
                    {id:1,title:'Project: ',name:'Employment Managemant System'},
                    {id:2,title:'Project Description: ',name:'Building a staff management system, including employee information management, leave management, work schedule management, financial management, flow management, etc.'},
                    {id:3,title:'Team Size: ',name:'7'},
                    {id:4,title:'Responsiblities: ',name:'Responsible of frondent develop using Vue Js framework to build the assigned modules. Maintain old modules and update new requirements.'},
                    {id:5,title:'Accomplishments: ',name:'Learned  Vue Js Framework, Improved teamwork and communication skills, Learned MVC architectural.'},
                    {id:6,title:'Technologies: ',name:'Frontend: Vue Js, Backend: PHP-Laravel.'},
                   
                ]
            }
        }
        
    }
</script>

<style lang="scss" scoped>
@import './style.scss';

.experience-detail{
    display: flex;
    justify-content: center;
    .experience{
        height: auto;
        background: #fff;
        margin-bottom: 30px;
        padding: 30px;
        .stay-time
        {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: #ffdf7c;;
            text-transform: uppercase;
            border-radius: 50%;
            border: 10px solid #f1f2f7;
            height: 145px;
            width: 145px;
            text-align: center;
            top: -60px;
            margin: 17px auto;
            transition: 0.5s;
            p{
                margin: 0;
                font-size: 16px;
                font-weight: 400;
                color: #fff;
            }
        }
        .stay-time-color{
            background: #c0a9ea;;
        }
        .name-designation{
            width: 30%;
            text-align: center;
            padding-right: 45px;
        }
        .designation{
                color: #32323a;
                margin: 0;
                margin-bottom: 15px;
                font-size: 18px;
                font-weight: 400;
                text-transform: uppercase;
        }
        .name-of-org{
                font-size: 16px;
                color: #808080;
                text-transform: uppercase;
        }
    }
    
}
@media (min-width: 992px)
    {
    .experience {
        .stay-time {
            position: relative;
            left: auto;
            top: auto;
            margin: 17px auto;
            }  
    }
}
.experience:hover{
    .stay-time{
        transition: 0.5s;
        transform: rotate(-360deg);
        width: 155px;
        height: 155px;
    }
 
}
.experience-sum{
    span{
        font-weight: bold;
    }
}

</style>