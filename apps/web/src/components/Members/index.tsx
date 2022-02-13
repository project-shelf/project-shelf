import React from 'react';
import Member from '../Member';
import { StyledMembers } from './styles';

interface MembersProps {}

// this will be fetched from DB later with NextJS getStaticProps
const members = [
  {
    id: 1,
    name: 'Simon',
    profile: 'simonhlee97',
  },
  {
    id: 2,
    name: 'Ivan',
    profile: 'ivan',
  },
  {
    id: 3,
    name: 'Josephy',
    profile: 'joseph',
  },
];

const Members = ({}: MembersProps) => {
  return (
    <>
      <StyledMembers>
        <h2>Core Team</h2>
        <ul>
          {members.map((member) => (
            <Member name={member.name} profile={member.profile} />
          ))}
        </ul>
      </StyledMembers>
    </>
  );
};

export default Members;
