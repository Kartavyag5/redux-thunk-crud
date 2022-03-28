import React,{useEffect} from "react";
import { useDispatch, useSelector, useState } from "react-redux";

import { Table, Tag, Space, Button } from 'antd';
import 'antd/dist/antd.css';
import { deleteUser, loadUsers } from "../redux/actions";
import {useNavigate} from 'react-router-dom';


const Home = ()=>{
    let dispatch = useDispatch();
    let navigate = useNavigate();
    const {users} = useSelector(state => state.data)
    
    const handleDelete  = (id) =>{
       alert("are you sure wanted to delete the user?")
       dispatch(deleteUser(id)) 
       dispatch(loadUsers()) 
    }

    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Contact',
        dataIndex: 'contact',
        key: 'contact',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <a onClick={()=>handleDelete(record.id)}>Delete</a>
          </Space>
        ),
      },
    ];
    

    useEffect(()=>{
        dispatch(loadUsers());

    },[]);

    return (
        <div>
            <h2>Home</h2>
            <Button type='primary' onClick={()=>navigate('/addUser')}>Add user</Button>
            
            <Table columns={columns} dataSource={users} />
        </div>
    )
}

export default Home