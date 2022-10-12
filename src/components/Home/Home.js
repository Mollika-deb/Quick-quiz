import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Subject from '../Subject/Subject';
const bgImg = new URL('/src/images/bg2.jpg', import.meta.url);


const Home = () => {
    const subjectsData = useLoaderData();
    const subjects = subjectsData.data;
    return (
        <div >
           
            <div className='bg-slate-200 pb-10'>
                <h1 className='text-5xl m-10 pt-10  text-center font-bold'>Are you Ready for exploring your Knowledge?</h1>
                <div className='flex items-center pl-32 pr-32  justify-between'>
                    <img className='mt-5 rounded-full h-80 pl- img-fluid' src={bgImg} alt="" />
                    <p className='ml-8 text-2xl'>Quizzes are fun and informative ways to test the knowledge of people.The quizzes help the student to learn with practice, as they allow the students to think back to the information previously learned and remember them while quizzing.</p>
                </div>
           </div>
           <div className='grid grid-cols-1 md-grid-cols-2lg-grid-cols-3 gap-6 justify-center'>
               {
                    subjects.map(subject => <Subject 
                        key={subject.id}
                        subject={subject}>
                        </Subject>)
               }
            
           </div>
         
        </div>
        

       
   
    );
};

export default Home;