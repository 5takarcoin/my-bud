import { TiUser } from "react-icons/ti";

const OneMessage = ({
  message,
  received = false,
}: {
  message: string;
  received: boolean;
}) => {
  return (
    <div
      className={`flex ${
        received ? "flex-row" : "flex-row-reverse"
      } justify-start gap-2 items-end`}
    >
      <div>
        <div
          className={`h-12 w-12 border-2 rounded-full flex justify-center items-center ${
            received ? "bg-white" : "bg-purp"
          }`}
        >
          {received ? (
            <>
              <svg
                className="mb-3"
                xmlns="http://www.w3.org/2000/svg"
                width="26.566"
                height="10.954"
                viewBox="0 0 26.566 10.954"
              >
                <path
                  id="Union_34"
                  data-name="Union 34"
                  d="M18.289,7.3H8.278C7.693,9.43,6.115,10.954,4.26,10.954,1.907,10.954,0,8.5,0,5.477S1.907,0,4.26,0c2.193,0,4,2.13,4.234,4.869h9.578C18.308,2.13,20.114,0,22.306,0c2.353,0,4.26,2.452,4.26,5.477s-1.907,5.477-4.26,5.477C20.451,10.954,18.873,9.43,18.289,7.3Z"
                  fill="#a773f4"
                />
              </svg>
            </>
          ) : (
            <TiUser className="text-white text-4xl" />
          )}
        </div>
      </div>
      <div
        className={`${
          !received ? "bg-white" : "bg-purp text-white "
        } p-4 border-2 rounded-2xl max-w-8/12`}
      >
        <p>{message}</p>
      </div>
    </div>
  );
};

export default OneMessage;
