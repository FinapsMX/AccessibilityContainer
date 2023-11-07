/**
 * This file was generated from AccessibilityContainer.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { ActionValue } from "mendix";

export interface AccessibilityContainerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    ariaLabel: string;
    ariaDescription: string;
    ariaDisabled: boolean;
    content?: ReactNode;
    onClick?: ActionValue;
}

export interface AccessibilityContainerPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    ariaLabel: string;
    ariaDescription: string;
    ariaDisabled: boolean;
    content: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    onClick: {} | null;
}
