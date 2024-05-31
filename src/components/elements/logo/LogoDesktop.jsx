import React from "react";

//IMPORT STYLES
import { StyledLogo } from "./LogoDesktop.styles";

const WeddingLogo = () => {
  return (
    <StyledLogo viewBox="0 0 800 100">
      <path d="M30 82.5v1H13.5v-1l.8-.1c1.3-.1 2.4-.7 3.2-1.7s1.2-2.2 1.2-3.7V23.5c0-1.5-.4-2.7-1.2-3.7s-1.9-1.5-3.2-1.7l-.8-.1v-1H30v1l-.8.1c-1.3.1-2.4.7-3.2 1.7s-1.2 2.2-1.2 3.7V77c0 1.5.4 2.7 1.2 3.7s1.9 1.5 3.2 1.7l.8.1zm58.5-50.3l-.8.1-2.8-6.3a10.68 10.68 0 0 0-2.8-3.7c-1.2-1.1-2.5-2-3.9-2.5l-4.9-1.2a23.2 23.2 0 0 0-4.4-.4c-2.2 0-4.3.4-6.2 1.1s-3.6 1.8-4.9 3.1c-1.4 1.3-2.4 2.9-3.2 4.6-.8 1.8-1.2 3.7-1.2 5.9 0 1.4.5 2.9 1.5 4.3 1 1.5 2.3 2.9 4 4.2s3.7 2.6 6.1 3.7c2.3 1.1 4.9 2.1 7.7 2.9s5.4 1.9 7.7 3.2 4.4 2.8 6.1 4.4 3 3.4 4 5.2c.9 1.8 1.4 3.7 1.4 5.7 0 2.5-.5 4.9-1.5 7s-2.3 4-4.1 5.5-3.9 2.8-6.3 3.6c-2.4.9-5.1 1.3-7.9 1.3-2.2 0-4.4-.1-6.7-.4-2.2-.2-4.4-.6-6.5-1.1L53 80.8c-1.8-.6-3.4-1.3-4.6-2V68.2h.9c.2.4.4.9.6 1.4l.6 1.4c1.1 2.5 2.8 4.7 5.1 6.6 2.2 1.9 4.5 3.2 6.9 3.8l4.9.8c1.6.2 3.2.3 4.7.3 2.3 0 4.4-.3 6.3-1s3.6-1.6 4.9-2.8c1.4-1.2 2.4-2.6 3.2-4.3s1.2-3.5 1.2-5.4c0-1.6-.5-3.2-1.5-4.8s-2.3-3.1-4.1-4.6c-1.7-1.5-3.8-2.8-6.2-4s-5-2.2-7.8-3c-2.7-.7-5.2-1.7-7.5-3-2.3-1.2-4.3-2.6-6-4.2s-3-3.2-3.9-5c-.9-1.7-1.4-3.5-1.4-5.2 0-2.7.5-5.2 1.5-7.4 1-2.3 2.4-4.2 4.1-5.9 1.7-1.6 3.8-2.9 6.2-3.9 2.4-.9 5.1-1.4 7.9-1.4 1.5 0 3.2.1 4.9.4 1.7.2 3.5.6 5.2 1.1l4.9 1.6c1.6.6 3 1.3 4.3 2v10.5h.2zm57.9 22.6h-.8l-.4-.8c-.6-1.5-1.7-2.7-3.3-3.6s-3.4-1.4-5.3-1.4h-14.5v33h18.5c2.3 0 4.7-.7 7.1-2.2s4.3-3.4 5.7-5.6l1-1.5h.7l-.9 5.1-.9 5.1h-.1l-.1.7h-42.4v-1l.8-.1c1.3-.1 2.4-.7 3.2-1.7s1.2-2.2 1.2-3.7V23.6c0-1.5-.4-2.7-1.2-3.7s-1.9-1.5-3.2-1.7l-.8-.1v-1h41.9V28h-.7l-.7-1.5c-1-2.3-2.6-4.2-4.7-5.6-2.1-1.5-4.4-2.2-6.7-2.2h-17.7v28.8h14.5c1.9 0 3.7-.4 5.4-1.2 1.6-.8 2.7-1.9 3.3-3.2l.4-.8h.8v12.5h-.1zM193 17.1v1l-.8.1c-1.3.1-2.4.7-3.2 1.7s-1.2 2.2-1.2 3.7V82h19.4c2.1 0 4.1-.7 6.1-2s3.6-3.1 4.7-5.1l1.7-3.2c.1.1.3.1.5.2.3.1.6.2.7.3l-.9 5.3-1 5.3-.1.7h-42.5v-1l.8-.1c1.3-.1 2.4-.7 3.2-1.7s1.2-2.2 1.2-3.7V23.5c0-1.5-.4-2.7-1.2-3.7s-1.9-1.5-3.2-1.7l-.8-.1v-1H193v.1zm88.2 66.4v-1l1.6-.1c1.5-.1 2.5-.7 3.1-1.7s.6-2.2.1-3.7l-6.4-17.3h-26.1l-5.8 16.7c-.4 1.7-.2 3.1.5 4.1.7 1.1 1.9 1.7 3.6 1.8l1.1.1v1h-14.5v-1c1.5-.2 2.9-.7 4-1.4s2.1-1.8 2.8-3.4l22-62.2h1.5l23.9 62c1.5 3.3 3.7 4.9 6.4 4.9v1h-17.8v.2zM279 58.3l-12.9-34.7L254 58.3h25zm96.6-6.3l-.2.9-.6.1c-1 .1-1.9.5-2.5 1.3-.6.7-.9 1.7-.9 2.8v2.3c0 3.4-1.2 6.4-3.5 9 1.7 1.5 3.3 2.8 4.8 3.7 1.4.9 2.8 1.6 4 2s2.4.7 3.4.7c1.1 0 2.1 0 3.1-.2v.7c-1.4.3-2.8.4-4.1.4-1.4 0-2.8-.1-4.2-.4s-2.9-.8-4.5-1.6c-1.5-.7-3.2-1.8-4.9-3-2.1 1.5-4.5 2.8-7.4 3.6-2.9.9-6.1 1.3-9.6 1.3-2.4 0-4.6-.3-6.6-.9s-3.7-1.5-5.2-2.6c-1.4-1.1-2.6-2.4-3.4-3.9s-1.2-3.2-1.2-5a9.65 9.65 0 0 1 1-4.3c.7-1.4 1.6-2.8 2.8-4.1s2.7-2.5 4.4-3.7 3.6-2.1 5.6-3c-1.5-2.4-2.7-4.6-3.5-6.6s-1.3-3.8-1.3-5.2a15.88 15.88 0 0 1 .8-5c.6-1.5 1.3-2.8 2.4-3.9 1-1.1 2.2-2 3.6-2.6s2.9-.9 4.6-.9c1.6 0 3.2.2 4.6.7s2.6 1.1 3.6 1.9 1.8 1.8 2.4 2.9.8 2.4.8 3.7c0 1.6-.3 3.2-1 4.7s-1.7 2.9-2.9 4.1-2.7 2.3-4.4 3.2-3.5 1.5-5.6 1.9l3.7 5.1 4.6 5.7 4.7 5.4 4.3 4.3c1-1.2 1.8-2.5 2.4-3.9s.9-2.9.9-4.5v-2.3c0-1.1-.3-2.1-.9-2.8s-1.4-1.2-2.5-1.3l-.6-.1V52h9zm-11.1 18.1l-4.7-4.4c-1.7-1.7-3.3-3.6-5-5.6l-4.7-5.9-3.9-5.4c-3.1 1.4-5.6 3.3-7.4 5.6-1.9 2.3-2.8 4.7-2.8 7.2 0 1.7.4 3.4 1.1 4.9a11.35 11.35 0 0 0 3 3.9c1.3 1.1 2.9 1.9 4.7 2.5s3.8.9 5.9.9c2.8 0 5.3-.3 7.7-1 2.3-.6 4.3-1.5 6.1-2.7zm-20.3-35.5c0 1.5.5 3.2 1.4 5.2s2.2 4.2 3.9 6.7c1.6-.4 3.1-1 4.4-1.8 1.4-.8 2.5-1.8 3.5-3s1.7-2.5 2.3-3.9a13.3 13.3 0 0 0 .8-4.5c0-2.5-.8-4.5-2.4-6.1s-3.6-2.4-6.1-2.4c-2.3 0-4.2.9-5.7 2.7-1.4 1.9-2.1 4.2-2.1 7.1h0zm103.5 19.7h-.8l-.4-.8c-.6-1.5-1.7-2.7-3.3-3.6s-3.4-1.4-5.3-1.4h-14.5v33.1h18.5c2.3 0 4.7-.7 7.1-2.2s4.3-3.4 5.7-5.6l1-1.5h.7l-.9 5.1-.9 5.1h-.1l-.1.7H412v-1l.8-.1c1.3-.1 2.4-.7 3.2-1.7s1.2-2.2 1.2-3.7V23.2c0-1.5-.4-2.7-1.2-3.7s-1.9-1.5-3.2-1.7l-.8-.1v-1h41.9v10.9h-.7l-.7-1.5c-1-2.3-2.6-4.2-4.7-5.6-2.1-1.5-4.4-2.2-6.7-2.2h-17.7v28.8h14.5c1.9 0 3.7-.4 5.4-1.2 1.6-.8 2.7-1.9 3.3-3.2l.4-.8h.8l-.1 12.4h0zm31-36.7v-1l26.7.1c3 0 5.8.4 8.3 1.3 2.5.8 4.7 2 6.5 3.5s3.3 3.3 4.3 5.4 1.6 4.4 1.6 6.9c0 2.2-.5 4.3-1.4 6.1a15.45 15.45 0 0 1-3.8 5c-1.6 1.5-3.5 2.7-5.8 3.7-2.2 1-4.7 1.7-7.5 2.1 1.3 1.5 3.6 4.3 7 8.4l12.3 14.4 4 4.7c.9 1.1 1.7 1.9 2.4 2.5.6.5 1.2.9 1.7 1s1.1.2 1.8.2v1.2h-2.3c-1.5 0-2.8-.1-3.9-.3-1-.2-2.1-.7-3.1-1.4s-2.2-1.8-3.5-3.2-3-3.4-5.2-5.8l-11.2-13.1-6.8-8h-10.9v25.4c0 1.5.4 2.7 1.2 3.7s1.9 1.5 3.2 1.7l.8.1v1h-16.5v-1l.8-.1c1.3-.1 2.4-.7 3.2-1.7s1.2-2.2 1.2-3.7V23c0-1.5-.4-2.7-1.2-3.7s-1.9-1.5-3.2-1.7h-.7 0zm23.7 32.1c2.5 0 4.9-.4 7-1.2s3.9-1.9 5.4-3.3 2.7-3.1 3.6-5.1 1.3-4.1 1.3-6.4-.4-4.4-1.1-6.3-1.7-3.6-3-4.9c-1.3-1.4-2.8-2.4-4.5-3.2s-3.7-1.2-5.7-1.2H490v31.6h12.4zm61.5-33.1l.1 1-.9.1c-1.5.1-2.5.7-3.1 1.7s-.7 2.2-.3 3.6l16.8 52.5 17.5-60h1.5L615.4 75l15.4-52c.5-1.5.4-2.7-.3-3.7s-1.8-1.5-3.3-1.6l-1.7-.1v-1h14v1l-.8.1c-1.3.1-2.6.7-3.7 1.7s-1.9 2.2-2.4 3.7l-18.4 61.4h-1.5l-20-58.9-17.1 58.9H574l-21-62.2c-.7-1.5-1.5-2.7-2.4-3.4s-2-1.2-3.3-1.4v-1h16.6v.1zM694.5 83v-1l1.6-.1c1.5-.1 2.5-.7 3.1-1.7s.6-2.2.1-3.7l-6.4-17.3h-26.1L661 75.9c-.4 1.7-.2 3.1.5 4.1.7 1.1 1.9 1.7 3.6 1.8l1.1.1v1h-14.5v-1c1.5-.2 2.9-.7 4-1.4s2.1-1.8 2.8-3.4l22-62.2h1.5l23.9 62c1.5 3.3 3.7 4.9 6.4 4.9v1h-17.8v.2zm-2.2-25.2l-12.9-34.7-12.1 34.7h25zm35.5-40.2v-1h10.7l41.7 57.6V23c0-1.5-.4-2.7-1.2-3.7s-1.9-1.5-3.2-1.7l-.8-.1v-1h12.2v1l-.8.1c-1.3.1-2.4.7-3.2 1.7S782 21.5 782 23v61.2h-1.9L757.6 53 735 21.8v54.7c0 1.5.4 2.7 1.2 3.7s1.9 1.5 3.2 1.7l.8.1v1h-12.3v-1l.8-.1c1.3-.1 2.4-.7 3.2-1.7s1.2-2.2 1.2-3.7V23c0-1.5-.4-2.7-1.2-3.7s-1.9-1.5-3.2-1.7h-.9z" />
    </StyledLogo>
  );
};

export default WeddingLogo;