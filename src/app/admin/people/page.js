// app/people/page.js
import React from 'react';
import PeopleForm from '@/components/PeopleForm';
import PeopleList from '@/components/PeopleList';

const PeoplePage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-8">People Management</h1>
      {/* <PeopleForm /> */}
      <PeopleList />
    </div>
  );
};

export default PeoplePage;
