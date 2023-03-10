import { Component, version } from "react";
import { Text, View, StyleSheet, Image, FlatList, TouchableHighlight } from "react-native";

const resources = {
    emojis: [
      {
        id: 0,
        name: 'Sad',
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png',
      },
      {
        id: 1,
        name: 'None',
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/none-emoji-img.png',
      },
      {
        id: 2,
        name: 'Happy',
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png',
      },
    ],
    loveEmojiUrl: 'https://assets.ccbp.in/frontend/react-js/love-emoji-img.png',
}

const RenderEmoji = (props) => {
    const {eachEmoji, onDisplayThanks} = props
    const {name, imageUrl} = eachEmoji

    const displayThanks = () => {
        onDisplayThanks()
    }
    return(
        <TouchableHighlight onPress={displayThanks}>
            <View style={styles.emojiContainer}>
                <Image source={{uri:`${imageUrl}`}} style={styles.emoji} />
                <Text style={styles.emojiName}>{name}</Text>
            </View>
        </TouchableHighlight>
    )
}

class FeedBackApp extends Component{
    state ={emojiCard: true, thanksCard: false}

    onDisplayThanks = () => (
        this.setState({emojiCard: false, thanksCard: true})
    )

    renderEmojiCard = () => (
        <View style={styles.cardContainer}>
            <Text style={styles.question}>How satisfied are you with our customer support  Performance?</Text>
            <FlatList data={resources.emojis} renderItem={(eachEmoji) => (
                <RenderEmoji eachEmoji={eachEmoji.item} key={eachEmoji.item.id} onDisplayThanks={this.onDisplayThanks} />
            )} />
        </View>
    )

    renderThanksCard = () => (
        <View style={styles.cardContainer}>
            <Image source={{uri: 'https://assets.ccbp.in/frontend/react-js/love-emoji-img.png'}} style={styles.emojiLove} />
            <Text style={styles.thankTitle}>Thank You!</Text>
            <Text style={styles.emojiName}>We will use your feedback to improve our customer support Performance</Text>
        </View>
    )

    render(){
        const {emojiCard, thanksCard} = this.state
        return(
            <View style={styles.feedBackAppContainer}>
                {emojiCard && this.renderEmojiCard() }
                {thanksCard && this.renderThanksCard() }
            </View>
        )
    }
}

export default FeedBackApp;

const styles = StyleSheet.create({
    feedBackAppContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffeeee',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer: {
        backgroundColor: '#fff',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: "center",
        padding: 18,
        borderRadius: 12,
        marginBottom: 10,
    },
    question: {
        fontSize: 19,
        color: '0f172a',
        fontWeight: 700,
        marginBottom: 10,
    },
    emojiContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 12,
        width: '100%',
    },
    emoji: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },
    emojiLove: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    },
    emojiName: {
        color: '#1e293b',
        fontSize: 14,
        marginTop: 4,
    },
    thankTitle: {
        fontSize: 17,
        color: '0f172a',
        fontWeight: 700,
        marginBottom: 10,
    }
})