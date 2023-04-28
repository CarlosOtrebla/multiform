import styled from 'styled-components';
// import { isExportSpecifier } from 'typescript';

export const Container = styled.div`
  background-color: #02044a;
  color: white;
  min-height: 100vh;
`;

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

// export const Header = styled.div`
  
// `;

export const Steps = styled.div`
  flex:1;
  display: flex;
`;

export const Sidebar = styled.div`
  width: 250px;
  border-right: 2px solid #16195c;
`;

export const Page = styled.div`
  flex: 1;
  padding-left: 40px;
  padding-top: 40px;
`;