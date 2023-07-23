import React,{useState} from 'react';
import swal from 'sweetalert';
import { AiOutlineDelete } from "react-icons/ai";
import './Cart.css'

const Cart=()=>{
const cdata=[{
    item:"phone",
    qty:1,
    price:22,
    total:22,
    id:1
},
{item:"lap",
qty:2,
total:66,
price:33,
id:2}]
const[crData,setCrData]=useState(cdata)

const addQty=(id)=>{
   crData.filter((value)=>{

if(value.id===id)
        {
            value.qty=value.qty+1
            value.total=value.price*value.qty
        }

    })
    console.log(crData)
    setCrData([...crData])

}


const removeQty=(id)=>{
console.log("kkk");
    crData.filter((value)=>
    {
        if(value.id === id)
        {
            value.qty=value.qty-1;
            value.total=value.total-(value.price)
        }
    })
    setCrData([...crData])
}

const proceedBuy=(id)=>{

    swal({
        title: "Are you sure?",
        text: "to confirm the order!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Hurray! Your order placed successfully!", {
            icon: "success",
          });
        } else {
         
        }
      });


}
const[qty,setQty]=useState()
return(<>
    <div className="container">
        <div className="row">
        <table className="table mt-5">
<thead>
    <tr>
        <td>Item</td>
        <td style={{textAlign:"center"}}>Qty</td>
        <td>Price</td>
        <td></td>
    </tr>
</thead>
<tbody>
   
        {crData.map((value,index)=>{
            let uid=`ui${index}`
          return <tr key={uid}><td >{value.item}</td>
                    <td style={{textAlign:"center"}}>
                        <div className="input-group">
                        <button  className='btn btn-secondary' onClick={()=>{addQty(value.id)}}>+</button><button className="btn">{value.qty}</button><button className="btn btn-secondary" onClick={()=>{removeQty(value.id)}}>-</button>     
                        </div>
                       </td>
                    <td>{value.total}</td>
                    <td><button className='btn btn-success' onClick={()=>{proceedBuy(value.id)}}>proceed to buy</button></td>
          </tr>
           
        })}
    
    <tr style={{padding:"10px"}}><td colspan="3" align='center'><button className="btn btn-danger" onClick={()=>{setCrData([])}}><AiOutlineDelete/>Empty</button></td></tr>
</tbody>
</table>
        </div>
    </div>

</>)
    
}
export default Cart;