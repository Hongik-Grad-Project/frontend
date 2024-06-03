// import React from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import styled from 'styled-components';

// const StyledNavLink = ({ to, label, activePaths }) => {
//   const location = useLocation();
//   const isActive = activePaths.some(path => location.pathname.includes(path));

//   return (
//     <StyledLink to={to} active={isActive}>
//       {label}
//     </StyledLink>
//   );
// };

// const StyledLink = styled(NavLink)`
//     font-family: ${(props) => props.theme.fonts.primary};
//     font-weight: ${(props) => props.theme.fontWeights.bold};
//     font-size: ${(props) => props.theme.fontSizes.fontSize18};
//     color: ${(props) => props.theme.colors.black};

//     text-decoration: none;
//     margin: 0 20px;
//     transition: all 0.3s ease;

//     &.active {
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         padding-top: 10px;
//         padding-bottom: 10px;

//         border-bottom: 1px solid #0F1011; // 활성화 링크 스타일
//     }

// `;
