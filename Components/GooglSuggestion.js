import React, {Component} from 'react';
import {View,Text,Image, StyleSheet,TextInput, FlatList, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const suggestionsList = [
    {id: 1, suggestion: 'Price of Ethereum'},
    {id: 2, suggestion: 'Oculus Quest 2 specs'},
    {id: 3, suggestion: 'Tesla Share Price'},
    {id: 4, suggestion: 'Price of Ethereum today'},
    {id: 5, suggestion: 'Latest trends in AI'},
    {id: 6, suggestion: 'Latest trends in ML'},
  ]

const SuggestionsItem = (props) => {
    const {eachSuggestion, onDisplaySuggestionItem} = props
    const {suggestion} = eachSuggestion

    const displaySuggestion = () => (
        onDisplaySuggestionItem(suggestion)
    )

    return(
        <View style={styles.suggestionContainer}>
            <Text style={styles.suggestionText}>{suggestion}</Text>
            <TouchableHighlight onPress={displaySuggestion}>
                <Image source={{uri:'https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png'}} 
                style={styles.arrowImage} 
                />
            </TouchableHighlight>
        </View>
    )
}  


class GoogleSuggestions extends Component{
    state= {userInput: '', initialSuggestionsList: suggestionsList}

    userSearch = (event) => {
        this.setState({userInput: event})
    }

    onDisplaySuggestionItem = (suggestion) => (
        this.setState({userInput: suggestion})
    )

    render(){
        const {userInput, initialSuggestionsList} = this.state
        const updateSuggestions = initialSuggestionsList.filter(eachSuggestion => (
            eachSuggestion.suggestion.toLowerCase().includes(userInput.toLowerCase())
        ))
        return(
            <View style={styles.pageContainer}>
                <Image source={{uri:'https://assets.ccbp.in/frontend/react-js/google-logo.png'}} style={styles.googleImage} />
                <View style={styles.inputContainer}>
                    <TextInput style={styles.userInput} placeholder="Search Google" onChangeText={this.userSearch} value={userInput} />
                    <Icon name="search-outline" size={24} color="#232425"/>
                </View>
                <View style={styles.suggestionsContainer}>
                    <FlatList data={updateSuggestions} renderItem={(eachSuggestion) => (
                    <SuggestionsItem key={eachSuggestion.item.id} eachSuggestion={eachSuggestion.item} onDisplaySuggestionItem={this.onDisplaySuggestionItem} />
                    )} />
                </View>
            </View>
        )
    }
}  

export default GoogleSuggestions;

const styles = StyleSheet.create({
    pageContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    googleImage: {
        width: "70%",
        height: 100,
        resizeMode: 'contain',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        borderRadius: 20,
        backgroundColor: "#fff",
        shadowColor: "#171717",
        shadowRadius: 3,
        shadowOpacity: 0.3,
        elevation: 0.5,
        paddingHorizontal: 26,
        marginTop: 19,
        marginBottom: 12,
    },
    userInput: {
        height: 40,
        width: '83%',
        outlineStyle: 'none',
        borderWidth: 0,
        fontSize: 15,
        color: '#64748b'
    },
    suggestionsContainer: {
        justifyContent: 'flex-end',
        width: '80%',
    },
    suggestionContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    suggestionText: {
        fontSize: 16,
        color: '#475569',
    },
    arrowImage: {
        width: 21,
        height: 21,
    }
})