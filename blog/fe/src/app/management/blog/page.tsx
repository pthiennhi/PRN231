import { Protected } from "@/components/common/partials/Protected";
import { TableBlogs } from "@/components/management/blog/TableBlogs";

export default function BlogManagement() {
  return (
    <Protected>
      <TableBlogs />
    </Protected>
  );
}
