import React, {Component} from 'react';
import {View,Text,StyleSheet, TextInput,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { FlatList } from 'react-native-web';

const initialUserDetailsList = [
    {
      uniqueNo: 1,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
      name: 'Esther Howard',
      role: 'Software Developer'
    },
    {
      uniqueNo: 2,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
      name: 'Floyd Miles',
      role: 'Software Developer'
    },
    {
      uniqueNo: 3,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
      name: 'Jacob Jones',
      role: 'Software Developer'
    },
    {
      uniqueNo: 4,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
      name: 'Devon Lane',
      role: 'Software Developer'
    }
  ] 

const RenderCard = (props) => {
    const {eachUser, onDeleteUser} = props
    const {uniqueNo, imageUrl, name, role} = eachUser

    const _deleteUser = () =>(
        onDeleteUser(uniqueNo)
    )

    return(
        <View style={styles.profileCard}>
            <Image source={{uri: `${imageUrl}`}} style={styles.profileImage} />
            <View>
                <Text style={styles.profileText}>{name}</Text>
                <Text style={styles.profileTextDes}>{role}</Text>
            </View>
            <Icon name="close-outline" size={30} onPress={_deleteUser} />
        </View>
    )
}

  
class UserDetails extends Component{
    state ={userSearch: '', userList: initialUserDetailsList}

    userSearchInput = (event) => {
        this.setState({userSearch: event})
    }

    onDeleteUser = (uniqueNo) => {
        const {userList} = this.state
        const filterUserList = userList.filter(eachUser => eachUser.uniqueNo!== uniqueNo)
        this.setState({userList: filterUserList})
    }

    render(){
        const {userSearch,userList} = this.state
        const updatedUserList = userList.filter(each => (each.name.toLowerCase().includes(userSearch.toLowerCase())))
        return(
            <View style={styles.pageContainer}>
                <Text style={styles.pageText}>User Profile Cards</Text>
                <View style={styles.userInputContainer}>
                    <TextInput style={styles.textInput} placeholder="Search" onChangeText={this.userSearchInput} />
                    <Icon name="search-outline" size={21} ></Icon>
                </View>
                <FlatList style={styles.cardsContainer} data={updatedUserList} renderItem={(eachUser) => (
                <RenderCard userSearch={userSearch} eachUser={eachUser.item} key={eachUser.item.uniqueNo} onDeleteUser={this.onDeleteUser} />
                )} />
            </View>
        )
    }
}

export default UserDetails

const styles = StyleSheet.create({
    pageContainer: {
        height: '100%',
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
        paddingVertical: 30,
    },
    pageText: {
        fontSize: 26,
        fontWeight: '700',
    },
    userInputContainer: {
        flexDirection: 'row',
        width: "80%",
        alignItems: 'center',
        backgroundColor: '#f1f5f9',
        height: 42,
        marginVertical: 15,
        borderRadius: 8,
        paddingLeft: 17,
    },
    textInput: {
        width: '85%',
        borderWidth: 0,
        outlineStyle: "none",
    },
    cardsContainer: {
        shadowColor: '#171717',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 0.5,
        width: '80%',
        borderRadius: 12,
        marginVertical: 17,
    },
    profileCard: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 5,
        backgroundColor: '#fff',
        paddingVertical: 13,
        borderRadius: 10,
    },
    profileImage: {
        width: 70,
        height: 70,
        borderRadius: 100,
    },
    profileText: {
        fontSize: 17,
        fontWeight: "700",
        color: "#3a3a3a",
        marginVertical: 3,
    },
    profileTextDes: {
        fontSize: 15,
        fontWeight: "500",
        color: "#6b6b6b",
    }
})