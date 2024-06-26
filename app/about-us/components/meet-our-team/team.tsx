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

const Team: React.FC = () => {
  return (
    <div className="text-center p-8 bg-ft-primary-yellow-500">
      <h2 className="text-2xl font-bold mb-8">Meet our team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <img className="w-32 h-32 rounded-full object-cover transform transition-transform duration-300 hover:scale-105 hover:shadow-lg" src={member.imageUrl} alt={member.name} />
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
