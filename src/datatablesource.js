
export const userColumns = [
    {field:"id",headerName:"ID",width: 70},
    {
        field: "user",
        headerName:"User",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img src={params.row.img} alt="avatar" className="cellImg" />
                    {params.row.username}
                </div>
            )
        }
    },
    {
        field:"email",
        headerName:"Email",
        width:230,
    },
    {
        field:"age",
        headerName:"Age",
        width:100,
    },
    {
        field:"status",
        headerName:"Status",
        width:160,
        renderCell:(params) => {
            return(
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
    },
]

//  tempory data
export const userRows = [
    {
        id: 1,
        username: "Gulshan",
        img:"https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=600",
        status:"active",
        email:"gkkathare03@gmail.com",
        age:23,
    },
    {
        id: 2,
        username: "Gulshan",
        img:"https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=600",
        status:"passive",
        email:"gkkathare03@gmail.com",
        age:23,
    }, {
        id: 3,
        
        username: "Gulshan",
        img:"https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=600",
        status:"pending",
        email:"gkkathare03@gmail.com",
        age:23,
    }, {
        id: 4,
        username: "Gulshan",
        img:"https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=600",
        status:"active",
        email:"gkkathare03@gmail.com",
        age:23,
    }, {
        id: 5,
        username: "Gulshan",
        img:"https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=600",
        status:"pending",
        email:"gkkathare03@gmail.com",
        age:23,
    }, {
        id: 6,
        username: "Gulshan",
        img:"https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=600",
        status:"passive",
        email:"gkkathare03@gmail.com",
        age:23,
    }, {
        id: 7,
        username: "Gulshan",
        img:"https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=600",
        status:"active",
        email:"gkkathare03@gmail.com",
        age:23,
    }, {
        id: 8,
        username: "Gulshan",
        img:"https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=600",
        status:"pending",
        email:"gkkathare03@gmail.com",
        age:23,
    }, {
        id: 9,
        username: "Gulshan",
        img:"https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=600",
        status:"active",
        email:"gkkathare03@gmail.com",
        age:23,
    }, {
        id: 10,
        username: "Gulshan",
        img:"https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=600",
        status:"active",
        email:"gkkathare03@gmail.com",
        age:23,
    }, {
        id: 11,
        username: "Gulshan",
        img:"https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=600",
        status:"active",
        email:"gkkathare03@gmail.com",
        age:23,
    }, {
        id: 12,
        username: "Gulshan",
        img:"https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=600",
        status:"active",
        email:"gkkathare03@gmail.com",
        age:23,
    }, {
        id: 13,
        username: "Gulshan",
        img:"https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=600",
        status:"active",
        email:"gkkathare03@gmail.com",
        age:23,
    },
]