import Link from "next/link";

const IconButton = ({ url, children }) => {
  return (
    <div className="mr-7 cursor-pointer text-stone-700 dark:text-white hover:text-white dark:hover:text-blue-300">
      <Link href={url}>{children}</Link>
    </div>
  );
};

export default IconButton;
