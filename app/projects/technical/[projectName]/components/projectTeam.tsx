import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  { name: 'Duy Hung Do', role: 'SOFTWARE ENGINEER', imageUrl: 'https://img.freepik.com/free-photo/smooth-gray-background-with-high-quality_53876-124606.jpg' },
  { name: 'Duy Hung Do', role: 'SOFTWARE ENGINEER', imageUrl: 'https://img.freepik.com/free-photo/smooth-gray-background-with-high-quality_53876-124606.jpg' },
  { name: 'Duy Hung Do', role: 'SOFTWARE ENGINEER', imageUrl: 'https://img.freepik.com/free-photo/smooth-gray-background-with-high-quality_53876-124606.jpg' },
  { name: 'Duy Hung Do', role: 'SOFTWARE ENGINEER', imageUrl: 'https://img.freepik.com/free-photo/smooth-gray-background-with-high-quality_53876-124606.jpg' },
  { name: 'Duy Hung Do', role: 'SOFTWARE ENGINEER', imageUrl: 'https://img.freepik.com/free-photo/smooth-gray-background-with-high-quality_53876-124606.jpg' },
  { name: 'Duy Hung Do', role: 'SOFTWARE ENGINEER', imageUrl: 'https://img.freepik.com/free-photo/smooth-gray-background-with-high-quality_53876-124606.jpg' },
  { name: 'Duy Hung Do', role: 'SOFTWARE ENGINEER', imageUrl: 'https://img.freepik.com/free-photo/smooth-gray-background-with-high-quality_53876-124606.jpg' },
  { name: 'Duy Hung Do', role: 'SOFTWARE ENGINEER', imageUrl: 'https://img.freepik.com/free-photo/smooth-gray-background-with-high-quality_53876-124606.jpg' }
];

const ProjectTeam: React.FC = () => {
  return (
    <div className="text-center p-8 bg-ft-background w-full">
      <h1 className="w-full h-full my-4 text-center text-ft-primary-blue text-4xl font-extrabold">
        Meet Our Team
      </h1>
      <div className="w-[16vw] h-0.5 bg-ft-primary-yellow m-auto" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <img className="w-32 h-32 rounded-full object-cover transform transition-transform duration-300 p-[6px] border-[1px] border-ft-primary-yellow" src={member.imageUrl} alt={member.name} />
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold pb-2">{member.name}</h3>
              <div className='w-[20%] h-[4px] bg-ft-primary-yellow mx-auto' />
              <p className="text-gray-500">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTeam;
