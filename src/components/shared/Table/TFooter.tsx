import { PaginationComp } from "../Pagination";

type Props = {
  currentPage: number;
  pageCount: number;
  setCurrentPage: (page: number) => void;
};
const TFooter = ({ currentPage, pageCount, setCurrentPage }: Props) => {
  return (
    <div className="my-6 flex justify-between items-center">
      <PaginationComp
        currentPage={currentPage}
        pageCount={pageCount}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default TFooter;
