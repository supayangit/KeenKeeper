import React from 'react';
import Card from './card';
const Dashboard = ({ friends }) => {
    console.log(friends);
    return (
        <div className='space-y-4 sm:space-y-5 lg:space-y-6 mx-auto'>

            <h1 className='font-semibold text-lg sm:text-xl lg:text-2xl'>
                Your Friends
            </h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 mx-auto'>

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