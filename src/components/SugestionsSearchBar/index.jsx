import { Container, Content } from "./styles";
import { AiOutlineArrowRight } from 'react-icons/ai'

const SugestionsSearchBar = ({profilesList}) => {
    
    
    return (
        <Container>
            <Content>
                {profilesList.length > 0 ?
                    profilesList.map((profile) => 
                        <li key={profile.id}>
                            <img src={profile.avatar} alt="Foto de perfil"/>
                            <div>
                                <h1>{profile.name}</h1>
                                <span>Tipo de serviço: {profile.tags}</span>
                            </div>
                            <AiOutlineArrowRight/>
                        </li>
                    )
                    :
                    null
                }
            </Content>
        </Container>
    )
}

export default SugestionsSearchBar