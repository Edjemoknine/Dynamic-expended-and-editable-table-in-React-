type Props = {
  columns: string[];
};
const THead = ({ columns }: Props) => {
  return (
    <div className="table-header-group p-4">
      <div className="table-row border-b bg-gray-900">
        {columns.map((item: string) => (
          <div
            key={item}
            className="table-cell text-left p-3 font-medium capitalize"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default THead;
