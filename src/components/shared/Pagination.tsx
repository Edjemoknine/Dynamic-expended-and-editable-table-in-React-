import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "../ui/button";
type PagineProps = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  pageCount: number;
};
export function PaginationComp({
  currentPage,
  setCurrentPage,
  pageCount,
}: PagineProps) {
  return (
    <Pagination>
      <PaginationContent>
        {/* Prev  */}
        <PaginationItem>
          <Button variant={"ghost"} disabled={currentPage === 1}>
            <PaginationPrevious
              href="#"
              onClick={() => setCurrentPage(currentPage - 1)}
            />
          </Button>
        </PaginationItem>
        {/* Number */}
        {Array.from({ length: pageCount }, (_, index) => index + 1).map(
          (page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                isActive={currentPage === page}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        {/* Next */}
        <PaginationItem>
          <Button variant={"ghost"} disabled={currentPage >= pageCount}>
            <PaginationNext
              href="#"
              onClick={() => setCurrentPage(currentPage + 1)}
            />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
