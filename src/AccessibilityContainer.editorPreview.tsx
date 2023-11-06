import { Component, ReactNode, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { AccessibilityContainerPreviewProps } from "../typings/AccessibilityContainerProps";

export class preview extends Component<AccessibilityContainerPreviewProps> {
    render(): ReactNode {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/AccessibilityContainer.css");
}
