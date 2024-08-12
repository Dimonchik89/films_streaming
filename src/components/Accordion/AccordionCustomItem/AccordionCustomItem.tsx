import { Genre } from "@/types/genre";
import Link from "next/link";

interface Props {
  el: Genre;
  basePath: string;
}

const AccordionCustomItem: React.FC<Props> = ({ el, basePath }) => {
  return (
    <Link
      key={el.id}
      className="text-black-800 dark:text-white text-sm ml-2"
      href={`${basePath}/${el.id}`}
    >
      {el.name}
    </Link>
  );
};

export default AccordionCustomItem;
