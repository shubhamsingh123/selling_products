import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.style.css";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          common: "shop now",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1
        },
        {
          title: "jackets",
          common: "shop now",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2
        },
        {
          title: "sneakers",
          common: "shop now",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3
        },
        {
          title: "womens",
          common: "shop now",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4
        },
        {
          title: "mens",
          common: "shop now",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, common, imageUrl, id, size }) => (
          <MenuItem
            title={title}
            subtitle={common}
            imageUrl={imageUrl}
            id={id}
            size={size}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
