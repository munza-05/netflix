import React from 'react';

const blogPosts = [
    {
        date: 'Aug 27, 2023',
        comments: '8 Comments',
        title: 'Healthy Food Healthy Life',
        imageUrl: 'https://th.bing.com/th/id/OIP.nWO-9Zgpe-F_e6OGPz7YQgHaE7?pid=ImgDet&w=182&h=121&c=7',
    },
    {
        date: 'Aug 25, 2023',
        comments: '1 Comment',
        title: 'Healthy Food Healthy Life',
        imageUrl: 'https://cdn.momsdish.com/wp-content/uploads/2019/11/Chimichurri-Sauce-Recipe-Quick-Easy-07-600x400.jpg',
    },
    {
        date: 'Aug 30, 2023',
        comments: '6 Comments',
        title: 'Healthy Food Healthy Life',
        imageUrl: 'https://thumbs.dreamstime.com/z/classic-set-sauces-white-saucers-american-yellow-mustard-classic-set-sauces-white-saucers-american-yellow-mustard-110555156.jpg',
    }
];

const BlogCard = () => {
    return (
        <div className="container mx-auto text-left py-8">
            <h2 className="text-2xl font-bold mb-2">Latest News</h2>
            <p className="text-gray-600 mb-6">Present posts in a best way to highlight interesting moments of your blog.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {blogPosts.map((post, index) => (
                    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
                        <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover "/>
                        <div className="p-4">
                            <p className="text-sm text-green-600">{post.date} / {post.comments}</p>
                            <h3 className="font-bold text-lg mt-2">{post.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogCard;
