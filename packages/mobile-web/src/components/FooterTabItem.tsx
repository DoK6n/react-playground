import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';

const iconMap = {
  home: 'Home',
  search: 'Search',
  todo: 'Todo',
  setting: 'Setting',
};

interface Props {
  icon: keyof typeof iconMap;
  to: string;
}

function FooterTabItem({ icon, to }: Props) {
  const iconEl = iconMap[icon];
  return (
    <LinkItem
      to={to}
      className={({ isActive }: { isActive: boolean }) => {
        if (isActive) return 'active';
        return '';
      }}>
      {iconEl}
    </LinkItem>
  );
}

const sharedStyle = css`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  &:active {
    color: steelblue;
  }
`;

const LinkItem = styled(NavLink)`
  ${sharedStyle}
  &.active {
    color: #fff;
    background-color: slategray;
  }
`;

export default FooterTabItem;
