
import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';


function Field(props){
    const [state,setState]=useState(3);
    const [fielState,setFieldState]=useState(false);
    const onPressHandle=()=>{
        if(fielState==false){  
            setState(props.state);
            props.dispatch({
                type:'SET_BOARD',
                payload:{postion:props.postion,state:props.state,row:props.row}
            })
            setFieldState(true);
            props.onPress();
        }
        props.dispatch({
            type:'WIN'
        })
      
    }
   
  
    function RenderChart(){
        if(props.cleaning==true){
            setState(3);
            setFieldState(false);
            props.dispatch({
                type:'RESTART_CLEANER',
                payload:false
            })
        }
        if(state===3){
            return <Text style={style.text}>.</Text>
        }
        if(state===1){
            return <Text style={style.text}>X</Text>
        }
        
        if(state===0){
            return <Text style={style.text}>O</Text>
        }
        
    }
    return(

        <TouchableOpacity  style={[style.button,props.style]} onPress={onPressHandle}>
            <View>
                <RenderChart/>
            </View>
        </TouchableOpacity>

        )
}
const style=StyleSheet.create({
    row:{
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection:'row',
        height:'33.33%'
    },
    background:{
        backgroundColor:'red',
        width:'90%',
        height:'60%'
    },
    button:{
        width:'33.33%',
        height:'100%',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:100
    }
})
function  mapStateToProps(state){
    return{
        board:state.game.board,
        plaing:state.game.plaing
    }
}
export default connect(mapStateToProps)(Field);