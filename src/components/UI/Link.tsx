import { default as NL } from "next/link";
import { link } from "../../types/types";

const Link: React.FC<link> = ({ href, className, children }) => {
  return (
    <NL href={href} className={className}>
      {children}
    </NL>
  );
};

export default Link;
