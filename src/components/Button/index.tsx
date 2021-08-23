import React, { FC, ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import classNames from 'classnames';

export type ButtonSize = "lg" | "sm";
export type Type = 'primary' | 'default' | 'danger' | 'link';

// TODO: type和interface的区别

interface BaseButtonProps {
    className?: string,
    /* 禁用 */
    disabled?: boolean,
    size?: ButtonSize,
    href?: string,
    type?: Type,
    children: ReactNode
}

type ButtonNatvieProps = ButtonHTMLAttributes<HTMLElement> & BaseButtonProps;
type AnchorButtonProps = AnchorHTMLAttributes<HTMLElement> & BaseButtonProps;
export type ButtonProps = Partial<ButtonNatvieProps | AnchorButtonProps>;

/**
 * Button:......
 */

export const Button: FC<ButtonProps> = (props) => {
    const { className, disabled, size, type, href, children, ...restProps } = props;

    // TODO: 合并class
    const classes = classNames('btn', className, {
        [`btn-${type}`]: type,
        [`btn-${size}`]: size,
        'disabled': (type === 'link') && disabled
    })

    if (type === 'link') {
        return <a
            {...restProps}
            className={classes}
            href={href}>
            {children}
        </a>;
    } else {
        return <button
            {...restProps}
            className={classes}
            disabled={disabled}>
            {children}
        </button>
    }
}

Button.defaultProps = {
    disabled: false,
    type: 'default'
}

export default Button;