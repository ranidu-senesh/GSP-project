import{Text, StyleSheet}from 'react-native';
export default function Dashboard(){
    return(
        <Text style = {styles.homeText}>
            Home page
        </Text>
    )
}

const styles = StyleSheet.create({
    homeText:{
        color:'red'
    }
})