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
          id: 1,
          linkUrl: "hats"
        },
        {
          title: "jackets",
          common: "shop now",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "firstPage"
        },
        {
          title: "sneakers",
          common: "shop now",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: ""
        },
        {
          title: "womens",
          common: "shop now",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: ""
        },
        {
          title: "mens",
          common: "shop now",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: ""
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem id={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
