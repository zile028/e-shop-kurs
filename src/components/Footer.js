import React from "react";
import Logo from "./Logo";
import MenuList from "./MenuList";

export default function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="col-md-5">
          <Logo />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            quis aliquid cum animi expedita vero aut. Magnam fugit commodi
            accusantium ab, placeat, iure voluptas voluptate quam, atque
            doloremque eaque corrupti dolor! Non maxime laborum autem debitis
            quos ut, consequatur, et error architecto sed, nihil ratione iure
            aliquid ad temporibus omnis.
          </p>
        </div>
        <div className="col-md-4">
          <h3>Site map</h3>
          <ul className="list-group">
            <MenuList />
          </ul>
        </div>
        <div className="col-md-3">
          <h3>Address</h3>
          <ul className="list-group">
            <li>Street: Address here</li>
            <li>Email: office@techshop.com</li>
            <li>Phone: +012 345 6789</li>
            <li>Phone: +012 345 6789</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
