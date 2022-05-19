import { Container, Content } from './styles'
import Logo from '../../assets/LogoIconMD.png'

const LandingPage = () => {
    return (
        <Container>
            <Content>
                <img alt=" Logo Click Finder" src={Logo}/>
                <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </Content>
        </Container>
    )
}

export default LandingPage 