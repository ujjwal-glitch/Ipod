import React from "react";
import './App.css';
import ZingTouch from 'zingtouch';
// import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

var menu=["Cover Flow","Music","More","Feedback"];
var submenu=["English","Hindi","Punjabi"];
var covers=["Nature","Desktop","Creative","Beach"];
var more=["StopWatch","Calculator","Tic tac toe","Weather"];

var coversImages=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5-egb2XyOBFdyuZ96-pMNeYJHdzRq7_cVJA&usqp=CAU",
"https://wallpaperaccess.com/full/196111.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShCSWAekAmT6CkkHT_oytN_vtJiDvhK6DqldMAJeF0s3xst8CDw_dQfDF5kRE8JHHvAk4&usqp=CAU",
"https://cdn.wallpapersafari.com/65/39/GKaDxw.jpg"];
var eng=["BELIEVER","BELLA CIAO","SHAPE OF YOU","ON MY WAY"];
var hin=["DILBAR","KAR GYI CHULL","SATURDAY","BEKHAYALI"];
var pun=["BIJLEE BIJLEE","8 RAFLAAN","GUILTY","WAALIAN"];

class App extends React.Component{

  constructor(props)
  {
    super(props);
    this.wheel=null;
    this.activeRegion=null;
    this.angle=0;
    // this.db=firebase.firestore().collection('songs');
    this.interval="";
    this.state={
      index:0,
      items:menu,
      dropdown:false,
      text:"",
      picture:"",
      flag:0,
      header:"iPod.js",
      song:"",
      mainscreen:"../mainscreen.webp",
      back:"../mainscreen.webp",
      time:new Date(),
      wid:window.innerWidth,
      hid:false
    }
  }
  
  /* To change index of menu dropdown using zingtouch*/

  changeIndex=(e)=>{
    if(this.state.dropdown)
    {
    this.angle+=e.detail.distanceFromLast;
    // console.log(this.angle);
    if(Math.abs(this.angle)>=15)
    {
      if(this.state.flag===20)
      {
         if(this.angle>0)
         {
           this.setState({
           index:(this.state.index+1)%3
         })
         }
         else{
         this.setState({
          index:(this.state.index-1+4)%3
         })
         }
     }
     else
     {
        if(this.angle>0)
        {
          this.setState({
          index:(this.state.index+1)%4
        })
        }
        else{
        this.setState({
        index:(this.state.index-1+4)%4
        })
        }
     }
      this.angle=0;
    }
  }
  }

  changeMobileIndex=(val)=>{
    if(this.state.dropdown)
    {
      if(this.state.flag===20)
      {
         if(val>0)
         {
           this.setState({
           index:(this.state.index+1)%3
         })
         }
         else{
         this.setState({
          index:(this.state.index-1+3)%3
         })
         }
     }
     else
     {
        if(val>0)
        {
          this.setState({
          index:(this.state.index+1)%4
        })
        }
        else{
        this.setState({
        index:(this.state.index-1+4)%4
        })
        }
     }
  }
  }

/* To change main screen using index on click of select button*/

