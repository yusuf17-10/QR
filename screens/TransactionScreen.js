import * as React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';

import * as Permissions from "expo-permissions";
import {BarCodeScanner} from "expo-barcode-scanner";

export default  class  TransactionScreen extends React.Component{

    constructor(){
      super();
      this.state={
        hasCameraPermissions:null,
        scanned:false,
        scannedData:"",
        buttonState:"normal"
      }
    }
    getCameraPermissions=async()=>{
      const {status}=await Permissions.askAsync(Permissions.CAMERA);
      this.setState({
        hasCameraPermissions:status==="granted",
        buttonState:'clicked',
          scanned:false
      }
      );

    }
    handleBarCodeScanner=async({type,data})=>{
      this.setState({scanned:true,
      scannedData:data,
      buttonState:'normal'  

    });

    }

  render(){
    const hasCameraPermissions=this.state.cameraPermissions;
    const scanned=this.state.scanned;
    const buttonState=this.state.buttonState;

    if(buttonState==="clicked" && hasCameraPermissions){
      return(
        <BarCodeScanner 
        onBarCodeScanned={scanned? undefined:this.handleBarCodeScanner}
        style={StyleSheet.absoluteFillObject}>
        </BarCodeScanner>
      );
    }
else if(buttonState==="normal"){
 
    return(
      <View style={{justifyContent:'center',alignItems:'center'}}>
      <Text style={styles.displayText}> {
        hasCameraPermissions===true?this.state.scannedData:"request hasCameraPermissions"
      }</Text>
      <TouchableOpacity style={styles.button} 
      onPress={this.getCameraPermissions}>
        <Text style={styles.buttonText}> Scan QR code </Text>
      </TouchableOpacity>
      </View>

    )
  }
  }

  
}

const styles=StyleSheet.create({

  displayText:{
      fontSize:15,
      color:'blue'
  },

  button:{
    backgroundColor:'pink',
    width:70,
    height:35
  },

  buttonText:{
    fontSize:15,
    color:'red'
},
})

