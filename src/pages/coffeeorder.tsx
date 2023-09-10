import { Dispatch, SetStateAction, useState } from "react";

interface Props {
  coffee: number
  setCoffee : Dispatch<SetStateAction<number>>
}

const CoffeeOrder = (props: Props) => {
  const [단체주문커피, set단체주문커피] = useState<number>(0);

  return (
    <>
      <div>Ediya 의 현재 커피수 : {props.coffee}</div>
      <button
        onClick={() => {
          props.setCoffee(props.coffee + 1);
        }}
      >
        Ediya 커피 주문하기 버튼
      </button>
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          props.setCoffee(props.coffee + 단체주문커피);
        }}
      >
        Ediya 커피 단체주문하기 버튼
      </button>
      <br />
      <input
        type="text"
        onChange={(e) => {
          set단체주문커피(Number(e.currentTarget.value));
        }}
        placeholder={'단체 주문할 커피의 수'}
      />
    </>
  );
};

export default CoffeeOrder;