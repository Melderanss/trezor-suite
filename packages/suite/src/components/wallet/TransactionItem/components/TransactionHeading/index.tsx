import React, { useState } from 'react';
import styled from 'styled-components';
import { variables, Icon, useTheme } from '@trezor/components';
import { Translation, HiddenPlaceholder, Sign } from '@suite-components';
import { isTxUnknown, getTargetAmount, getTxOperation } from '@wallet-utils/transactionUtils';
import { WalletAccountTransaction } from '@wallet-types';

const Wrapper = styled.span`
    display: flex;
    flex: 1 1 auto;
    text-overflow: ellipsis;
    overflow: hidden;
    align-items: center;
    cursor: pointer;
`;

const HeadingWrapper = styled.div``;

const ChevronIconWrapper = styled.div<{ show: boolean; animate: boolean }>`
    display: flex;
    visibility: ${props => (props.show ? 'visible' : 'hidden')};
    margin-left: ${props => (props.animate ? '5px' : '2px')};
    opacity: ${props => (props.show ? 1 : 0)};
    transition: visibility 0s, opacity 0.15s linear, margin-left 0.2s ease-in-out;

    /* select non-direct SVG children (the icon) and set animation property */
    & > * svg {
        transition: all 0.2ms ease-in-out;
    }
`;

const CryptoAmount = styled.span`
    color: ${props => props.theme.TYPE_DARK_GREY};
    font-size: ${variables.FONT_SIZE.NORMAL};
    font-weight: ${variables.FONT_WEIGHT.MEDIUM};
    /* line-height: 1.5; */
    text-transform: uppercase;
    white-space: nowrap;
    flex: 0;
`;

const StyledHiddenPlaceholder = styled(props => <HiddenPlaceholder {...props} />)`
    /* padding: 8px 0px; row padding */
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

interface Props {
    transaction: WalletAccountTransaction;
    isPending: boolean;
    useSingleRowLayout: boolean;
    txItemIsHovered: boolean;
    nestedItemIsHovered: boolean;
    onClick: () => void;
}

const TransactionHeading = ({
    transaction,
    isPending,
    useSingleRowLayout,
    txItemIsHovered,
    nestedItemIsHovered,
    onClick,
}: Props) => {
    const theme = useTheme();
    const isTokenTransaction = transaction.tokens.length;
    const target = transaction.targets[0];
    const transfer = transaction.tokens[0];
    const symbol = !isTokenTransaction
        ? transaction.symbol.toUpperCase()
        : transfer.symbol.toUpperCase();
    let amount = null;

    const [headingIsHovered, setHeadingIsHovered] = useState(false);

    if (useSingleRowLayout) {
        const targetAmount = !isTokenTransaction
            ? getTargetAmount(target, transaction)
            : transfer.amount;
        const operation = !isTokenTransaction
            ? getTxOperation(transaction)
            : getTxOperation(transfer);

        amount = (
            <CryptoAmount>
                {targetAmount && (
                    <StyledHiddenPlaceholder>
                        {operation && <Sign value={operation} />}
                        {targetAmount} {symbol}
                    </StyledHiddenPlaceholder>
                )}
            </CryptoAmount>
        );
    }

    if (transaction.type === 'failed') {
        // only fee was spent, which is shown in fee row
        amount = null;
    }

    // TODO: intl once the structure and all combinations are decided
    let heading = null;
    // const symbol = transaction.symbol.toUpperCase();

    // We have types: sent, recv, self, failed. We miss approve, swap, ...
    const headingTxType = isTokenTransaction ? transfer.type : transaction.type;
    if (isTxUnknown(transaction)) {
        heading = <Translation id="TR_UNKNOWN_TRANSACTION" />;
    } else if (headingTxType === 'sent') {
        heading = isPending ? (
            <Translation id="TR_SENDING_TRANSACTION" values={{ symbol }} />
        ) : (
            <Translation id="TR_SENT_TRANSACTION" values={{ symbol }} />
        );
    } else if (headingTxType === 'recv') {
        heading = isPending ? (
            <Translation id="TR_RECEIVING_TRANSACTION" values={{ symbol }} />
        ) : (
            <Translation id="TR_RECEIVED_TRANSACTION" values={{ symbol }} />
        );
    } else if (headingTxType === 'self') {
        heading = isPending ? (
            <Translation id="TR_SENDING_TO_MYSELF_TRANSACTION" values={{ symbol }} />
        ) : (
            <Translation id="TR_SENT_TO_MYSELF_TRANSACTION" values={{ symbol }} />
        );
    } else if (headingTxType === 'failed') {
        heading = <Translation id="TR_FAILED_TRANSACTION" />;
    } else {
        heading = <Translation id="TR_UNKNOWN_TRANSACTION" />;
    }

    return (
        <>
            <Wrapper
                onMouseEnter={() => setHeadingIsHovered(true)}
                onMouseLeave={() => setHeadingIsHovered(false)}
                onClick={onClick}
            >
                <HeadingWrapper>{heading}</HeadingWrapper>
                <ChevronIconWrapper
                    show={txItemIsHovered}
                    animate={nestedItemIsHovered || headingIsHovered}
                >
                    <Icon
                        size={nestedItemIsHovered || headingIsHovered ? 18 : 16}
                        color={theme.TYPE_DARK_GREY}
                        icon="ARROW_RIGHT"
                    />
                </ChevronIconWrapper>
            </Wrapper>
            {amount}
        </>
    );
};

export default TransactionHeading;
