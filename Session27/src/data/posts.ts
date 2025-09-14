// Interface cho Blog Post
export interface IPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
}

// Dữ liệu bài viết mẫu
export const posts: IPost[] = [
  {
    id: 1,
    title: "Bắt đầu với React",
    excerpt: "Giới thiệu về React và cách khởi tạo dự án...",
    content: "React là một thư viện JavaScript phổ biến để xây dựng giao diện người dùng. Với React, bạn có thể tạo các component tái sử dụng, dễ bảo trì và mở rộng. Bài viết này sẽ giúp bạn khởi đầu với React và hiểu cách hoạt động cơ bản của nó. Chúng ta sẽ tìm hiểu về JSX, components, props và state trong React."
  },
  {
    id: 2,
    title: "Sử dụng TailwindCSS",
    excerpt: "Tailwind giúp bạn viết CSS nhanh và tiện lợi...",
    content: "TailwindCSS là một framework CSS utility-first giúp bạn xây dựng giao diện nhanh chóng và hiệu quả. Thay vì viết CSS tùy chỉnh, bạn có thể sử dụng các class có sẵn để styling. TailwindCSS giúp bạn tiết kiệm thời gian và tạo ra các giao diện nhất quán. Trong bài viết này, chúng ta sẽ học cách sử dụng các utility classes phổ biến nhất."
  },
  {
    id: 3,
    title: "Giới thiệu về React Router",
    excerpt: "Điều hướng trong React với React Router DOM...",
    content: "React Router DOM là thư viện điều hướng tiêu chuẩn cho các ứng dụng React. Nó cho phép bạn tạo Single Page Application (SPA) với nhiều trang khác nhau. Với React Router, bạn có thể định nghĩa các route, điều hướng giữa các trang và quản lý URL một cách dễ dàng. Bài viết này sẽ hướng dẫn bạn cách thiết lập và sử dụng React Router DOM trong dự án của mình."
  },
  {
    id: 4,
    title: "Quản lý state với Redux",
    excerpt: "Redux giúp quản lý state tập trung...",
    content: "Redux là một thư viện quản lý state dự đoán được cho các ứng dụng JavaScript. Nó giúp bạn quản lý state của ứng dụng một cách tập trung và có thể dự đoán được. Redux đặc biệt hữu ích cho các ứng dụng lớn với nhiều component cần chia sẻ state. Trong bài viết này, chúng ta sẽ tìm hiểu về store, actions, reducers và cách kết nối Redux với React components."
  },
  {
    id: 5,
    title: "Hooks trong React",
    excerpt: "useState, useEffect và các hook phổ biến...",
    content: "React Hooks là một tính năng mới được giới thiệu trong React 16.8, cho phép bạn sử dụng state và các tính năng khác của React mà không cần viết class components. Các hooks phổ biến bao gồm useState để quản lý state, useEffect để thực hiện side effects, và useContext để sử dụng context. Bài viết này sẽ giúp bạn hiểu cách sử dụng các hooks cơ bản và cách tạo custom hooks của riêng mình."
  }
];

// Hàm tìm bài viết theo ID
export const getPostById = (id: number): IPost | undefined => {
  return posts.find(post => post.id === id);
};