import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from "@storybook/addon-info"
import Button from './index'

const CenterDecorator =  (renderFn: any) => <div style={{textAlign: 'center'}} >{renderFn()}</div>;

const defaultButton = () => (
    <Button onClick={action('clicked')}> default button </Button>
)


const buttonWithSize = () => (
    <>
        <Button size="lg"> large button </Button>
        <Button size="sm"> small button </Button>
    </>
)

const buttonWithType = () => (
    <>
        <Button type="primary"> primary button </Button>
        <Button type="danger"> danger button </Button>
        <Button type="link" href="https://google.com"> link button </Button>
    </>
)
storiesOf('Button Component', module)
    // .addDecorator(CenterDecorator)
    // .addDecorator(withInfo)
    .add('Button', defaultButton)
    .add('不同尺寸的 Button', buttonWithSize)
    .add('不同类型的 Button', buttonWithType)