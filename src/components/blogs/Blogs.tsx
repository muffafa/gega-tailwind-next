import BlogCard from "./BlogCard";
import user1 from "../../../public/userava1.jpg";
import user2 from "../../../public/userava2.jpg";
import user3 from "../../../public/userava3.jpg";
import user4 from "../../../public/userava4.jpg";
import user5 from "../../../public/userava5.jpg";

export default function Blogs() {
  return (
    <section className="bg-black py-24 text-gega-gray">
      <div className="container px-10 lg:px-2">
        <h2 className="text-gega-red">
          <a href="#">Popular Posts</a>
        </h2>
        <div className="grid grid-cols-6 gap-10">
        <BlogCard
            userName="Özlem"
            userAvatar={user1}
            blogText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus distinctio minus quo eligendi voluptatibus aperiam animi nesciunt reiciendis rem et.            "
            comment={2}
            like={5}
            date="ON DEC 17, 2022"
          />
          <BlogCard
            userName="Mustafa"
            userAvatar={user2}
            blogText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus distinctio minus quo eligendi voluptatibus aperiam animi nesciunt reiciendis rem et.            "
            comment={8}
            like={5}
            date="ON DEC 17, 2022"
          />
          <BlogCard
            colSpan="col-span-6 md:col-span-3 lg:col-span-2"
            userName="Hakunamatata"
            userAvatar={user3}
            blogText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus distinctio minus quo eligendi voluptatibus aperiam animi nesciunt reiciendis rem et.            "
            comment={2}
            like={25}
            date="ON DEC 17, 2022"
          />
          <BlogCard
            colSpan="col-span-6 md:col-span-3 lg:col-span-2"
            userName="Rihanna"
            userAvatar={user4}
            blogText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus distinctio minus quo eligendi voluptatibus aperiam animi nesciunt reiciendis rem et.            "
            comment={32}
            like={125}
            date="ON DEC 17, 2022"
          />
          <BlogCard
            colSpan="col-span-6 md:hidden lg:block lg:col-span-2"
            userName="Ahmet Mehmet Hasanoğlu"
            userAvatar={user5}
            blogText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus distinctio minus quo eligendi voluptatibus aperiam animi nesciunt reiciendis rem et.            "
            comment={222}
            like={52}
            date="ON DEC 17, 2022"
          />
        </div>
      </div>
    </section>
  );
}
