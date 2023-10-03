import MenuPost from "../../components/admin/post/menuPost/MenuPost";
import TablesPost from "../../components/admin/post/tablesPost/TablesPost";

const PostList = () => {
  return (
    <div className="max-w-[85%]">
        <MenuPost/>
      <TablesPost/>
    </div>
  );
};

export default PostList;