  changeScreen=()=>{
    if(this.state.dropdown)
    {
    if(this.state.flag===0)
    {
    switch(this.state.index)
    {
      case 0:
        this.setState({
          dropdown:true,
          items:covers,
          flag:10,
          header:"Cover Flow",
          index:0
        })
        break;
      case 1:
        this.setState({
          items:submenu,
          index:0,
          flag:20,
          header:"Music"
        })
        break;
      case 2:
        this.setState({
          header:"More",
          items:more,
          index:0,
          flag:30
        })
        break;
      case 3:
        this.setState({
          dropdown:false,
          back:"",
          items:menu,
          flag:40
        })
        document.getElementById("moreitems").innerHTML='<object style="width:100%;height:100%" type="text/html" data="https://feedbackstar.netlify.app/"></object>';
        
        break;
      default:
    }
    }
    else if(this.state.flag===10)
    {
      switch(this.state.index)
      {
        case 0:
          this.setState({
            back:coversImages[0],
            mainscreen:coversImages[0]
          })
          break;
        case 1:
          this.setState({
            back:coversImages[1],
            mainscreen:coversImages[1]
          })
          break;
        case 2:
          this.setState({
            back:coversImages[2],
            mainscreen:coversImages[2]
          })
          break;
        case 3:
          this.setState({
            back:coversImages[3],
            mainscreen:coversImages[3]
          })
          break;
        default:
          this.setState({
            back:this.state.mainscreen
          })
      }
    }
    else if(this.state.flag===20)
    {
      switch(this.state.index)
      {
        case 0:
          this.setState({
            flag:21,
            items:eng,
            index:0,
            header:"English"
          })
          break;
        case 1:
          this.setState({
            flag:22,
            items:hin,
            index:0,
            header:"Hindi"
          })
          break;
        case 2:
          this.setState({
            flag:23,
            items:pun,
            index:0,
            header:"Punjabi"
          })
          break;
        default:
      }
    }else if(this.state.flag===23)
    {
      switch(this.state.index)
      {
        case 0:
          this.setState({
          song:"../songs/BIJLEE%20BIJLEE.m4a",
          dropdown:false,
          back:"",
          text:"BIJLEE BIJLEE",
          picture:"https://a10.gaanacdn.com/gn_img/albums/JD2KJAbOLw/2KJyB1DPbO/size_xxl.jpg",
          flag:99,
          });
          break;
        case 1:
          this.setState({
          song:"../songs/8%20RAFLAAN.m4a",
          dropdown:false,
          back:"",
          text:"8 RAFLAAN",
          picture:"https://i.ytimg.com/vi/jIAmxFlsz9k/maxresdefault.jpg",
          flag:99
          });
          break;
        case 2:
          this.setState({
          song:"../songs/GUILTY.m4a",
          dropdown:false,
          back:"",
          text:"GUILTY",
          picture:"https://media.news24online.com/static_dev/static_root/media/2021/01/11/21fe1c61-6534-4226-8e0e-441e465ba9d9.png",
          flag:99
          });
          break;
        case 3:
          this.setState({
          song:"../songs/WAALIAN.m4a",
          dropdown:false,
          back:"",
          text:"WAALIAN",
          picture:"https://i.ytimg.com/vi/rCoPr8UwRMc/maxresdefault.jpg",
          flag:99
          });
          break;
        default:
      }
    }else if(this.state.flag===22)
    {
      switch(this.state.index)
      {
        case 0:
          this.setState({
          song:"../songs/DILBAR.m4a",
          dropdown:false,
          back:"",
          text:"DILBAR",
          picture:"https://i.ytimg.com/vi/_108FB3SLuk/maxresdefault.jpg",
          flag:99
          });
          break;
        case 1:
          this.setState({
          song:"../songs/KAR%20GYI%20CHULL.m4a",
          dropdown:false,
          back:"",
          text:"KAR GYI CHULL",
          picture:"https://s1.dmcdn.net/v/DyUJk1Mx-jkoz8g4H/x1080",
          flag:99
          });
          break;
        case 2:
          this.setState({
          song:"../songs/SATURDAY.m4a",
          dropdown:false,
          back:"",
          text:"SATURDAY",
          picture:"https://a10.gaanacdn.com/images/albums/79/219079/crop_480x480_219079.jpg",
          flag:99
          });
          break;
        case 3:
          this.setState({
          song:"../songs/BEKHAYALI.m4a",
          dropdown:false,
          back:"",
          text:"BEKHAYALI",
          picture:"https://i1.sndcdn.com/artworks-000575987204-82aeem-t500x500.jpg",
          flag:99
          });
          break;
        default:
      }
    }else if(this.state.flag===21)
    {
      switch(this.state.index)
      {
        case 0:
          this.setState({
          song:"../songs/BELIEVER.m4a",
          dropdown:false,
          back:"",
          text:"BELIEVER",
          picture:"https://i.ytimg.com/vi/W0DM5lcj6mw/maxresdefault.jpg",
          flag:99
          });
          break;
        case 1:
          this.setState({
          song:"../songs/BELLA%20CIAO.m4a",
          dropdown:false,
          back:"",
          text:"BELLA CIAO",
          picture:"https://c.saavncdn.com/076/Bella-ciao-English-2018-20180411175142-500x500.jpg",
          flag:99
          });
          break;
        case 2:
          this.setState({
          song:"../songs/SHAPE%20OF%20YOU.m4a",
          dropdown:false,
          back:"",
          text:"SHAPE OF YOU",
          picture:"https://i.ytimg.com/vi/VJ2rlci9PE0/maxresdefault.jpg",
          flag:99
          });
          break;
        case 3:
          this.setState({
          song:"../songs/ON%20MY%20WAY.m4a",
          dropdown:false,
          back:"",
          text:"ON MY WAY",
          picture:"https://i.ytimg.com/vi/fm-nXA-K0Dg/maxresdefault.jpg",
          flag:99
          });
          break;
        default:
      }
    }
    else if(this.state.flag===30)
    {
      switch(this.state.index)
      {
        case 0:
          document.getElementById("moreitems").innerHTML='<object style="width:100%;height:100%" type="text/html" data="https://ujjwal-glitch.github.io/stopwatch/stopwatch.html"></object>';
          this.setState({
            back:"",
            dropdown:false,
            flag:31
          })
          break;
        case 1:
          document.getElementById("moreitems").innerHTML='<object style="width:100%;height:100%" type="text/html" data="https://ujjwal-glitch.github.io/calc/index.html"></object>';
          this.setState({
            back:"",
            dropdown:false,
            flag:31
          })
          break;
        case 2:
          document.getElementById("moreitems").innerHTML='<object style="width:100%;height:100%" type="text/html" data="https://tictactoet3.netlify.app/"></object>';
          
          this.setState({
            back:"",
            dropdown:false,
            flag:31
          })
          break;
          case 3:
          document.getElementById("moreitems").innerHTML='<object style="width:100%;height:100%" type="text/html" data="https://weatherindia.netlify.app"></object>';
          this.setState({
            back:"",
            dropdown:false,
            flag:31
          })
          break;
        default:
      }
    }




    }
  }

/* To change Dropdown menu to submenu on click of music item */

// hide=()=>{
//   // console.log(1);
//   this.setState({
//     hid:true
//   })
// }

