const Spinner = ({ btn }: { btn?: boolean }) => {
  return (
    <>
      {btn ? (
        <div className="flex items-center justify-center h-[30px] overflow-y-hidden">
          <img src={"/loader.svg"} alt="spinner" width={50} height={30} />
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <img
            src={"/loader.svg"}
            alt="spinner"
            width={200}
            height={100}
          />
        </div>
      )}
    </>
  );
};

export default Spinner;
