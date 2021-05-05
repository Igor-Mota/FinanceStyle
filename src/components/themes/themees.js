import styled from 'styled-components/native'

export const Container = styled.View`
    width: 100%;
    background-color: ${(props) => props.theme.backGround};
    padding-right: 10px;
    padding-left: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const H1 = styled.Text`
    font-size: 24px;
    color: ${(props) => props.theme.text};
`
export const H2 = styled.Text`
    font-size: 20px;
    color: ${(props) => props.theme.text};
`
export const H3 = styled.Text`
    font-size: 18px;
    color: ${(props) => props.theme.text};
`
export const Text = styled.Text`
    font-size: 18px;
    color: ${(props) => props.theme.text};
`
export const Header = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const Main = styled.View`
    display: flex;
    align-items: center;
    margin-top: 20px;
`
export const Round = styled.View`
    width: 180px;
    height: 180px;
    background-color: ${(props) => props.theme.text};
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Round2 = styled.View`
    width: 150px;
    height: 150px;
    background-color: ${(props) => props.theme.backGround};
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
