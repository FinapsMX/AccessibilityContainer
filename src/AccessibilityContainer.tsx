import { Component, ReactNode, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

import { AccessibilityContainerContainerProps } from "../typings/AccessibilityContainerProps";

import "./ui/AccessibilityContainer.css";

export class AccessibilityContainer extends Component<AccessibilityContainerContainerProps> {
    render(): ReactNode {
        return <HelloWorldSample sampleText={this.props.sampleText ? this.props.sampleText : "World"} />;
    }
}
