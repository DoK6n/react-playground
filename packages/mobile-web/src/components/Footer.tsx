import { css } from '@emotion/react';
import FooterTabItem from './FooterTabItem';

function Footer() {
  return (
    <footer css={FooterStyle}>
      <FooterTabItem icon='home' to='/' />
      <FooterTabItem icon='search' to='/search' />
      <FooterTabItem icon='todo' to='/todo' />
      <FooterTabItem icon='setting' to='/setting' />
    </footer>
  );
}

const FooterStyle = css`
  height: 56px;
  border-top: 2px solid ghostwhite;
  display: flex;
`;

export default Footer;
