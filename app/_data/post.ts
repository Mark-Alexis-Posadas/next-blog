import { PostTypes } from "../_types/post";
export const blogPosts: PostTypes[] = [
  {
    id: 1,
    title: "Introduction to JavaScript",
    author: "John Doe",
    content: "A beginner's guide to learning JavaScript.",
    date: "2024-07-01",
    likes: 150,
    comments: [
      { user: "Alice", comment: "Great introduction!" },
      { user: "Bob", comment: "Very helpful, thanks!" },
    ],
  },
  {
    id: 2,
    title: "Python Tips and Tricks",
    author: "Jane Smith",
    content: "Advanced techniques for Python programmers.",
    date: "2024-07-05",
    likes: 120,
    comments: [
      { user: "Charlie", comment: "Awesome tips!" },
      { user: "Eve", comment: "Could use more examples." },
    ],
  },
  {
    id: 3,
    title: "HTML5 and CSS3 Fundamentals",
    author: "Emily Johnson",
    content: "Essential skills for web development.",
    date: "2024-07-10",
    likes: 200,
    comments: [{ user: "David", comment: "Clear and concise explanations." }],
  },
  {
    id: 4,
    title: "Machine Learning Basics",
    author: "Michael Brown",
    content: "An overview of machine learning algorithms.",
    date: "2024-07-15",
    likes: 180,
    comments: [
      { user: "Grace", comment: "Interesting read!" },
      { user: "Frank", comment: "Would love more depth on neural networks." },
    ],
  },
  {
    id: 5,
    title: "UI/UX Design Principles",
    author: "Sophia Lee",
    content: "Key principles for effective UI/UX design.",
    date: "2024-07-20",
    likes: 250,
    comments: [
      { user: "Hannah", comment: "Very informative!" },
      { user: "Isaac", comment: "Could you cover more on accessibility?" },
    ],
  },
  {
    id: 6,
    title: "Node.js Best Practices",
    author: "William Taylor",
    content: "Best practices for Node.js development.",
    date: "2024-07-25",
    likes: 190,
    comments: [
      { user: "Jack", comment: "Helped improve my Node.js projects!" },
    ],
  },
  {
    id: 7,
    title: "Data Structures Explained",
    author: "Olivia Wilson",
    content: "Understanding common data structures.",
    date: "2024-07-30",
    likes: 210,
    comments: [
      { user: "Karen", comment: "Very well-written!" },
      { user: "Liam", comment: "Could use more examples in certain sections." },
    ],
  },
  {
    id: 8,
    title: "Cybersecurity Basics",
    author: "Daniel Martinez",
    content: "Essential concepts in cybersecurity.",
    date: "2024-08-01",
    likes: 180,
    comments: [{ user: "Mia", comment: "Informative and practical!" }],
  },
];
