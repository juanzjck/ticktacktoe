import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import TickTackToe from '../conponents/TickTackToe';
import {connect} from 'react-redux';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            turn:0
          }
    }
    handlePress=()=>{
        if(this.state.turn===1){
            this.setState({
                turn:0
            })
        }else{
            this.setState({
                turn:1
            })
        }
        console.log('se preciono'+this.state.turn)
     
    }
    componentDidUpdate(){
        console.log(`moves ${this.props.moves}`)
        if(this.props.moves==9 && this.props.win.finish==false){
       
            this.props.dispatch({
                type:'RESTART'
            })
            this.props.dispatch({
                type:'RESTART_CLEANER',
                payload:true
            })
   
        }
     
    }
    render() { 
    
        return ( 
        <View style={styles.container}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.win.finish}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.modal}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalText}>
                            {`Gano ${this.props.win.winner}`}
                        </Text>
                        <TouchableOpacity onPress={()=>{
                            this.props.dispatch({
                                type:'RESTART'
                            });
                        
                        }}>
                            <Text style={styles.buttonText}>
                               Volver a jugar
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>
            <Text style={styles.title}>Tres en raya</Text>
            <TickTackToe win={this.props.win} state={this.state.turn} onPress={this.handlePress} >
              
            </TickTackToe>
          </View>
         );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    title:{
        fontSize:25,
        margin:10
    },
    modal:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    },
    modalContainer:{
        height:250,
        width:250,
        backgroundColor:'grey',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    },
    modalText:{
        color:'white',
        fontSize:40
    },
    buttonText:{
        color:'grey',
        fontSize:25,
        padding:8,
        backgroundColor:'white',
        borderRadius:10,
        margin:10
    }
  });
  function  mapStateToProps(state){
    return{
        win:state.game.win,
        moves:state.game.moves
    }
}
export default connect(mapStateToProps)(Game);