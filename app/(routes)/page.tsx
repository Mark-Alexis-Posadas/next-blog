import Post from "../_components/post";
import { blogPosts } from "../_data/post";
import Section from "../_components/section";
import Wrapper from "../_components/wrapper";
export default function Home() {
  return (
    <Section>
      <Wrapper>
        <h1>Home page</h1>
        <ul className="grid grid-cols-3 gap-3">
          {blogPosts.map((post) => {
            const { id, title, author, content, date, likes, comments } = post;
            return (
              <Post
                key={id}
                title={title}
                author={author}
                content={content}
                date={date}
                likes={likes}
                comments={comments}
              />
            );
          })}
        </ul>
      </Wrapper>
    </Section>
  );
}
