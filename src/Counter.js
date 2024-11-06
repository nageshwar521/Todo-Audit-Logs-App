import { useState } from "react";
import styled from "styled-components"

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
`;

const CounterContainer = styled.div`
    display: flex;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const StyledButton = styled.button`
    display: flex;
    padding: 10px 20px;
    font-size: 16px;
`;

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleButtonClick = (func) => {
        if (func === 'up') {
            setCount((state) => (state + 1));
        } else {
            setCount((state) => (state - 1));
        }
    }
    return <>
        <Main>
            <CounterContainer>
                {count}
            </CounterContainer>
            <ButtonContainer>
                <StyledButton onClick={handleButtonClick.bind(null, 'down')}>-</StyledButton>
                <StyledButton onClick={handleButtonClick.bind(null, 'up')}>+</StyledButton>
            </ButtonContainer>
        </Main>
    </>
}

export default Counter;