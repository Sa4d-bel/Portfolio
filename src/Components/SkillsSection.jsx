import '../Styles/AllStyles.css'
//images
import ReactPic from '../pictures/react-original.svg'
import Javascript from '../pictures/javascript-original.svg'
import Next from '../pictures/nextjs-original.svg'
import C from '../pictures/c-original.svg'
import Cpp from '../pictures/cplusplus-original.svg'
import mySql from '../pictures/mysql-original-wordmark.svg'
import python from '../pictures/python-original.svg'
import html from '../pictures/html5-original.svg'
import css from '../pictures/css3-original.svg'
import vscode from '../pictures/vscode-original.svg'
import redux from '../pictures/redux-original.svg'
import git from '../pictures/git-original.svg'
import github from '../pictures/github-original.svg'
import postman from '../pictures/postman-original.svg'
import tailwind from '../pictures/tailwindcss-original.svg'
import ubuntu from '../pictures/ubuntu-original.svg'
import windows from '../pictures/windows8-original.svg'
import bash from '../pictures/bash-original.svg'
import assembly from '../pictures/assembly.svg'
import materialUI from '../pictures/materialui-original.svg'
import Card from './card' 
import Footer from './Footer'






export default function SkillsSection(){
    return <section className='SkillsSection' id='xxxx'>
     <h1 className='skillsTitle'>Skills <span>&</span>Technologies</h1>
     <div className='skills'>
        <div>
            <label className='technoTitle'>Programming languages</label>
             <div className='programming'>
                 <Card image={C} title={"C"}/>
                 <Card image={Cpp} title={"Cpp"}/>
                 <Card image={Javascript} title={"JavaScript"}/>
                 <Card image={python} title={"Python"}/>
                 <Card image={assembly} title={"Assembly"}/>
                 <Card image={bash} title={"Shell"}/>
             </div>
            
        </div>

         <div>
            <label className='technoTitle'>Web Technologies</label>
             <div className='programming'>
                 <Card image={html} title={"Html"}/>
                 <Card image={css} title={"Css"}/>
                 <Card image={Javascript} title={"JavaScript"}/>
                 <Card image={ReactPic} title={"React JS"}/>
                 <Card image={Next} title={"Next Js"}/>
                 <Card image={tailwind} title={"Tailwind"}/>
             </div>
              <div className='programming'>
                 <Card image={materialUI} title={"Material UI"}/>
                 <Card image={redux} title={"Redux"}/>
             </div>
        </div>

          <div>
            <label className='technoTitle'>Tools</label>
             <div className='programming'>
                 <Card image={git} title={"Git"}/>
                 <Card image={github} title={"Github"}/>
                 <Card image={postman} title={"Postman"}/>
                 <Card image={windows} title={"Windows"}/>
                 <Card image={ubuntu} title={"Ubuntu"}/>
                 <Card image={vscode} title={"VsCode"}/>
             </div>
        </div>

        <div>
            <label className='technoTitle'>DataBase</label>
             <div className='programming base'>
                 <Card image={mySql} title={"Mysql"}/>
             </div>
        </div>

     </div>
     <Footer />
    </section>
}
