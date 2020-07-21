import React from 'react';
import ReactDOM from 'react-dom';

import jsonData from './list-total.json'
import './listStyle.css'

console.log(jsonData.data.areaTree[2].children)

let provincesobj = {
    // "广东省":{
    //     confirm:0,
    //     suspect:null,
    //     heal:0,
    //     dead:0,
    //     severe: null,
    //     storeConfirm:0,
    // }
}

 jsonData.data.areaTree[2].children.forEach((item,i) => {
    //  if(provincesobj[item.name]){
    //      provincesobj[item.name] = {
    //         confirm:0,
    //         suspect:0,
    //         heal:0,
    //         dead:0,
    //         severe: 0,
    //       }   
    //  }
     provincesobj[item.name] = {
         confirm:item.total.confirm,
         dead:item.total.dead,
         input:item.total.input,
         heal:item.total.heal,
         suspect:item.total.suspect,
     }
 });
let provincesList = []
for (const key in provincesobj) {
    provincesobj[key].province = key
   provincesList.push(provincesobj[key])
}

let provincesListSort = provincesList.sort((a,b) => {
    if (a.confirm<b.confirm) {
        return 1;
    }else{
        return -1;
    }
})

//  console.log(provincesobj)
 console.log(provincesListSort)

 class Bingli extends React.Component{
     constructor(props){
         super(props);
     }

     render(){
         return(
             <div>
                 <h1>
                    中国病例
                 </h1>
                 <ul>
                     <li>
                         <span>地区</span>
                         <span>总确诊</span>
                         <span>死亡</span>
                         <span>治愈</span>
                     </li>

                     {
                         this.props.list.map((item,index) => {
                            return(
                                <li>
                                    <span>{item.province}</span>
                                    <span>{item.confirm}</span>
                                    <span>{item.dead}</span>
                                    <span>{item.heal}</span>
                                </li>
                            )
                         })
                     }
                 </ul>
             </div>
         );
     }
 }


 ReactDOM.render(
     <Bingli list={provincesListSort}/>,
     document.querySelector('#root')
 ) 
    
