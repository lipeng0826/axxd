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

const Button: React.FC<BaseButtonProps> = (props) => {

    const { className, disabled, size, type, href, children } = props;

    // TODO: 合并class
    const classes = classNames('btn', className, {
        [`btn-${type}`]: type,
        [`btn-${size}`]: size,
        'disabled': (type === 'link') && disabled
    })

    if (type === 'link') {
        return <a
            className={classes}
            href={href}>
            {children}
        </a>;
    } else {
        return <button
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