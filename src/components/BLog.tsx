import image1 from '../assets /img/blog/img-1.png';
import image2 from '../assets /img/blog/img-2.png';
import image3 from '../assets /img/blog/img-3.png';

const Blog = () => {
  const blogPosts = [
    {
      image: image1,
      category: 'Medical',
      date: 'Jan 2, 2023',
      title: '10 foods to avoid for your heart health',
      description:
        "It's normal to feel anxiety, worry, and grief any time you're diagnosed with a condition. That's certainly true...",
      link: '#',
    },
    {
      image: image2,
      category: 'Medical',
      date: 'Jan 2, 2023',
      title: '10 foods to avoid for your heart health',
      description:
        "It's normal to feel anxiety, worry, and grief any time you're diagnosed with a condition. That's certainly true...",
      link: '#',
    },
    {
      image: image3,
      category: 'Medical',
      date: 'Jan 2, 2023',
      title: '10 foods to avoid for your heart health',
      description:
        "It's normal to feel anxiety, worry, and grief any time you're diagnosed with a condition. That's certainly true...",
      link: '#',
    },
  ];

  return (
    <section className="blog">
      <div className="container mx-auto">
        <h2 className="blog__title h2 mb-8 text-center xl:text-left">Our Recent Posts</h2>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="blog__post max-w-[420px] shadow-custom2 rounded-[10px] overflow-hidden cursor-pointer group"
            >
              <div className="relative overflow-hidden">
                <img
                  className="group-hover:scale-110 transition-all duration-500"
                  src={post.image}
                  alt={`blog post ${index + 1}`}
                />
                <div className="bg-accent-tertiary absolute bottom-0 left-0 text-white text-base tracking-[2.24px] font-medium uppercase py-[6px] px-[18px]">
                  {post.category}
                </div>
              </div>

              <div className="px-5 py-6">
                <div className="mb-4">{post.date}</div>
                <h4 className="h4 mb-2">{post.title}</h4>
                <p className="font-light">{post.description}</p>
                <a href={post.link} className="italic underline text-[#4c5354]">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;