import React,{Component} from 'react';
import { createStore } from 'redux'
const state_start = {
  result:15000,
  value:[]
}
class App extends Component {
  state = {};
   componentDidMount(){
      const reducer = (state=state_start,action)=>{
        console.log("action=>",action);
          switch (action.type) {
            case "ADD":
              console.log(state);
              // state = {
                // result:state.result+action.payload,
                // value:state.value
              // }
              state = { 
                ...state,
                result:state.result+action.payload,
                value:[...state.value,(state.result+action.payload)]
              }
                // state+=action.payload;
              break;
            case "SUBTRACT":
              // state-=action.payload;
              break;
            default:
              
          }
          return state;
      }

      const store = createStore(reducer) // สร้างข้อมูล
      store.subscribe(()=>{
        console.log("Update Stroe:",store.getState());
      }) // ติดตามผลการเปลี่ยนแปลง
      store.dispatch({ // ใช้เพื่อเปลี่ยนแปลงค่าใน store
        type:"ADD",
        payload:0
      })

      store.dispatch({
        type:"ADD",
        payload:15000
      })

      store.dispatch({
        type:"ADD",
        payload:15000
      })
      // store.dispatch({
      //   type:"SUBTRACT",
      //   payload:10000
      // })
   console.log(store.getState(),'Store');//get ข้อมูล
    }
   
  render() {
    return (
      <div>React</div>
    );
  }
}

export default App;
