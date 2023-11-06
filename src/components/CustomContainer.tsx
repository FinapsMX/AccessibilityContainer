import { Component, ReactNode, createElement } from "react";

export interface CustomContainerProps {
    alternativeText: string;
    className: string;
    children: any;
    onClick?: () => void;
}

export class CustomContainer extends Component<CustomContainerProps> {
    render(): ReactNode {
        return (
            <div className={this.props.className} onClick={this.props.onClick}>
                {this.props.children}
            </div>
        );
    }
}
