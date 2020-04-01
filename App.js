import React, {Component} from 'react';
import { StyleSheet,TouchableOpacity,TextInput, Text, View,ActivityIndicator,Image,FlatList,Platform, Button  } from 'react-native';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {      
      dataSource:[]

     };
   }
   componentDidMount(){
    fetch("http://brayan.desarrolladoresti3b.com/registros.php")    
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
       dataSource: responseJson
      })
    })
    .catch(error=>console.log(error)) //to catch the errors if any
    }
    DELETE= () =>{
      const {ids} = this.state;
      fetch('http://brayan.desarrolladoresti3b.com/delete.php', {
      method: 'post',
      header:{
      'Accept': 'application/json',
      'Content-type': 'application/json'
      },
      body:JSON.stringify({
      ids: ids
      })
      
      })
      .then((response) => response.text())
      .then((responseJson) =>{
      alert(responseJson);
      })
      .catch((error)=>{
      console.error(error);
      }); }
    Register = () =>{
      const {Origen} = this.state;
      const {Destino} = this.state;
      fetch('http://brayan.desarrolladoresti3b.com/guardar.php', {
      method: 'post',
      header:{
      'Accept': 'application/json',
      'Content-type': 'application/json'
      },
      
      body:JSON.stringify({
      
        Origen: Origen,
        Destino: Destino,
      })
      
      })
      
      .then((response) => response.text())
      .then((responseJson) =>{
      alert(responseJson);
      })
      .catch((error)=>{
      console.error(error);
      }); }

      Update = () =>{
        const {id} = this.state;
        const {Origens} = this.state;
        const {Destinos} = this.state;
        fetch('http://brayan.desarrolladoresti3b.com/actualizar.php', {
        method: 'post',
        header:{
        'Accept': 'application/json',
        'Content-type': 'application/json'
        },
        
        body:JSON.stringify({
        
            id: id,
            Origens: Origens,
            Destinos: Destinos,
        })
        
        })
        
        .then((response) => response.text())
        .then((responseJson) =>{
        alert(responseJson);
        })
        .catch((error)=>{
        console.error(error);
        }); }
  render(){
  return (
    <View style={styles.container}>
    <View style={styles.arriba}></View>
     <View style={styles.arriba2}>
     <Image source={{ uri: 'https://assets-fl-uploads.reservamos.mx/uploads/bg/dHJhbnNwb3J0ZXI6MTQ%3D/cover_desktop_uploads_2F1517594236271-q96zjej6p4h-1cf481a62ee335fcb21da0452912e2ca_2Fgrupo-vencedor.jpg' }} 
     style={{ flex:1 }}/>
     </View>
     <View style={styles.centro}>
     <Text style={styles.medio}>Grupo Vencedor</Text>
     </View>
     <View style={styles.centro2}>
     <View >
     <Image source={{ uri: 'https://www.frontalnoticias.com/wp-content/uploads/2019/07/080C888D-9C64-410E-B677-60A196FC703B.jpeg' }} 
     style={{ flex:1 }}/>
     <Text>somos la compañia #1 :)</Text>
     </View>
     <View >
     <Text style={styles.dd}>ID</Text>
     <FlatList  data={this.state.dataSource} renderItem={({item}) => 
            <View><Text style={{height:30,fontSize:20,width:30}}>{item.id}</Text>
             <View style={{backgroundColor:'blue'}}><Text></Text></View>
            </View>}/>
        </View>  
     <View >
     <Text style={styles.dd}>Origen</Text>
     <FlatList  data={this.state.dataSource} renderItem={({item}) => 
            <View><Text style={{height:30,fontSize:20,width:230}}>{item.Origen}</Text>
             <View style={{backgroundColor:'blue'}}><Text></Text></View>
            </View>}/>
        </View>   
        <View >
     <Text style={styles.dd}>Destino</Text>
     <FlatList  data={this.state.dataSource} renderItem={({item}) => 
            <View><Text style={{height:30,fontSize:20,width:230}}>{item.Destino}</Text>
             <View style={{backgroundColor:'blue'}}><Text></Text></View>
            </View>}/>
        </View>  
     </View>
     <View style={styles.abajo}>
     <View >
     <Text style={styles.dd}>Agregar Ruta</Text>
     <Text style={styles.dd}>Origen: </Text>   
    <TextInput onChangeText= {Origen => this.setState({Origen})}   style={styles.pa} placeholder='Origen'/>
    <Text style={styles.dd}>Destino: </Text>   
    <TextInput onChangeText= {Destino => this.setState({Destino})}   style={styles.pa} placeholder='Destino'/>
    <Button onPress={this.Register}  title='Guardar'></Button>
     </View>
     <Text style={styles.dd}>             </Text>
     <View >
     <Text style={styles.dd}>Eliminar Ruta</Text>
     <Text style={styles.dd}>ID: </Text>   
    <TextInput  onChangeText= {ids => this.setState({ids})}   style={styles.pa} placeholder='ID'/>
    <Button  onPress={this.DELETE} title='Elminar'></Button>
     </View>
     <Text style={styles.dd}>             </Text>
     <View >
     <Text style={styles.dd}>Actualizar Ruta</Text>
     <Text style={styles.dd}>ID: </Text>   
    <TextInput  onChangeText= {id => this.setState({id})}   style={styles.pa} placeholder='ID'/>
     <Text style={styles.dd}>Origen: </Text>   
    <TextInput onChangeText= {Origens => this.setState({Origens})}   style={styles.pa} placeholder='Origen'/>
    <Text style={styles.dd}>Destino: </Text>   
    <TextInput onChangeText= {Destinos => this.setState({Destinos})}   style={styles.pa} placeholder='Destino'/>
    <Button  onPress={this.Update} title='Actualizar'></Button>
     </View>
     </View>
    </View>

    )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#010505'
  },
  arriba:{
    flex : 0.20,
    flexDirection:'row',
    backgroundColor: '#086d32',
  }, 
  arriba2:{
    flex : 1,
    flexDirection:'row',
    backgroundColor: '#01614c',
  },
   centro:{
    flex : 0.32,
    backgroundColor: '#5ba77a',
    textAlign:'center',
    alignItems:'center' ,
  }, 
   abajo:{
    flex : 2,
    backgroundColor: '#5ba77a',
    flexDirection:'row'
  }  , 
  centro2:{
   flex : 2,
   backgroundColor: '#06979ca1',
    flexDirection:'row',
}  , 
 medio:{
     fontSize:40
} , 
dd:{
    fontSize:20
},
pa:
{
    fontSize:20,
backgroundColor:'#00f8f8b2',
color:'#000000'
}


});
