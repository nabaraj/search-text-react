import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./search/index";
import SearchTable from "./searchTable/index";
import MatchElements from "./matchElement/index";
import Btn from "./hocComponent/Btn";
import TextHover from "./hocComponent/textHover";
import Fblogin from "./Fblogin";
import { Scrollbars } from "react-custom-scrollbars";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: [],
      showContent: false,
      searchJson: [
        {
          _id: "5c7d0457d011c129b2d5e05d",
          name: "Conner Harrington",
          gender: "male"
        },
        {
          _id: "5c7d045731fcc7bae192ea19",
          name: "Frederick Dominguez",
          gender: "male"
        },
        {
          _id: "5c7d04571633f511d63522a5",
          name: "Bridgett Camacho",
          gender: "female"
        },
        {
          _id: "5c7d0457bf1c9c8c488edc0b",
          name: "Brooke Chaney",
          gender: "female"
        },
        {
          _id: "5c7d04576af4a7adc7a02497",
          name: "Vilma Robinson",
          gender: "female"
        },
        {
          _id: "5c7d045757bf02d71a4a137b",
          name: "Stella Lane",
          gender: "female"
        },
        {
          _id: "5c7d04573c4fa84172094c74",
          name: "Megan Vega",
          gender: "female"
        },
        {
          _id: "5c7d0457964307ae91ae6340",
          name: "Reyna Mcleod",
          gender: "female"
        },
        {
          _id: "5c7d04574ccec62e388358a2",
          name: "Blake Lynch",
          gender: "male"
        },
        {
          _id: "5c7d0457a6ead6d0d21d3093",
          name: "Bryant Bowen",
          gender: "male"
        },
        {
          _id: "5c7d045722a5e7fabfe38acb",
          name: "Potter Lawson",
          gender: "male"
        },
        {
          _id: "5c7d04577612c0f759e6efd0",
          name: "Lila Dean",
          gender: "female"
        },
        {
          _id: "5c7d0457b46e59fd9d356d8d",
          name: "Moss Cross",
          gender: "male"
        },
        {
          _id: "5c7d0457e8f2f30a6fd8f5ac",
          name: "Fowler Garrison",
          gender: "male"
        },
        {
          _id: "5c7d045704ba03a3373ebaaa",
          name: "Lynnette Whitney",
          gender: "female"
        },
        {
          _id: "5c7d0457a2562b2c8e9c0d71",
          name: "Kaye Schmidt",
          gender: "female"
        },
        {
          _id: "5c7d04575a98b47943eeb9db",
          name: "Bettye Melendez",
          gender: "female"
        },
        {
          _id: "5c7d0457f99189a8261ea82e",
          name: "Walters Frost",
          gender: "male"
        },
        {
          _id: "5c7d0457696859a4353c55d7",
          name: "Lorna Shepherd",
          gender: "female"
        },
        {
          _id: "5c7d04573e925b36fe1d755a",
          name: "Bailey Mclean",
          gender: "male"
        },
        {
          _id: "5c7d045707d3ba608d091da2",
          name: "Elena Joseph",
          gender: "female"
        },
        {
          _id: "5c7d04574e8478378016c4c3",
          name: "Slater Beard",
          gender: "male"
        },
        {
          _id: "5c7d045734d9001c9a7b33f3",
          name: "Garcia Raymond",
          gender: "male"
        },
        {
          _id: "5c7d045714bc2f0414f021fe",
          name: "Cecile Mcintosh",
          gender: "female"
        },
        {
          _id: "5c7d04579d7250f42200fd08",
          name: "Hillary Hooper",
          gender: "female"
        }
      ]
    };
    this.searchItem = this.searchItem.bind(this);
  }
  searchItem(text) {
    // {
    //   "_id": "5c7d0457d011c129b2d5e05d",
    //   "name": "Conner Harrington",
    //   "gender": "male"
    // }
    let filtereData = this.state.searchJson.filter(item => {
      let lowerCaseItemName = item.name.toLowerCase();
      let textLowercase = text.toLowerCase();
      return lowerCaseItemName.includes(textLowercase);
    });
    console.log(filtereData);
    this.setState({
      searchData: filtereData
    });
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Search searchItem={this.searchItem} />
          <SearchTable searchData={this.state.searchData} />
        </div>
        <MatchElements />
        {/* <Fblogin/> */}
        <button
          className="btn btn-primary"
          onClick={e => {
            let showContent = !this.state.showContent;
            this.setState({ showContent });
          }}
        >
          click
        </button>
        {this.state.showContent && (
          <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={200}>
            <div className="rightsidebar">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
              delectus, necessitatibus ducimus. Eos praesentium, fugiat. Autem
              facere magni, expedita eveniet nihil, fuga consequuntur nostrum
              quae aliquid vel doloremque esse adipisci.
            </div>
          </Scrollbars>
        )}
        <Btn />
        <TextHover />
      </div>
    );
  }
}

export default App;
