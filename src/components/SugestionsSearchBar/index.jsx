import { Container, Content } from "./styles";
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { typeTranslate } from "../../utils"

const SugestionsSearchBar = ({profilesList}) => {
    const history = useHistory()
    
    return (
        <Container>
            <Content>
                {profilesList.length > 0 ?
                    profilesList.map((profile) => 
                        <li key={profile.id} onClick={() => history.push(`/profiles/${profile.id}`)}>
                            <img src={profile.avatar} alt="Foto de perfil"/>
                            <div>
                                <p>{profile.name}</p>
                                <span>Tipo de serviço: {typeTranslate(profile.tags)}</span>
                            </div>
                            <div>
                                <AiOutlineArrowRight/>
                                <label>Ver perfil</label>
                            </div>
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