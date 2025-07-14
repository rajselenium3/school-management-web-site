import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Dr. Priya Sharma',
      role: 'Principal, Delhi Public School',
      image:
        'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=200',
      content:
        'EduManage has revolutionized how we manage our school. The parent communication features are exceptional, and our administrative efficiency has improved by 70%.',
      rating: 5,
    },
    {
      name: 'Rajesh Kumar',
      role: 'Director, Greenwood International',
      image:
        'https://images.pexels.com/photos/5212319/pexels-photo-5212319.jpeg?auto=compress&cs=tinysrgb&w=200',
      content:
        "The fee management system is outstanding. We've reduced manual work significantly and parents love the convenience of online payments and instant receipts.",
      rating: 5,
    },
    {
      name: 'Ms. Anjali Patel',
      role: 'Academic Coordinator, Lotus Academy',
      image:
        'https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=200',
      content:
        'The attendance tracking and grade management features are intuitive and comprehensive. Our teachers can focus more on teaching rather than paperwork.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Schools
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join hundreds of schools that have transformed their operations with
            our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-blue-600 opacity-20" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  {testimonial.content}
                </p>
              </div>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
