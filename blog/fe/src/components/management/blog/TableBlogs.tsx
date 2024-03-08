"use client";
import { DeleteIcon } from "@/components/common/icons/DeleteIcon";
import { EditIcon } from "@/components/common/icons/EditIcon";
import { Text } from "@/components/common/ui/Text";
import { getBlogs } from "@/services/getBlogs.service";
import { Blog } from "@/types/blog";
import {
    Button,
    Spinner,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
} from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";

export const TableBlogs = () => {
  const {
    data: blogs,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  const columns = [
    { uid: "postId", name: "Post Id" },
    { uid: "title", name: "Title" },
    { uid: "author_username", name: "Author" },
    { uid: "createdAt", name: "Created At" },
    { uid: "updatedAt", name: "Updated At" },
    { uid: "actions", name: "Actions" },
  ];

  const renderCell = (item: any, columnKey: React.Key) => {
    const cellValue = item[columnKey as keyof Blog];
    if (columnKey === "actions") {
      return (
        <div className="flex flex-row">
          <Button size="md" isIconOnly variant="light">
            <EditIcon />
          </Button>

          <Button size="md" isIconOnly variant="light" color="danger">
            <DeleteIcon />
          </Button>
        </div>
      );
    }
    return cellValue;
  };
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (isLoading) {
    return (
      <main className="container flex h-screen items-center justify-center">
        <Spinner size="lg" />
      </main>
    );
  }

  return (
    <section className="container mx-auto h-screen">
      <Text className="text-center text-2xl font-bold !leading-relaxed tracking-tight text-gray-900 drop-shadow-xl duration-200 dark:text-gray-100 lg:text-3xl xl:text-4xl">
        Blog management
      </Text>
      {blogs && (
        <Table
          aria-label="Example table with custom cells"
          className="px-16 py-6"
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.uid} align={"start"}>
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={blogs} isLoading={isLoading}>
            {(item) => (
              <TableRow key={item.postId}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
    </section>
  );
};
