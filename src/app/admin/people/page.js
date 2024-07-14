// app/people/page.js
import React from 'react';
import PeopleForm from '@/components/PeopleForm';
import PeopleList from '@/components/PeopleList';

const PeoplePage = () => {
  return (
    <div className='max-w-4xl mx-auto'>
      <h1 className="text-4xl font-bold text-left my-8">People Management</h1>
      {/* <PeopleForm /> */}
      <PeopleList />
    </div>
  );
};

export default PeoplePage;