  changeMenu=()=>{
    if(this.state.flag===0)
    {
    this.setState({
      dropdown:!this.state.dropdown,
      text:""
    })
    }
    else if(this.state.flag===21 || this.state.flag===22 || this.state.flag===23)
    {
      this.setState({
        flag:20,
        items:submenu,
        header:"Music",
        index:0
      })
    }
    else if(this.state.flag===99)
    {
      this.setState({
        flag:20,
        items:submenu,
        back:this.state.mainscreen,
        header:"Music",
        index:0,
        dropdown:true
      })
    }
    else if(this.state.flag===31)
    {
      this.setState({
        items:more,
        index:0,
        flag:30,
        dropdown:true,
        back:this.state.mainscreen,
      })
      document.getElementById("moreitems").innerHTML="";
    }else if(this.state.flag===40)
    {
      this.setState({
        flag:0,
        index:0,
        items:menu,
        dropdown:true,
        back:this.state.mainscreen,
      })
      document.getElementById("moreitems").innerHTML="";
    }
    else{
      this.setState({
        items:menu,
        index:0,
        flag:0,
        header:"iPod.js",
        back:this.state.mainscreen,
      })
      
    }
  }

  changeUp=()=>{
    if(this.state.wid<=400)
    {
    this.changeMobileIndex(1);
    }
  }
  changeDown=()=>{
    if(this.state.wid<=400)
    {
    this.changeMobileIndex(-1);
    }
  }

/* Component Did Mount for using ZingTouch */
  componentDidMount()
  {
    if(this.state.wid>400)
    {
    this.wheel=document.getElementById("control");
    this.activeRegion=new ZingTouch.Region(this.wheel);
    this.activeRegion.bind(this.wheel,"rotate",this.changeIndex);
    }
    else{
      this.wheel=null;
      this.activeRegion=null;
      this.angle=0;
    }
    this.interval=setInterval(()=>{
      this.setState({
        time:new Date(),
      })
    },1000);
  }
  
  componentWillUnmount()
  {
    clearInterval(this.interval);
  }

  
  render()
  {
    const element=(this.state.flag===99)?<>
    <div style={{display:"flex",justifyContent:"space-around",width:"100%",height:"60%"}}>
      <img style={{paddingLeft:"2%"}} alt="music" height="100%" width="40%" src={this.state.picture}/>
      <div style={{height:"100%",width:"60%",display:"flex",flexDirection:"column",alignItems:"center"}}>
      <h3>{this.state.text}</h3>
      </div>
    </div>
    <audio style={{width:"100%",height:"30%"}} type="audio/m4a" src={this.state.song} controls autoPlay loop/>
    </>
    :
    <div style={{height:"100%",width:"100%"}} id="moreitems">
      {/* <div style={{display:`${this.state.hid?"none":"block"}`}} id="loading">Connecting...</div> */}
      {/* <div id="moreitems"></div> */}
    </div>;

    return(
      <div className="container">
        
        <div style={{background:`url(${this.state.back}) center/cover`}} className="screen">

          <div style={{display:`${this.state.dropdown?"flex":"none"}`}} className="dropdown">
            <span>{this.state.time.getHours()}:{this.state.time.getMinutes()}</span>
            <h3 style={{paddingLeft:"5%"}}>{this.state.header}</h3>
            {
              this.state.items.map((item,id)=>{
                return(
                  <div className={`${id===this.state.index?"active":"none"}`} style={{padding:"2%"}} key={id}>
                    <span style={{paddingLeft:"5%"}}>{item}</span><span style={{float:"right",marginRight:"10%",color:"white"}} className="fas fa-chevron-right"></span>
                  </div>
                );
              })
            }
          </div>

          <div style={{display:`${this.state.back===""?"flex":"none"}`,flexDirection:"column",background:"white",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}}>
              {
              element
              }
          </div>

        </div>

        <div id="control" className="control">
          <div style={{cursor:"pointer"}} onClick={this.changeMenu}>MENU</div>
          <div className="horizontal">
          <span onClick={this.changeDown} id="backward" className="fas fa-fast-backward"></span>
          <div onClick={this.changeScreen} className="select"></div>
          <span onClick={this.changeUp} id="forward" className="fas fa-fast-forward"></span>
          </div>
          <div>
          <span className="fas fa-play"></span>&nbsp;<span className="fas fa-pause"></span>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
