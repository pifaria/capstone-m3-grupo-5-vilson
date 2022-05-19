import { Container, Input } from "../HeaderInput/styles";
import { BiSearch } from 'react-icons/bi'
import { useUserInfo } from "../../providers/userInfo";
import { usePhotographerList } from "../../providers/PhotographerList";
import { useState } from "react";
import { useForm } from "react-hook-form";

const HeaderInput = ({ placeholder }) => {
  const { userInfo } = useUserInfo()
  const { photographerList } = usePhotographerList()
  const [filteredList, setFilteredList] = useState()
  const { handleSubmit } = useForm()


  const handleSearch = (e) => {
    e.preventDefault()

    const { value } = e.target
    
    const searchFor = 
      userInfo.type === "photographer" ?
        console.log("oi")
      :
        photographerList.filter((photographer) => (
          photographer.name.toLowerCase().includes(value.toLowerCase())||
          photographer.tags.toLowerCase().includes(value.toLowerCase())
        ))
    setFilteredList(searchFor)
  }

  return (
    <Container onSubmit={handleSubmit(handleSearch)}>
      <Input placeholder={placeholder} onChange={handleSearch} />
      <button type="submit">
        <BiSearch/>
      </button>
    </Container>
  );
};

export default HeaderInput;
