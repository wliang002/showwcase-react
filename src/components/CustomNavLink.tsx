import React from "react";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";
import { PRIMARY_COLOR, LG_SCREEN_BREAKPOINT } from "../constants";

export const CustomNavLink = React.memo(styled(Navbar.Text)<{
  variant?: string;
}>`
  // Font
  font-family: "Nunito Sans", sans-serif;
  font-feature-settings: normal;
  font-kerning: auto;
  font-optical-sizing: auto;
  font-size: 18px;
  font-stretch: 100%;
  font-style: normal;
  font-variant-caps: normal;
  font-variant-east-asian: normal;
  font-variant-ligatures: normal;
  font-variant-numeric: normal;
  font-variation-settings: normal;
  font-weight: 600;
  color: #222222 !important;
  white-space: nowrap;

  // Positioning
  padding-left: 20px;
  padding-right: 20px;

  &:hover {
    color: ${PRIMARY_COLOR} !important;
  }

  @media (max-width: ${LG_SCREEN_BREAKPOINT}px) {
    padding-left: 0;
  }
`);
