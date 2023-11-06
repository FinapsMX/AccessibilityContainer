import { Component, ReactNode, createElement } from "react";
import { CustomContainer } from "./components/CustomContainer";

import { AccessibilityContainerContainerProps } from "../typings/AccessibilityContainerProps";

import "./ui/AccessibilityContainer.css";

export class AccessibilityContainer extends Component<AccessibilityContainerContainerProps> {
    private readonly onClickHandle = this.onClick.bind(this);

    render(): ReactNode {
        return (
            <CustomContainer
                alternativeText={this.props.alternativeText ? this.props.alternativeText : "Alt"}
                className={`accessible-container ${this.props.class}`}
                onClick={this.onClickHandle}
            >
                {this.props.content}
            </CustomContainer>
        );
    }

    private onClick (): void {
        console.log("On click.");
    }
}
