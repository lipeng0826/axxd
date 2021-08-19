import React from "react";
import classNames from 'classnames';

export type ButtonSize = "lg" | "sm";
export type Type = 'primary' | 'default' | 'danger' | 'link';

// TODO: type和interface的区别

interface BaseButtonProps {
    className?: string,
    disabled?: boolean,
    size?: ButtonSize,
    href?: string,
    type?: Type,
    children: React.ReactNode
}

type ButtonNatvieProps = React.ButtonHTMLAttributes<HTMLElement> & BaseButtonProps;
type AnchorButtonProps = React.AnchorHTMLAttributes<HTMLElement> & BaseButtonProps;
export type ButtonProps = Partial<ButtonNatvieProps | AnchorButtonProps>;
const Button: React.FC<ButtonProps> = (props) => {

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