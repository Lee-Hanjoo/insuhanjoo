import { Dispatch, SetStateAction, useState } from "react";

interface Props {
  bread:number
  setBread: Dispatch<SetStateAction<number>>
}

const BraadOrder = (props: Props) => {
  const {bread, setBread} = props
  const [단체주문, set단체주문] = useState<number>(0)
  return (
    <>
      <div>
        <pre>------------------------</pre>
        Ediya의 현재 빵수 : {bread}
      </div>
      <button onClick={() => {setBread(bread + 1)}}>빵 주문하기</button>
      <button onClick={() => {
        setBread(bread + 단체주문)
        set단체주문(0)
      }}>빵 단체 주문하기</button>
      <input type="text" onChange={(e) => {set단체주문(Number(e.currentTarget.value))}} value={단체주문}/>
    </>
  )
}

export default BraadOrder;