import { Injectable } from '@angular/core';

export class ServiceInfo {
  ServiceID: number;

  ServiceName: string;

  Description: string;

  IsActive: boolean;

  
}

const services: ServiceInfo[] = [{
  ServiceID: 1,
  ServiceName: 'Plumber',
  Description: ' Their main duties include installing water supply networks, installing fixtures such as sinks, toilets, and drainage systems, and repairing plumbing equipment or piping.',
  IsActive: true
},
  {
    ServiceID: 2,
    ServiceName: 'Teacher',
    Description: ' Their duties include communicating with students, as well as parents or guardians regarding student progress and development, grading tests, quizzes, and assignments, and developing educational lesson plans.',
    IsActive: true
  },
  {
    ServiceID: 3,
    ServiceName: 'Painter',
    Description: ' Their duties include preparing walls, ceilings, and floors for painting; mixing paint to match samples; and recommending paint types and colours to customers.',
    IsActive: true
  },
  {
    ServiceID: 4,
    ServiceName: 'Makeup artist',
    Description: 'The aim of this course is to provide you with the knowledge and skills required for a career as a professional Makeup Artist or as a keen hobbyist. This is an up-to-date and comprehensive course covering every aspect of makeup artistry.',
    IsActive: true
  },
];

@Injectable()
export class Service {
  getServices(): ServiceInfo[] {
    return services;
  }
}
