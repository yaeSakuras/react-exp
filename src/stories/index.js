import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import button from './button.md';

storiesOf('Button', module)
    .add('with text', withInfo({
            markdown: button,
            inline: true,
        })(() => <div>测试按钮</div>
    ))
    .add('with emoji', () => (
        <div><span role="img" aria-label="so cool">😀 😎 👍 💯</span></div>
    ));