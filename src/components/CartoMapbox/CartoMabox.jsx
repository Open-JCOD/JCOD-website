import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { Map, Marker } from "react-leaflet";
import styled from "styled-components";

import MapboxLayer from "./MapboxLayer";

const MapWrapper = styled.div`
  position: relative;

  .leaflet-container {
    height: 15em;
    width: 100%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
  }
  @media (min-width: 450px) {
    .leaflet-container {
      height: 20em;
    }
  }
  @media (min-width: 1100px) {
    .leaflet-container {
      height: 25em;
    }
  }

  .leaflet-div-icon {
    background: transparent;
    border: none;
  }

  .leaflet-control-container .leaflet-control-zoom {
    transition: opacity 0.5s ease-in-out;
    opacity: 0;
  }
  @media (min-width: 950px) {
    .leaflet-control-container .leaflet-control-zoom {
      transition-delay: 0.8s;
    }
  }
  &:hover .leaflet-control-container .leaflet-control-zoom {
    opacity: 1;
  }

  &::after {
    content: "";
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.4), transparent);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    /* bottom: 0; */
    /* width: 100%; */
    height: 100%;
    z-index: 1000;
    transition: height 0.3s ease-in-out;
  }
  @media (min-width: 950px) {
    &::after {
      transition-delay: 0.8s;
    }
  }
  &:hover::after {
    height: 0;
  }
`;

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1Ijoibmtva2xhIiwiYSI6ImNrMGN3NTVkMjAxa2czZHJ6NXJ6cThmN3cifQ.NENKGZxOa3m1Q4qnyLku0Q";

const position = [21.274699, -157.823366];

export default class CartoMabox extends Component {
  state = {
    center: [21.290341, -157.8378837],
    zoom: 13,
    zoomControl: false
  };

  render() {
    return (
      <MapWrapper>
        <Map
          center={this.state.center}
          zoom={this.state.zoom}
          zoomControl={true}
          scrollWheelZoom={false}
        >
          <Marker position={position} attribution="JSconf Hawai’i 2020" />
          {/* <Popup position={position} attribution="titi">
            <h2>Un truc ?</h2>
            Un trutruc ??
          </Popup> */}
          <MapboxLayer
            accessToken={MAPBOX_ACCESS_TOKEN}
            // eslint-disable-next-line react/style-prop-object
            style="mapbox://styles/mapbox/streets-v9"
          />
        </Map>
      </MapWrapper>
    );
  }
}
