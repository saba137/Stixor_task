import React from 'react';
import UserCard from './UserCard'
import { useQuery, gql, NetworkStatus } from '@apollo/client';

const ALL_USERS = gql`
  query {
    getAllUsers {
      id
      firstName
      lastName
      email
      password
    }
  }
`;

function Users ({searchField}){

console.log("search", searchField)
    //Passing query to useQuery hook to fetch data
    const{data, loading, error, networkStatus} = useQuery(ALL_USERS, {fetchPolicy: "cache-and-network"})
    console.log("data", data)
// console.log("data", data['getAllUsers'][0].firstName.toLowerCase())
console.log("search val" , searchField)
    if (networkStatus === NetworkStatus['refetch'])
        return 'Refetching!';
    else if (loading)
        return 'Loading..';
    else if (error)
        return `Error! ${error}`;
    else if(data)
        console.log(data)
        return(
            <div className="is-scrollable-list">
            
                 {data && data.getAllUsers.filter((item) =>{
                     if(searchField == ""){
                     return item;
                     }else if (item.firstName.toLowerCase().includes(searchField?.value?.toLowerCase())){
                     return item;
                     }
                    }).map((item )=> {
                        return(
                            <UserCard
                            key={item.id}
                            item={item}
                            
                        />  
                        );
                    }
                    )
                 }   
                
            </div>
        )
}

export default Users;