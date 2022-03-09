import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { CATEGORIES } from "../shared/categories";
import { ANIMALS } from "../shared/animals";

function RenderPetInfo(props) {
  const {category} = props;
  if (category) {
    return (
      <View>
        <Card featuredTitle={category.name} image={require("./images/lucy.jpg")}>
          <Text style={{ margin: 10 }}>{category.description}</Text>
        </Card>
      </View>
    );
  }
  return <View />;
}


class PetInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: CATEGORIES,
      animals: ANIMALS
    };
  }

  static NavigationOptions = {
    title: "Pet Information",
  };


  render() {
    const petId = this.props.navigation.getParam("petId");
    const category = this.state.categories.filter(
      (category) => category.id === petId
    )[0];

    const renderPetInfoCard = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          leftAvatar={{ source: require("./images/pete.jpg") }}
        />
      );
    };

    return (
   <View>
       <RenderPetInfo category={category}/>
       <FlatList
        data={this.state.animals} //TRYING TO FIGURE OUT HOW TO FILTER THIS TO GET AN ARRAY WHERE ANIMALS.TYPE === CATEGORIES.NAME
        renderItem={renderPetInfoCard}
        keyExtractor={(item) => item.id.toString()}
      />
   </View>
    
    );
  }
}

export default PetInfo;
