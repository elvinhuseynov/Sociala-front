import Link from "next/link";
import TestLayout from "../../components/layouts/TestLayout";

interface IProps {}

const Blog: IProps = () => (
  <div>
    <TestLayout>Blog</TestLayout>
    <Link href="/blog/js">JS</Link>
  </div>
);

export default Blog;
