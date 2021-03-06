import styled from 'styled-components'


export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 650px;
  line-height: 56px;
  margin-top: 80px;
`

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;
  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;

    &::placeholder {
      color: #a8a8b3
    }
  }

  button {
     width: 200px;
     height: 70px;
     background: #00d25a;
     border-radius: 0 5px 5px 0;
     border: 0;
     color: #fff;
     font-weight: bold;
     transition: 0.5s;

     &:hover {
       transition: 0.5s;
     }

  }
`
