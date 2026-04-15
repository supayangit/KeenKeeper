import React from 'react';
import Card from './card';
const Dashboard = ({ friends }) => {
    console.log(friends);
    return (
        <div className='space-y-4'>
            <h1 className='font-semibold text-[24px]'>Your Friends</h1>

            <div className='grid grid-cols-4 gap-4'>

                {friends.map((friend) => {
                    return (
                        <Card key={friend.id} friend={friend}></Card>
                    )
                })}

            </div>
        </div>
    );
};

export default Dashboard;