import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
export const MyDeleteButton = styled(IconButton)`
  padding: 2px;
  &:hover {
    background-color: #e6a3c7;
  }
`;

export const ListBox = styled.ul`
  width: 330px;
  padding-left: 0px;
`;
export const ContactListItem = styled.li`
  display: flex;
  margin-bottom: 10px;
  background-color: #ff980059;
  padding-left: 8px;
  border-radius: 14px;
  align-items: center;
  border: 1px solid #ff5722;
`;
export const DelBtn = styled.button`
  margin-left: auto;
  font-size: 12px;
  background-color: #dfb6b6;
  border: transparent;
  border-radius: 4px;
  cursor: pointer;
`;
export const Span = styled.span`
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  display: flex;
  padding-right: 20px;
`;
export const Phone = styled.span`
  margin-left: auto;
`;
export const ContactsBox = styled.div`
  padding-top: 8px;
  margin: auto;
  margin-top: 15px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
