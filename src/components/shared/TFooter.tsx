import { Button } from "../ui/button";
import { PaginationComp } from "./Pagination";
type Props = {
  currentPage: number;
  pageCount: number;
  setCurrentPage: (page: number) => void;
  ItemPerpage: number;
};
const TFooter = ({
  currentPage,
  pageCount,
  setCurrentPage,
  ItemPerpage,
}: Props) => {
  return (
    <div className="my-6 flex justify-between items-center">
      <Button variant={"outline"}>{ItemPerpage}</Button>
      <PaginationComp
        currentPage={currentPage}
        pageCount={pageCount}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default TFooter;
