import ContentsLayout from "@/layouts/ContentsLayout";
import DefaultLayout from "@/layouts/DefaultLayout";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <ContentsLayout title="Career">
        {/* <CareerList /> */}
        <div />
      </ContentsLayout>
      <ContentsLayout title="Blog">
        {/* <NotionPosts blogPosts={blogPosts} /> */}
        <div />
      </ContentsLayout>
    </div>
  );
}
