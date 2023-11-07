import { Component, ReactNode, createElement } from "react";
import { CustomContainer } from "./components/CustomContainer";
import { AccessibilityContainerPreviewProps } from "../typings/AccessibilityContainerProps";

export class preview extends Component<AccessibilityContainerPreviewProps> {
    contentRenderer = this.props.content.renderer;

    render(): ReactNode {
        return (
            <CustomContainer
                ariaLabel={this.props.ariaLabel ? this.props.ariaLabel : "Aria label"}
                ariaDescription={this.props.ariaDescription ? this.props.ariaDescription : "Aria description"}
                ariaDisabled={this.props.ariaDisabled ? this.props.ariaDisabled : false}
                role={this.props.role ? this.props.role : ""}
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
