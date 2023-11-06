import { Component, ReactNode, createElement } from "react";
import { CustomContainer } from "./components/CustomContainer";
import { AccessibilityContainerPreviewProps } from "../typings/AccessibilityContainerProps";

export class preview extends Component<AccessibilityContainerPreviewProps> {
    contentRenderer = this.props.content.renderer;

    render(): ReactNode {
        return (
            <CustomContainer
                alternativeText={this.props.alternativeText ? this.props.alternativeText : "Alt"}
                className={this.props.class}
            >
                <this.contentRenderer>
                    <div />
                </this.contentRenderer>
            </CustomContainer>
        );
    }
}

export function getPreviewCss(): string {
    return require("./ui/AccessibilityContainer.css");
}
