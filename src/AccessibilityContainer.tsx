import { Component, ReactNode, createElement } from "react";
import { CustomContainer } from "./components/CustomContainer";

import { AccessibilityContainerContainerProps } from "../typings/AccessibilityContainerProps";

import "./ui/AccessibilityContainer.css";

export class AccessibilityContainer extends Component<AccessibilityContainerContainerProps> {
    private readonly onClickHandle = this.onClick.bind(this);

    render(): ReactNode {
        return (
            <CustomContainer
                ariaLabel={this.props.ariaLabel ? this.props.ariaLabel : "Aria label"}
                ariaDescription={this.props.ariaDescription ? this.props.ariaDescription : ""}
                ariaDisabled={this.props.ariaDisabled ? this.props.ariaDisabled : false}
                className={`accessible-container ${this.props.class}`}
                onClick={this.onClickHandle}
            >
                {this.props.content}
            </CustomContainer>
        );
    }

    private onClick (): void {
        this.props.onClick?.execute();
    }
}
