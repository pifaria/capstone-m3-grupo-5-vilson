import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 232.97584533691406px;
  width: 200px;
  border-radius: 0px;
  background-color: #000000;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 90%;

  .avatar {
    box-sizing: border-box;
    width: 65px;
    height: 63px;
    background: url(african-gdef4df589_1920.jpg);
    border: 1.39264px solid #eb5e28;
    border-radius: 50px;
    margin: 0px 0 15px 0;
  }

  h4 {
    color: var(--orange);
    margin: 0 0 25px 0;
  }

  .profile {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    .icon {
      width: 30px;
      height: 30px;
      color: var(--orange);
    }
    h3 {
      color: var(--vanilla);
      margin-left: 5px;
      cursor: pointer;
    }
  }

  .buttons {
    display: flex;
    flex-direction: column;
  }

  .switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  }

  .switch input { 
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--beige);
    -webkit-transition: .4s;
    transition: .4s;
  }

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #28EB53;
}

input:focus + .slider {
  box-shadow: 0 0 1px #28EB53;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

`;
