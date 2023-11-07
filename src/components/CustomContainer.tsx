import React from "react";
import { Component, ReactNode, createElement } from "react";

export interface CustomContainerProps {
    ariaLabel: string;
    ariaDescription: string;
    ariaDisabled: boolean;
    className: string;
    children: any;
    onClick?: () => void;
}

export class CustomContainer extends Component<CustomContainerProps> {
    private containerElement: React.RefObject<HTMLDivElement> = React.createRef();

    render(): ReactNode {
        return (
            <div
                ref={this.containerElement}
                className={this.props.className}
                onClick={this.props.onClick}
                aria-label={this.props.ariaLabel}
                aria-description={this.props.ariaDescription}
                aria-disabled={this.props.ariaDisabled}
            >
                {this.props.children}
            </div>
        );
    }

    componentDidMount() {
        const container = this.containerElement.current;
        if(!container) return;
        const children = container.querySelectorAll('*');
        children.forEach((child) => {
          child.setAttribute('aria-hidden', 'true');
        });
    }
}
