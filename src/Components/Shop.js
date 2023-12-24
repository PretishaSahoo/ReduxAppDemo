import React from 'react'
import { useDispatch } from 'react-redux'
import {actionCreators} from '../state/index'

export default function Shop() {
  const dispatch = useDispatch();
  return (
    <>
    <div class="card" style={{width : "18rem"}}>
        <div class="card-body">
            <h5 class="card-title"> Deposit /Withdraw Money</h5>
            <button type="button" class="btn btn-warning mx-2" onClick={()=> dispatch(actionCreators.withdrawMoney(100))}>-</button>
            Update Balance
            <button type="button" class="btn btn-warning mx-2" onClick={()=> dispatch(actionCreators.depositMoney(100))}>+</button>
        </div>
    </div>
    
    </>
  )
}
