import React from "react";
import { SafeAreaView, Image, Text, View, TextInput, email, senha, Pressable, StyleSheet} from "react-native";
import estilo from "./estilo";

export default () => {
    return(
        <SafeAreaView style={estilo.fundo}>
        <Image style={style.logo} source={require('../../image/logofoxhub.png')} />
        <Text style={{marginTop: 50,fontSize: 25, marginLeft: 10, color:'#000000' }}>Bem-vindo!</Text>
        <Text style={{marginLeft: 10, marginBottom: 70}}>Cadastre-se para continuar</Text>
        <View style={{flexDirection:"row"}}>
        <Image style={{width: 20,height:20,marginTop: 15, marginLeft:10}} source={require('../../image/usuário50.png')} />
        <TextInput placeholder="Nome" placeholderTextColor={'black'} maxLength={80} value={email} keyboardType="email-address" />
        </View>
        <View style={{flexDirection:"row"}}>
        <Image style={{width: 20,height:20,marginTop: 15, marginLeft:10}} source={require('../../image/mensagem.png')} />
        <TextInput placeholder="Email" placeholderTextColor={'black'} maxLength={80} value={email} keyboardType="email-address" />
        </View>
        <View style={{flexDirection:"row"}}>
         <Image style={{ width: 20,height:20,marginTop: 15, marginLeft:10}} source={require('../../image/senha.png')} />
        <TextInput  placeholder="Senha" placeholderTextColor={'black'} maxLength={14} value={senha} secureTextEntry={true} keyboardType="numeric" />
        </View>
    <Pressable style={{justifyContent: 'center', alignItems: 'center', marginTop: 50,}} onPress={''}>
              <Text style={{backgroundColor: '#000272', borderRadius: 7, width: 300,padding:13,color: 'white', textAlign: 'center'}}>Cadastrar</Text>
            </Pressable>
    
    <Text style={{textAlign: 'center', marginTop: 20}}>OR</Text>
    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin:30}}>
    
    <Text style={{}}>Cadastrar com</Text>
    <Image style={{width: 40, height: 40}}  source={require('../../image/icons8-facebook-novo-48.png')} />
    
    
    <Text  style={{}}>Cadastrar com</Text>
    <Image style={{width: 40, height: 40}} source={require('../../image/gmail48.png')} />
    </View>
    <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 30}}>
        <Text>Já tem conta?</Text>
        <Text style={{color: '#FF3EA5'}}>Clique aqui</Text>
    </View>
    


           
        
        </SafeAreaView>
    )
}

const style = StyleSheet.create(
    {
        botao: {
            backgroundColor: '#293B8F',
            
        },
        logo: {
            marginTop: 15
            
        },
        saudacao: {
            marginTop: 50
        },
        email: {
            width: 20,
            height:20,
        },
        senha: {
            width: 20,
            height:20,
            
        }
    }
)