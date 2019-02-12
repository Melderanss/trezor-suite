import {
    H1,
    H2,
    H3,
    H4,
} from 'components/Heading';

import Link from 'components/Link';
import P from 'components/Paragraph';
import React from 'react';
import Tooltip from 'components/Tooltip';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

const Wrapper = styled.div``;

storiesOf('Text', module)
    .addWithJSX('Headings', () => (
        <Wrapper>
            <H1>Heading level 1</H1>
            <H2>Heading level 2</H2>
            <H3>Heading level 3</H3>
            <H4>Heading level 4</H4>
        </Wrapper>
    ))
    .addWithJSX('Link', () => <Link href="https://trezor.io">This is a link.</Link>)
    .addWithJSX('Paragraph', () => <P>This is a paragraph.</P>)
    .addWithJSX('Paragraph small', () => <P isSmaller>This is a paragraph.</P>)
    .addWithJSX('Tooltip', () => (
        <Tooltip
            maxWidth={280}
            placement="bottom"
            content="Passphrase is an optional feature of the Trezor device that is recommended for advanced users only. It is a word or a sentence of your choice. Its main purpose is to access a hidden wallet."
            readMoreLink="https://wiki.trezor.io/Passphrase"
        >
            <div>Text with tooltip</div>
        </Tooltip>
    ));
