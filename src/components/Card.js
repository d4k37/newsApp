import react from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

const Card = () => {
    return(
        <View style={styles.card}>
            <View style={styles.imageWrapper}>
                <Image 
                source={require('../../assets/luisa.jpg')}
                style={styles.image}
                />
            </View>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>Cirurgia</Text>
            </View>
            <View style={styles.descriptionWrapper}>
                <Text style={styles.description}>Menina gasta 50 mil para ficar parecida com um dragão</Text>
            </View>
        </View>
    )
}

export default Card

const styles =  StyleSheet.create({
    card:{
        backgroundColor: "#ffffff",
        height: 300,
        margin: 20,
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.25,
        textShadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5
    },
    imageWrapper:{
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: "hidden"
    },
    titleWrapper:{
        height: "10%",
        paddingHorizontal: 15

    },
    descriptionWrapper:{
        paddingHorizontal: 15
    },
    image:{
        height: '100%',
        width: "100%"
    },
    title:{
        fontFamily: 'Ubuntu-Bold',
        fontSize: 20
    },
    description:{
        fontFamily: 'Ubuntu',
        fontSize: 10
    }
})