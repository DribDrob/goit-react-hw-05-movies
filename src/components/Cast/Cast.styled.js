import styled from 'styled-components';

export const List = styled.ul`
margin-top: 16px;
  padding-left: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  
`;
export const Item = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  margin-bottom: 4px;
  font-size: 14px;
  >div{
    padding: 5px 10px;
    text-align: center;
    background-color: #bfd6f5;
    width: 100%;
  }
`;
export const CardTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 4px;
`;
export const PhotoContainer = styled.div`
  height: 225px;
`;

export const Photo = styled.img`
  object-fit: cover;
`;
