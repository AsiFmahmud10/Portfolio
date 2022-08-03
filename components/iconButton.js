import Link from "next/Link";

const IconButton = ({ url, children }) => {
  return (
    <div className="mr-7">
      <Link href={url}>
        {children}
      </Link>
    </div>
  );
};

export default IconButton;