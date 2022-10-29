import React from 'react';
import "./widget.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Widget = ({type}) => {
    let data;
    // temporary
    let amount = 100;
    let diff = 20;

switch(type){
    case "user":
        data={
            title:"USERS",
            isMoney: false,
            link:"See all users",
            icon: (
                <PersonOutlineOutlinedIcon className='icon'
                    style={{
                        color:"red",
                        background:"rgba(226, 135, 132, 0.541)"
                    }}
                />
            )
        }
        break;
        case "order":
            data={
                title:"ORDERS",
                isMoney: false,
                link:"View all orders",
                icon: (
                    <ShoppingCartOutlinedIcon className='icon'
                          style={{
                        color:"gold",
                        background:"rgba(207, 203, 86, 0.395)"
                    }}
                    />
                )
            }
            break;
            case "earning":
                data={
                    title:"EARNINGS",
                    isMoney: true,
                    link:"View net earnings",
                    icon: (
                        <MonetizationOnOutlinedIcon className='icon'
                              style={{
                        color:"green",
                        background:"rgba(149, 233, 149, 0.632)"
                    }}
                        />
                    )
                }
                break;
                case "balance":
                    data={
                        title:"BALANCE",
                        isMoney: true,
                        link:"See details",
                        icon: (
                            <AccountBalanceWalletOutlinedIcon className='icon'
                                  style={{
                        color:"purple",
                        background:"rgba(128,0,128,0.2)"
                    }}
                            />
                        )
                    }
                    break;
        default:
        break;
}


  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
            <KeyboardArrowUpIcon/>
            {diff} %
            </div>
          {data.icon}
        </div>
    </div>
  )
}

export default Widget