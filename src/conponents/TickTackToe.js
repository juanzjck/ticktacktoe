
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Field from './Field';
import {connect} from 'react-redux';
class TickTackToe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
       
        return ( 
            <View style={style.background}>
              
            <View style={style.row}>
               <Field  cleaning={this.props.cleaning} row={0} postion={0} onPress={this.props.onPress}  state={this.props.state}></Field>
               <Field  cleaning={this.props.cleaning} row={0} postion={1} onPress={this.props.onPress}  state={this.props.state} style={style.middle}></Field>
               <Field  cleaning={this.props.cleaning} row={0} postion={2} onPress={this.props.onPress}  state={this.props.state}></Field>
            </View>
            <View style={[style.row,style.rowMiddle]}>
               <Field  cleaning={this.props.cleaning} row={1} postion={0} onPress={this.props.onPress}  state={this.props.state}></Field>
               <Field  cleaning={this.props.cleaning} row={1} postion={1} onPress={this.props.onPress}  state={this.props.state} style={style.middle}></Field>
               <Field  cleaning={this.props.cleaning} row={1} postion={2} onPress={this.props.onPress}  state={this.props.state}></Field>
            </View>
            <View style={style.row}>
               <Field  cleaning={this.props.cleaning} row={2} postion={0} onPress={this.props.onPress}  state={this.props.state}></Field>
               <Field  cleaning={this.props.cleaning} row={2} postion={1} onPress={this.props.onPress}  state={this.props.state} style={style.middle}></Field>
               <Field  cleaning={this.props.cleaning} row={2} postion={2} onPress={this.props.onPress}  state={this.props.state}></Field>
            </View>
       
        </View>
         );
    }
}
 
const style=StyleSheet.create({
    row:{
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection:'row',
        height:'33.33%',
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
    },
    rowMiddle:{
        borderTopColor:'grey',
        borderTopWidth:1,
        borderBottomColor:'grey',
        borderBottomWidth:1,
    },
    middle:{
        borderLeftColor:'grey',
        borderLeftWidth:1,
        borderRightColor:'grey',
        borderRightWidth:1
    }
    
})
function  mapStateToProps(state){
    return{
        cleaning:state.game.cleaning
    }
}
export default connect(mapStateToProps)(TickTackToe);