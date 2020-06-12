<template>
    <div class="skill-container" id="skill"> 
        <div class="section-header">
            <h2>skills</h2>
        </div>
        <div>
            <div class="row skill-detail">
                <div class="col-sm-12 col-md-12 col-lg-3 col-xl-3 skill">
                    <h2>PROGRAMMING LANGUAGES</h2>
                    <ul>
                        <li v-for="item in program" :key="item.id">{{item.name}}</li>
                    </ul>
                    <h2>FRAMEWORKS & PLATFORMS</h2>
                    <ul>
                         <li v-for="item in frameWork" :key="item.id">{{item.name}}</li>
                    </ul>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-3 col-xl-3 skill">
                     <h2>DATABASE</h2>
                    <ul>
                       <li v-for="item in database" :key="item.id">{{item.name}}</li>
                    </ul>
                    <h2>VERSION CONTROL</h2>
                    <ul>
                         <li v-for="item in versionControl" :key="item.id">{{item.name}}</li>
                    </ul>
                    <h2>IDE</h2>
                    <ul>
                         <li v-for="item in ide" :key="item.id">{{item.name}}</li>
                    </ul>


                </div>
                <div class="col-sm-12 col-md-12 col-lg-3 col-xl-3 skill">
                     <h2>FOREIGN LANGUAGE</h2>
                    <ul>
                       <li v-for="item in foriegnLanguage" :key="item.id">{{item.name}}</li>
                    </ul>
                    <h2>KNOWLEDGE</h2>
                    <ul>
                         <li v-for="item in knowledge" :key="item.id">{{item.name}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                program:[
                    {id:1,name:'JavaScript'},
                    {id:2,name:'HTML, CSS'},
                    {id:3,name:'PHP'},
                    {id:4,name:'C#. NET'},
                ],
                frameWork:[
                    {id:1,name:'Vue Js/ React Js/ NodeJS'},
                    {id:2,name:'jQuery / Bootstrap / LayUI'},
                    {id:3,name:'PHP-Yii2'},
                    {id:4,name:'Express JS'},
                    {id:4,name:'React Native'},
                ],
                database:[
                    {id:1,name:'MySQL'},
                    {id:2,name:'MongoDB'},
                    {id:3,name:'Oracle'},
                ],
                versionControl:[
                    {id:1,name:'Git (Github)'},
                    {id:2,name:'SVN (TortoiseSVN)'},
                    {id:3,name:'Team Foundation Serve'},
                ],
                ide:[
                    {id:1,name:'phpStorm'},
                    {id:2,name:'Visual Code'},
                    {id:3,name:'Microsoft Visual Studio'},
                ],
                foriegnLanguage:[
                    {id:1,name:'Good In Chinese (HSK5)'},
                    {id:2,name:'Intermediate English Level'},
                ],
                knowledge:[
                    {id:1,name:'Good knowledge in OOP.'},
                    {id:2,name:'Good understanding software design, database design...'},
                    {id:3,name:'Good time management, presentation and teamwork skills ...'},
                    {id:4,name:'Presentation, communication and persuasion.'},
                    {id:5,name:'Capability of working independently, working in group, work under-pressure and self-control.'},
                    {id:6,name:'Hard working, willing to learn, careful, patient, responsible and reliable.'},
                   
                    
                ]
            }
        }
        
    }
</script>

<style lang="scss" scoped>
@import './style.scss';
.skill-detail{
    display: flex;
    justify-content: space-evenly;
    .skill{
        height: auto;
        background: #fff;
        padding: 30px;
        h2{
        font-size: 18px;
        font-weight: normal;
        text-transform: uppercase;
        margin-top: 0;
        color: #32323a;
        }
    }
}
.skill-container{
    margin-bottom: 30px;
}
</style>